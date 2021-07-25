<?php

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'POST') {
  exit();
}

$project_name = 'Kallyas';
$admin_email = 'kallyas@alsu.co.il';
$from_subjuct = 'Заявка с сайта Kallyas';
$message = '';
$color_counter = 1;

//обработка data (form.js)
foreach ($_POST as $key => $value){
    if($value === '') continue;
    $color = $color_counter % 2 ===0 ? '#fff' : '#f8f8f8';
    $message .= "
        <tr style='background-color: $color;'>
            <td style='padding: 10px; border: 1px solid black;'>$key</td>
            <td style='padding: 10px; border: 1px solid black;'>$value</td>
        </tr>
    ";
    $color_counter++;
}

//функция для правильной кодировки
function adopt($text){
    return '=?utf-8?B?'.base64_encode($text).'?=';
}
$message = "<table style='width: 100%;'>$message</table>";

$headers  = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From:" . adopt($from_subjuct) . "<$admin_email>\r\n";

$success_send = mail($admin_email, adopt($from_subjuct), $message, $headers);

if($success_send) echo 'success'; else echo 'error';