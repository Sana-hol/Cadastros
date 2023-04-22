<?php

$servername = "localhost";
$username = "root";
$password = "19372486";
$dbname = "new_schema";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set up query to retrieve data from table
$sql = "SELECT id, Nome, Telefone, Telefone2, Endereco, CPF FROM clientes";

// Execute query and store results in $result variable
$result = $conn->query($sql);

// Create empty array to hold results
$data = array();

// Loop through results and add each row to the $data array
while($row = $result->fetch_assoc()) {
    $data[] = $row;
}
 
// Close database connection
$conn->close();

// Encode $data as JSON and return it to JavaScript
echo json_encode($data);

?>
