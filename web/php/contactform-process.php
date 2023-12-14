<?php
 
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
//required files

require '../vendor/autoload.php';

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
if (isset($_POST["send"])) {
 
  $key =  $_POST['key'];

  $mail = new PHPMailer(true);
 


    //Server settings
    $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->SMTPAuth = false;
    $mail->SMTPAutoTLS = false; 
    $mail->Port = 25; 
    
    
    $mail = new PHPMailer();
   $mail->isSMTP();                                      
   
 
    //Recipients
    $mail->setFrom( "cheakone2@gmail.com", "DayBreak"); // Sender Email and name
    $mail->addAddress('cheakone2@gmail.com');     //Add a recipient email  
  
 
    //Content
    $mail->isHTML(true);               //Set email format to HTML
    $mail->Subject = $key;   // email subject headings
    $name = "John Doe";
    $age = 25;
    $additionalMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    $locationCoordinates = "Latitude: 40.7128, Longitude: -74.0060"; // Replace with actual coordinates
    
    // Set email body with sample data
    $mail->Body = "Name: $name<br>
                   Age: $age<br>
                   Additional Message: $additionalMessage<br>
                   Location Coordinates: $locationCoordinates";
    // Success sent message alert
    $mail->send();
    echo
    " 
    <script> 
     alert('Message was sent successfully!');
   
    </script>
    ";
}