<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "osamu";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM videos";
$result = $conn->query($sql);

$videos = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $videos[] = $row;
    }
}

echo json_encode($videos);

$conn->close();
?>
