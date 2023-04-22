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


function updateData() {
	var table = document.getElementById("myTable");
	var rows = table.rows;
	var data = [];
  
	// Loop through all rows except the header
	for (var i = 1; i < rows.length; i++) {
	  var cells = rows[i].cells;
	  var rowData = {};
  
	  // Get the data for each cell in the row
	  rowData.id = cells[0].innerHTML;
	  rowData.nome = cells[1].innerHTML;
	  rowData.telefone = cells[2].innerHTML;
	  rowData.telefone2 = cells[3].innerHTML;
	  rowData.endereco = cells[4].innerHTML;
	  rowData.cpf = cells[5].innerHTML;
  
	  data.push(rowData);
	}
  
	// Send the data to the server using AJAX
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "dataupdate.php", true);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.onload = function () {
	  if (xhr.readyState === xhr.DONE) {
		if (xhr.status === 200) {
		  console.log(xhr.responseText);
		}
	  }
	};
	xhr.send(JSON.stringify(data));
  }
  