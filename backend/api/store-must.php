<?php

$new_must = [
   'text' => $_POST["text"],
   'done' => false,
];

$json_list_content = file_get_contents("../data/todolist.json");
$list_content = json_decode($json_list_content,true);

$list_content[] =$new_must;
$json_list_content = json_encode($list_content);
//var_dump($json_list_content);

file_put_contents("../data/todolist.json",$json_list_content);

header("Content-Type: application.json");
echo $json_list_content;
