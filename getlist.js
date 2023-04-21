
$(document).ready(function() {
    $.ajax({
        url: "getlist.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            var len = data.length;
            for (var i = 0; i < len; i++) {
                var nome = data[i].Nome;
                var telefone = data[i].Telefone;
                var telefone2 = data[i].Telefone2;
                var endereco = data[i].Endereco;
                var cpf = data[i].CPF;
                var row = "<tr><td>" + nome + "</td><td>" + telefone + "</td><td>" + telefone2 + "</td><td>" + endereco + "</td><td>" + cpf + "</td></tr>";
                $("#myTable tbody").append(row);
            }
        }
    });
});