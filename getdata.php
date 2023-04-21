<?php
// Connect to the MySQL database
$host = "localhost";
$user = "username";
$password = "password";
$database = "mydatabase";
$conn = mysqli_connect($host, $user, $password, $database);

// Check for errors
if (mysqli_connect_errno()) {
  die("Failed to connect to MySQL: " . mysqli_connect_error());
}

// Prepare the SQL query
$sql = "SELECT * FROM mytable";

// Execute the query
$result = mysqli_query($conn, $sql);

// Check for errors
if (!$result) {
  die("Error: " . $sql . "<br>" . mysqli_error($conn));
}

// Convert result set to JSON
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}
$json = json_encode($data);

// Close the database connection
mysqli_close($conn);

// Set content type to JSON
header("Content-type: application/json");

// Return the JSON data
echo $json;
?>
