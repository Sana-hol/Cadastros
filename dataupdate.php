<?php
// Get the data sent from the client
$data = json_decode(file_get_contents("php://input"), true);

// Connect to the database
$host = "localhost";
$user = "root";
$password = "19372486";
$dbname = "new_schema";
$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Update the data in the database
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
