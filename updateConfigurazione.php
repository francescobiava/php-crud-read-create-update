<?php

header('Content-Type: application/json');

list($id, $title, $description) = [$_POST['id'], $_POST['title'], $_POST['description']];

if (!$id || !$title || !$description) {
  echo json_encode(-2);
  return;
}

$servername = 'localhost';
$username = 'root';
$pws = 'root';
$db = 'HotelDB';

$conn = new mysqli($servername, $username, $pws, $db);

if ($conn -> connect_errno) {
  echo json_encode(-1);
  return;
}

$sql = '
  UPDATE configurazioni
  SET title = ?, description = ?
  WHERE id = ?
';

$stmt = $conn -> prepare($sql);
$stmt -> bind_param('ssi', $title, $description, $id);

$res = $stmt -> execute();

$conn -> close();

echo json_encode($res);

?>