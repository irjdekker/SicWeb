<?php
$page = file_get_contents('userrealm.txt');
$return = str_replace('!!!', 'jeroen.dekker@itility.nl', $page);
echo $return;
?>