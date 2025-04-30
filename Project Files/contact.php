<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input fields
    $name = filter_var(trim($_POST["Name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["Email"]), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST["Message"]), FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address. Please go back and try again.";
        exit;
    }

    // Check if any field is empty
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required. Please go back and complete the form.";
        exit;
    }

    // Set up email details
    $to = "info@gskretting-personal.io";
    $subject = "Contact Form Submission from $name";
    $body = "You have received a new message from your portfolio website contact form.\n\n" .
            "Name: $name\n" .
            "Email: $email\n\n" .
            "Message:\n$message\n";

    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you, $name. Your message has been sent successfully!";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request. Please submit the form.";
}
?>
