<?php
// $_FILES["file"] :
// error: 0
// name: "test.txt"
// size: 26
// tmp_name: "/tmp/phphHgwQH"
// type: "text/plain"
$uploaddir = dirname(__FILE__) . '/uploads/';
$uploadfile = $uploaddir . basename($_FILES['file']['name']);

$status = move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);

echo json_encode([
	"status" => $status,
	"path" => $uploadfile,
]);
