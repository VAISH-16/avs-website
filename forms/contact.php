<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // Adjust path if needed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("HTTP/1.0 405 Method Not Allowed");
    echo "Method Not Allowed";
    exit;
}
$mail = new PHPMailer(true);
// echo "hihhii";die;
try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'salunkhevaishnavi2001@gmail.com';
    $mail->Password   = 'zsgdpfqqwhegcbpc'; // App password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('salunkhevaishnavi2001@gmail.com', 'Vaishnavi Salunkhe');
    $mail->addAddress('salunkhevaishnavi2001@gmail.com', 'Vaishnavi Salunkhe');

    // Content
    $mail->isHTML(true);
    $mail->Subject = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : 'No Subject';
    $mail->Body    = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : 'No Message';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    // Enable verbose debug output
    $mail->SMTPDebug = 2;

    // Send email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
