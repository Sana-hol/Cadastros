<?php

$host = "localhost";
$user = "root";
$pass = "19372486";
$dbname = "new_schema";
$conn = mysqli_connect($host, $user, $pass, $dbname);


if (mysqli_connect_errno()) {
  die("Failed to connect to MySQL: " . mysqli_connect_error());
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
