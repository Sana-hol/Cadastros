function toggleEditable() {
	var cells = document.getElementsByTagName("td");
	for (var i = 0; i < cells.length; i++) {
		if (cells[i].getAttribute("contentEditable") == "false") {
			cells[i].setAttribute("contentEditable", "true");
		} else {
			cells[i].setAttribute("contentEditable", "false");
		}
	}
}


function Hoverover(){$(document).ready(function() {
	// Add click event to table header cells
	$('td').click(function() {
		// Get current value of the header cell
		var currentValue = $(this).text();
		// Create an input field with the current value
		var inputField = '<input type="text" value="' + currentValue + '">';
		// Replace the header cell's text with the input field
		$(this).html(inputField);
		// Focus on the input field
		$(this).find('input').focus();
	});

	// Add blur event to input fields
	$(document).on('blur', 'th input', function() {
		// Get the new value from the input field
		var newValue = $(this).val();
		// Get the column name from the header cell's data attribute
		var columnName = $(this).parent().data('column-name');
		// Get the row ID from the header cell's data attribute
		var rowId = $(this).parent().data('row-id');
		// Send an AJAX request to update the row in the database
		$.ajax({
			type: 'POST',
			url: 'update_row.php',
			data: {columnName: columnName, rowId: rowId, newValue: newValue},
			success: function(response) {
				// Replace the input field with the new value
				$(this).parent().text(newValue);
			},
			error: function() {
				alert('An error occurred while updating the row.');
			}
		});
	});
});
}