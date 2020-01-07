<?php

header('Content-Type: application/json');

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
  SELECT id, title, description
  FROM configurazioni
';

$res = $conn -> query($sql);

if ($res -> num_rows < 1) {
  echo json_encode(-2);
  return;
}

$configurazioni = [];
while ($configurazione = $res -> fetch_assoc()) {
  $configurazioni[] = $configurazione;
}

$conn -> close();

echo json_encode($configurazioni);

?>