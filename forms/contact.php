<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
    exit;
}

// Support both JSON body and standard Form POST
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);

$name = !empty($input['name']) ? htmlspecialchars($input['name']) : (!empty($_POST['name']) ? htmlspecialchars($_POST['name']) : 'Website Lead');
$phone = !empty($input['phone']) ? htmlspecialchars($input['phone']) : (!empty($_POST['phone']) ? htmlspecialchars($_POST['phone']) : 'Not provided');
$email = !empty($input['email']) ? htmlspecialchars($input['email']) : (!empty($_POST['email']) ? htmlspecialchars($_POST['email']) : 'Not provided');
$service = !empty($input['service']) ? htmlspecialchars($input['service']) : (!empty($input['requirement']) ? htmlspecialchars($input['requirement']) : (!empty($_POST['service']) ? htmlspecialchars($_POST['service']) : 'General Guidance'));
$contactMethod = !empty($input['contactMethod']) ? htmlspecialchars($input['contactMethod']) : (!empty($_POST['contactMethod']) ? htmlspecialchars($_POST['contactMethod']) : 'Not specified');
$message = !empty($input['message']) ? htmlspecialchars($input['message']) : (!empty($_POST['message']) ? htmlspecialchars($_POST['message']) : 'No message details provided');
$formSource = !empty($input['formSource']) ? htmlspecialchars($input['formSource']) : 'Website Form';

$targetEmail = 'avsprosperity@gmail.com';

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'avsprosperity@gmail.com';
    $mail->Password   = 'swmyumktmoltncau'; // Gmail App password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('avsprosperity@gmail.com', 'AVS Prosperity Website');
    $mail->addAddress($targetEmail, 'AVS Prosperity');
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $name);
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Consultation Request: {$name} - {$service} (AVS Prosperity)";

    $mail->Body = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #C9A24D; padding: 24px; border-radius: 12px; background-color: #FFFFFF;'>
      <h2 style='color: #0B1F33; border-bottom: 2px solid #C9A24D; padding-bottom: 12px; margin-top: 0;'>New Lead Received</h2>
      <p style='font-size: 14px;'><strong>Full Name:</strong> {$name}</p>
      <p style='font-size: 14px;'><strong>Phone Number:</strong> <a href='tel:{$phone}' style='color: #0B1F33; font-weight: bold;'>{$phone}</a></p>
      <p style='font-size: 14px;'><strong>Email Address:</strong> <a href='mailto:{$email}'>{$email}</a></p>
      <p style='font-size: 14px;'><strong>Service / Area of Guidance:</strong> {$service}</p>
      <p style='font-size: 14px;'><strong>Preferred Contact Method:</strong> {$contactMethod}</p>
      <p style='font-size: 14px;'><strong>Form Source:</strong> {$formSource}</p>
      <div style='background-color: #F8F6F0; padding: 16px; border-left: 4px solid #C9A24D; border-radius: 4px; margin: 16px 0;'>
        <strong style='color: #0B1F33;'>Message / Details:</strong><br>
        <p style='margin: 8px 0 0 0; color: #555;'>" . nl2br($message) . "</p>
      </div>
      <hr style='border: none; border-top: 1px solid #EEEEEE; margin: 20px 0;'>
      <p style='font-size: 12px; color: #888888; margin-bottom: 0;'>This email was sent automatically from the AVS Prosperity website consultation form to <strong>{$targetEmail}</strong>.</p>
    </div>
    ";

    $mail->AltBody = "New Lead: {$name}\nPhone: {$phone}\nEmail: {$email}\nService: {$service}\nMethod: {$contactMethod}\nSource: {$formSource}\nMessage: {$message}";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Message has been sent successfully to {$targetEmail}"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
?>
