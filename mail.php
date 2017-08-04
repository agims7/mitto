<?php 
    $email = $_POST['email'];
    $message = $_POST['message'];
    $tel = $_POST['tel'];
    $formcontent="Adres email: $email \n\nTelefon: $tel \n\nTresc wiadomosci: $message";
    $recipient = "kontakt@mittoplus.pl";
    $subject = "Formularz kontaktowy ze strony Mitto+";
    $mailheader = "Od: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "<script type='text/javascript'>alert('Formularz zostal wysłany!')</script>";
    print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";
?>