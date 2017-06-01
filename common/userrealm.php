<?php
$user = $_GET['user'];
$setting = 1;

$settings = file_get_contents('settings.txt');
$page = file_get_contents('userrealm.txt');

foreach(preg_split('~[\r\n]+~', $settings) as $line){
    if(empty($line) or ctype_space($line)) continue; 
    if(!strlen($line = trim($line))) continue;
    list($file_user, $file_setting) = explode(":", $line);
    
    if ($user == $file_user){
        $setting = $file_setting;
        break;
    }
}

$page = str_replace('!!!', $user, $page);
$return = str_replace('^^^', $setting, $page);
echo $return;
?>