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

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Contact form</title>
</head>

<body>
    <header>
        <h1>
            Contact Form
        </h1>
    </header>


<div class="cform">
<form action="#" method="post" >

<div class="elements">
<div>
<input type="text" name="Name" id="name" class="felement" placeholder="Name" >
</div>
<div>

<input type="email" name="Email"id="email" class="felement" placeholder="Email"> 
</div>
<div>

<input type="textarea" name="Description" id="description" class="felement" placeholder="Description">
</div>

<div>
<input type="submit" value="Submit" id="submit-button"></div>
</div>
</form>

</div>
<p>
    NOTE: This form is only for testing. 
</p>
</body>

</html>