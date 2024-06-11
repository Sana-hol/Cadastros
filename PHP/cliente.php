<?php

$host = "localhost";
$user = "root";
$pass = "19372486";
$dbname = "new_schema";
$conn = mysqli_connect($host, $user, $pass, $dbname);


if (mysqli_connect_errno()) {
  die("Failed to connect to MySQL: " . mysqli_connect_error());
}

$nome = $_POST["nome"];
$telefone = $_POST["telefone"];
$telefone2 = $_POST["telefone2"];
$endereco = $_POST["endereco"];
$cpf = $_POST["cpf"];

// Inserir os dados na tabela
$sql = "INSERT INTO clientes (nome, telefone, telefone2, endereco, cpf) VALUES ('$nome', '$telefone', '$telefone2', '$endereco', '$cpf')";
if (mysqli_query($conn, $sql)) {
  http_response_code(200);
} else {
  http_response_code(500);
}

// Fechar a conexão com o banco de dados
mysqli_close($conn);
?>
