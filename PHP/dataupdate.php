<?php

$data = json_decode(file_get_contents("php://input"), true);

$host = "localhost";
$user = "root";
$pass = "19372486";
$dbname = "new_schema";
$conn = mysqli_connect($host, $user, $pass, $dbname);


if (mysqli_connect_errno()) {
  die("Failed to connect to MySQL: " . mysqli_connect_error());
}
foreach ($data as $row) {
    $id = $row['id'];
    $nome = $row['nome'];
    $telefone = $row['telefone'];
    $telefone2 = $row['telefone2'];
    $endereco = $row['endereco'];
    $cpf = $row['cpf'];
    $sql = "UPDATE clientes SET nome='$nome', telefone='$telefone', telefone2='$telefone2', endereco='$endereco', cpf='$cpf' WHERE id=$id";
    $conn->query($sql);
}

$conn->close();

echo "Data updated successfully";
?>
