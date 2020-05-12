<?php



if(isset($_POST['Email'])){


$name = $_POST['Name'];
$email = $_POST['Email'];
$des = $_POST['Description'];

//values
$subject = 'Contact form';
$body = '
<h2>Name :</h2><p>'.$name.'</p>
<h2>Email :</h2><p>'.$email.'</p>
<h2>Description :</h2><p>'.$des.'</p>
';

// headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .="Content-Type:text/html;charset=UTF-8" . "\r\n"; 
$headers .= "From: " .$name."<".$email.">"."\r\n"; 

if(mail($email,$subject,$body,$headers)){
//Sent
print("Email Sent");
}
else{
    print("Email not sent.");
}

}
?>