<?php
use PHPMailer\PHPMailer\PHPMailer;

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

require_once "Mailer/PHPMailer.php";
require_once "Mailer/SMTP.php";
require_once "Mailer/Exception.php";

$mail = new PHPMailer();

//Серверные настройки
$mail->CharSet = "utf-8";
$mail->isSMTP();
$mail->Host       = 'smtp.gmail.com';                    // Установка smtp сервера
$mail->SMTPAuth   = true;
$mail->Username   = 'shurokij009@gmail.com';                     // Логин от почты
$mail->Password   = 'WideVlad9601Wide';                               // Пароль от почты
$mail->SMTPSecure = "ssl";         // Включение шифрования
$mail->Port       = 465;                                    // Порт

//Recipients
$mail->setFrom('shyrokij009@gmail.com', 'Builder');      // Отправитель
$mail->addAddress('vetena8330@dufeed.com', 'Joe User');     // Получатель
+
// Добавление документов
//$mail->addAttachment('/var/tmp/file.tar.gz');
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    

// Контент письма
$mail->isHTML(true);
$mail->Subject = 'Письмо с тестового сайта';          // Тема письма
$mail->Body    = 'Имя: ' . $firstName . '<br>Фамилия: ' . $lastName .'<br>Маил: ' . $email .'<br>Телефон: ' . $tel . '<br>Сообщение: ' . $message;     // Тело письма
$mail->AltBody = 'Письмо без html';      // Тело письма для клиентов не обрабатывающих html

$mail->send();

?>