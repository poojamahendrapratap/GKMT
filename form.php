<?php

    $file=$_FILES['file']['name'];
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $allowed = ['pdf', 'txt', 'doc', 'docx', 'zip'];

    if (in_array($ext, $allowed))
    {     
        $name=$_POST['name'];
        $contactno=$_POST['contactno'];
        $emailid=$_POST['emailid'];
        $budget=$_POST['budget'];
        $message=$_POST['message'];

        $conn = mysqli_connect("localhost","root","","db");
        $result = mysqli_query($conn,"insert into quote values('" . $name. "',". $contactno.",'". $emailid."','". $budget. "','". $message."','".$file."');");

        if ( 0 < $_FILES['file']['error'] ) {
            echo 'Error: ' . $_FILES['file']['error'] . '<br>';
        }
        else {
            move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);
            echo 'Thank you for reaching out!! We will contact you soon!';  
        }
    }
    else
    {
        echo 'Sorry the file formatted isn\'t supported !!'; 
    }

?>