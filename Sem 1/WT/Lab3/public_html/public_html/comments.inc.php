<?php
function setComments($conn){
    if (isset($_POST['commentSubmit'])) {
    $pid = $_POST['pid'];
    $uid = $_POST['uid'];    
    $date = $_POST['date'];   
    $message = $_POST['message'];
    
    $sql = "INSERT INTO comments (uid, date, message, pid) VALUES ('$uid', '$date', '$message','$pid')";
    $result = $conn->query($sql);
    }
   
    
}
function getComments($conn){
    $sql = "SELECT * FROM comments";
    $result =  $conn->query($sql);
    while ($row = $result->fetch_assoc()) {
        echo "<div class='comment-box container-fluid'><p?>";
            echo $row['uid']."<br>";
            echo $row['date']."<br>";
            echo nl2br($row['message']);
        echo "</p></div>";
    }
}