<?php
    $firstname = $_POST['firstName'];
    $lastname = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "uditroshanojha@gmail.com";
    $subject = "New Form Submission";

    $headers = "From : ".$email. "\r\n" .
    "CC: uditroshanojha@gmail.com";

    $txt = "You have recieved a message from ".$firstname ."\r\nEmail: " .$email ."\r\nMessage: ". $message;

    if($email!=NULL) {
        mail($to, $subject, $txt, $headers);
    }
?>