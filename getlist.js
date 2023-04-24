function clearTable() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
  
    // Start from the last row and remove each row
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    };
    GetList();
  };

function clearTableedit() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
  
    // Start from the last row and remove each row
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    };
    GetListEdit();
  };  
  
  function EnviarCadastro(){
    const form = document.getElementById("cliente-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "cliente.php");
        xhr.onload = () => {
        if (xhr.status === 200) {
            alert("Cliente cadastrado com sucesso!");
            form.reset()
            clearTable()
            GetList();
        } else {
            alert("Ocorreu um erro ao cadastrar o cliente.");
        }
        };
        xhr.send(data);
    });





  };
function GetListEdit(){
  $(document).ready(function() {
      $.ajax({
          url: "getlist.php",
          type: "GET",
          dataType: "json",
          success: function(data) {
              var len = data.length;
              for (var i = len - 1 ; i >= 0; i--) {
                  var index = data[i].id;
                  var nome = data[i].Nome;
                  var telefone = data[i].Telefone;
                  var telefone2 = data[i].Telefone2;
                  var endereco = data[i].Endereco;
                  var cpf = data[i].CPF;
                  var row = "<tr><td contentEditable='false' > <button onclick=DeleteEntry(this.id) id="+index+">delete</button></td><td>" + index + "</td><td contentEditable='false'>" + nome + "</td><td contentEditable='false'>" + telefone + "</td><td contentEditable='false'>" + telefone2 + "</td><td contentEditable='false'>" + endereco + "</td><td contentEditable='false'>" + cpf + "</td></tr>";
                  $("#myTable tbody").append(row);
              }
          }
      });
  });
};


function updateData() {
	var table = document.getElementById("myTable");
	var rows = table.rows;
	var data = [];
  
	// Loop through all rows except the header
	for (var i = 1; i < rows.length; i++) {
	  var cells = rows[i].cells;
	  var rowData = {};
  
	  // Get the data for each cell in the row
	  rowData.id = cells[1].innerHTML;
	  rowData.nome = cells[2].innerHTML;
	  rowData.telefone = cells[3].innerHTML;
	  rowData.telefone2 = cells[4].innerHTML;
	  rowData.endereco = cells[5].innerHTML;
	  rowData.cpf = cells[6].innerHTML;
  
	  data.push(rowData);
	}
  
	// Send the data to the server using AJAX
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "dataupdate.php", true);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.onload = function () {
	  if (xhr.readyState === xhr.DONE) {
		if (xhr.status === 200) {
      toggleEditable()
		  alert("Salvo com sucesso!");
		} else {
            alert("Ocorreu um erro ao Salvar");
        }
	  }
	};
	xhr.send(JSON.stringify(data));
  }
  

function GetList(){
        $(document).ready(function() {
            $.ajax({
                url: "getlist.php", 
                type: "GET",
                dataType: "json",
                success: function(data) {
                    var len = data.length;
                    for (var i = len - 1 ; i >= 0; i--) {
                        var index = data[i].id;
                        var nome = data[i].Nome;
                        var telefone = data[i].Telefone;
                        var telefone2 = data[i].Telefone2;
                        var endereco = data[i].Endereco;
                        var cpf = data[i].CPF;
                        var row = "<tr><td>" + index + "</td><td>" + nome + "</td><td>" + telefone + "</td><td>" + telefone2 + "</td><td>" + endereco + "</td><td>" + cpf + "</td></tr>";
                        $("#myTable tbody").append(row);
                    }
                }
            });
        });
    };


function DeleteEntry(clickedid){
    const id = clickedid;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'delete.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        clearTable()
        GetListEdit();
      }
    };
    xhr.send(`id=${id}`);
   
}

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
