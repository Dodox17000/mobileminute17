<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  $_POST = json_decode(file_get_contents('php://input'), true);

  if(isset($_POST['email']) && $_POST['email'] != ''){
    header('Access-Control-Allow-Origin: *');

    $msg = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/></head><body>";
    $msg .= "Nom : " . $_POST['lastName'] . "<br />";
    $msg .= "Prénom : " . $_POST['firstName'] . "<br />";
    $msg .= "Email : " . $_POST['email'] . "<br />";
    $msg .= "Téléphone : " . $_POST['phone'] . "<br />";
    $msg .= "Message :<br /> " .  nl2br($_POST['message']) . "<br />";
    $msg .= "</body></html>";
    
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    
    date_default_timezone_set("Europe/Paris"); 
    $mail             = new PHPMailer(); 
    $body             = $msg; 
    $mail->CharSet = 'UTF-8';
    $mail->IsSMTP();
    $mail->SMTPAuth   = true;
    $mail->SMTPOptions = array('ssl' => array('verify_peer' => false,'verify_peer_name' => false,'allow_self_signed' => true)); // ignorer l'erreur de certificat.
    $mail->Host       = "mail.mobileminute17.fr";  
    $mail->Port       =  465;
    $mail->Username   = "postmaster@mobileminute17.fr";
    $mail->Password   = "a#L90c0r";        
    $mail->From       = "postamster@mobileminute17.fr"; //adresse d’envoi correspondant au login entré précédemment
    $mail->FromName   = "MOBILE MINUTE"; // nom qui sera affiché
    $mail->Subject    = "Demande sur site mobileminute17.fr"; // sujet
    $mail->AltBody    = $msg;
    $mail->WordWrap   = 50; // nombre de caractères pour le retour à la ligne automatique
    $mail->MsgHTML($body); 
    $mail->AddReplyTo("postmaster@mobileminute17","MOBILE MINUTE");
    $mail->AddAddress("giustinadorine@gmail.com");
    $mail->IsHTML(true); // envoyer au format html, passer a false si en mode texte 
    if(!$mail->Send()) {
      echo json_encode("Mailer Error: " . $mail->ErrorInfo);
    } else {
      echo json_encode('ok');
    }
  }else echo json_encode($_POST);
?>
