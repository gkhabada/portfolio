<?php
// if($_POST){
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $telegram = $_POST['telegram'];
//     $message = $_POST['message'];
//
// //send email
//     mail("gadzhidadaev95@gmail.com", "This is an email from:" .$name, $email, $telegram, $message);
// }




//
// require_once('phpmailer/PHPMailerAutoload.php');
// $mail = new PHPMailer;
// $mail->CharSet = 'utf-8';
//
// $name = $_POST['name'];
// $email = $_POST['email'];
// $telegram = $_POST['telegram'];
// $message = $_POST['message'];
//
// //$mail->SMTPDebug = 6;                               // Enable verbose debug output
//
// $mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
// $mail->SMTPAuth = true;
// $mail->Username = 'gkhabada@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
// $mail->Password = 'svadba20082016'; // Ваш пароль от почты с которой будут отправляться письма
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
//
// $mail->setFrom('gkhabada@mail.ru'); // от кого будет уходить письмо?
// $mail->addAddress('gadzhidadaev95@mail.ru');     // Кому будет уходить письмо
// $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
// $mail->isHTML(true);                                  // Set email format to HTML
//
// $mail->Subject = 'Сообщение с сайта';
// $mail->Body    = '' .$name . ' оставил cообщение<br>Почта: ' .$email. '<br>telegram: ' .$telegram. '<br>Сообщение: ' .$message ;
// $mail->AltBody = '';
//
//
// if(!$mail->send()) {
//     echo 'Error';
// } else {
//     header('location: thank-you.html');
// }


$name = $_POST['name'];
$email = $_POST['email'];
$telegram = $_POST['telegram'];
$message = $_POST['message'];

$field_email = 'gkhabada@mail.ru';// откуда будут слаться письма

$mail_to = 'gadzhidadaev95@gmail.com';
$subject = 'from site';

$body_message = '
<html>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <body>
        <p>
            Имя: '.$name.'<br>
            Email: '.$email.'<br>
            Telegram: '.$telegram.'<br>
            Текст: '.$message.'
        </p>
    </body>
</html>';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status=mail($mail_to, $subject, $body_message, $headers);


?>
