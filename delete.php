<?php
  // connect to database
  $db_host = "localhost";
  $db_user = "root";
  $db_pass = "19372486";
  $db_name = "new_schema";

  $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

  // check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // check if ID is provided
  if(isset($_POST['id'])) {
    $id = $_POST['id'];
    // delete entry with the provided ID
    $sql = "DELETE FROM clientes WHERE id = '$id'";

    if (mysqli_query($conn, $sql)) {
      echo "Record deleted successfully";
    } else {
      echo "Error deleting record: " . mysqli_error($conn);
    }
  }

  // close database connection
  mysqli_close($conn);
?>