<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$modal__name = $_POST['modal__name'];
$modal__phone = $_POST['modal__phone'];
$modal__email = $_POST['modal__email'];
$modal__message = $_POST['modal__message'];

// Формирование самого письма
if(isset($_POST['email'])){
    // если есть что-то в $_POST['email']
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новый электронный адрес:</h2>
    <b>Эл.адрес:</b> $email<br>
    ";
} else {
    // если нет, отправлена форма с телефоном и пр.
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение от:</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}

if(isset($_POST['modal__name'])){
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение от:</h2>
    <b>Имя:</b> $modal__name<br>
    <b>Телефон:</b> $modal__phone<br><br>
    <b>Почта:</b> $modal__email<br><br>
    <b>Сообщение:</b><br>$modal__message
    ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'nikitast68@gmail.com'; // Логин на почте
    $mail->Password   = 'mvvzbwsomdoabpfl'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('nikitast68@gmail.com', 'No Stress'); // Адрес самой почты и имя отправителя
    $mail->FromName = 'stukovnik.ru';

    // Получатель письма
    $mail->addAddress('nikitosik999.98@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
?>
