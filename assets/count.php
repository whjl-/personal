<?php
$a = file_get_contents('count.txt');
$a = $a + 1;
file_put_contents('count.txt', $a);
print($a);
?>