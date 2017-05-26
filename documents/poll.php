<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Security poll - Sicilie workshop</title>
    <style type="text/css" media="screen">
        body,
        html {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        * {
            padding: 0;
            margin: 0;
        }

        iframe {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border: none;
        }
    </style>
    <link rel="SHORTCUT ICON" href="https://itlity.nl/images/favicon_a.ico">
</head>
<body>
    <iframe src="<?php $page = file_get_contents('poll.txt'); echo $page; ?>" scrolling="yes"></iframe>
</body>
</html>
