function clearTable() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
  
    // Start from the last row and remove each row
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  };
  

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
                        var row = "<tr><td contentEditable='false'>" + index + "</td><td contentEditable='false'>" + nome + "</td><td contentEditable='false'>" + telefone + "</td><td contentEditable='false'>" + telefone2 + "</td><td contentEditable='false'>" + endereco + "</td><td contentEditable='false'>" + cpf + "</td></tr>";
                        $("#myTable tbody").append(row);
                    }
                }
            });
        });
    };