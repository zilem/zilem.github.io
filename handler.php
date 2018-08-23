<?php
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'story@zilem.studio';

  $email_subject = "New Form Submission";

  $email_body = "User FirstName: $firstname.\n".
                  "User LastName: $lastname.\n".
                    "User Email: $visitor_email.\n".
                      "User Message: $message.\n";

  $to = "story@zilem.studio";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: engage.html");

$ ?>
