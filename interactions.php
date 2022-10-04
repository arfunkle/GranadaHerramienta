<?php



$stringData = json_encode($_POST["json"]);
file_put_contents("./words.json", $stringData)

?>