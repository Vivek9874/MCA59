<?php
session_start();
require('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password']; // Note: Do not hash the password here.

    // Hash the password using password_hash before storing it in the database.
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $query = "INSERT INTO users (username, password) VALUES (?, ?)";

    $stmt = $conn->prepare($query);

    if ($stmt) {
        $stmt->bind_param("ss", $username, $hashedPassword); // Bind the hashed password.
        if ($stmt->execute()) {
            header('Location: index.html');
            exit();
        } else {
            echo "Registration failed. Please try again.";
        }

        $stmt->close();
    } else {
        echo "Query preparation error: " . $conn->error;
    }
}
?>
