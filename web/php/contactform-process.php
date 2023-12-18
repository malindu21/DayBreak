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
  $nameList =  $_POST['nameList'];

  $mail = new PHPMailer(true);

    //Server settings
    $mail->isSMTP();
    $mail->Host = 'relay-hosting.secureserver.net';
    $mail->Username = 'info@daybreak-adventures.com.au'; // it may be your domain mail too, for ex mail@yourdomain.com
    $mail->Password = 'm-peMszZe7';
    $mail->Port = 25;
    $mail->CharSet = 'utf-8';

    $mail = new PHPMailer();
   $mail->isSMTP();                                      
   
 
    //Recipients
    $mail->setFrom( "info@daybreak-adventures.com.au", "DayBreak"); // Sender Email and name
    $mail->addAddress('info@daybreak-adventures.com.au');     //Add a recipient email  
  
 
    //Content
    $mail->isHTML(true);               //Set email format to HTML
    $mail->Subject = $key;   // email subject headings
    $name = "John Doe";
    $age = 25;
    $additionalMessage = "Name List: $nameList";
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
     alert('Message was sent successfully! php');
   
    </script>
    ";
}