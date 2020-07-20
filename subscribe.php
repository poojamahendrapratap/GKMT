<?php
		$email=$_POST['email'];

		$conn = mysqli_connect("localhost","root","","db");
		$result = mysqli_query($conn,"insert into subscribers values('" . $email."');");

		if($result >0)
		  echo 'Thank you for subscribing,You will get a conformation mail soon!';
		else
			echo 'Sorry,Your request wasnt registered!';
?>
