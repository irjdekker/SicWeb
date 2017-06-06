<?php
file_put_contents("file.txt", serialize($_POST));
header("Location: /documents/poll.php?otm_source=poll%2C%20itility%2C%20workshop&otm_medium=security&otm_campaign=workshop&otm_term=questions%2C%20poll", true, 301);
exit();
?>