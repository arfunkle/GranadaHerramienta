<?php


if($_POST['json'])
{
    $stringData = json_encode($_POST["json"]);
    $open_json = fopen('words.json', 'w');
    if($open_json){
        if(fwrite($open_json, $_POST['json'] === FALSE))
        {
            die('failed to write to file');
        }
        fclose($open_json);
    }
    else
    {
        die('failed to open file');
    }
} else die('something went wrong!');
?>