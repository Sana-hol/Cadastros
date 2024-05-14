<?php

$host = "localhost";
$user = "root";
$pass = "19372486";
$dbname = "new_schema";
$conn = mysqli_connect($host, $user, $pass, $dbname);


if (mysqli_connect_errno()) {
  die("Failed to connect to MySQL: " . mysqli_connect_error());
}
  if(isset($_POST['id'])) {
    $id = $_POST['id'];
    $sql = "DELETE FROM clientes WHERE id = '$id'";

    if (mysqli_query($conn, $sql)) {
      echo "Record deleted successfully";
    } else {
      echo "Error deleting record: " . mysqli_error($conn);
    }
  }
  mysqli_close($conn);
?>