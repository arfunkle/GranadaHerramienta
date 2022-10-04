<?php



$stringData = json_encode($_POST["json"]);
if (file_put_contents("words.json", $stringData))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

?>