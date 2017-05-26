<?php
$page = file_get_contents('userrealm.txt');
$return = str_replace('!!!', $_GET['user'], $page);
echo $return;
?>