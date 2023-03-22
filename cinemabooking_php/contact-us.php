<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/styles.css">
	<title>Contact Us</title>
    <link rel="icon" type="image/png" href="img/logo.png">
	<script src="scripts/script.js "></script>
</head>

<body>
<div class="navbar-brand">
    <form class="example" action="/action_page.php" style="margin:auto;max-width:300px">
  <input type="text" placeholder="Search.." name="search2">
  <button type="reset" style="background-color:transparent; border-color:transparent;"> 
  <img src="img/search.png" height="35"/>
</button>
</form>
    <button class="button1"><a href="index.php">Login</a></button>
    <button class="button3"><a href="bookingseat.php">Create Booking</button>
    
</div>
<br>
<div class="topnav">
  <a  href="index.php">HOME</a>
  <a href="schedule.php">EVENT</a>
<a href="offers.php">OFFERS</a>
<a class="active"href="contact-us.php">CONTACT US</a>
<a href="aboutus.php">ABOUT US</a>
</div>
<hr>

    <div class="contact-us-container">
        <div class="contact-us-section contact-us-section1">
            <h1>Contact</h1>
            <p>Feel Free to Contact Us </p>
            <form action="#" method="POST">
                <input placeholder="First Name" name="fName" required><br>
                <input placeholder="Last Name" name="lName"><br>
                <input placeholder="E-mail Address" name="eMail" required><br>
                <textarea placeholder="Enter your message !" name="feedback" rows="10" cols="30" required></textarea><br>
                <button type="submit" name="submit" value="submit">Send your Message</button>
            </form>

        </div>
        <div class="contact-us-section contact-us-section2">
            <h1>Address & Info</h1>
            <h3>Phone Numbers</h3>
            <p><a href="tel:01011391148">+94 113 39 11 48</a><br>
                <a href="tel:01011391148">+94 112 11 39 11</a></p>
            <h3>Address</h3>
            <p>E-cinema</p>
            <h3>E-mail</h3>
            <p><a href="mailto:google.com">kpk1611@gmail.com</a></p>
        </div>
    </div>
    <div style="width: 175%; height: 850px; margin: 15%;">
        <div class="gmap_canvas"><iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf67SiDq35zsRbuNzMn3fYMk&key=AIzaSyBCZ9tRdzgMxXogIDqMm2XNyRDnyjqFi5w">"</iframe> width="1100" height="950" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
    </div>
	
	
    <footer>
	<div class="footer-section footer-section1">
<div class="footer-brand">
<a href="#"><img id="logo" src="img/logo.png"></a>
    <a href="index.php">
        <h1 class="footer-heading">E-CINEMA</h1>
    </a> 
</div>    
</div>
<div class="footer-section footer-section2">
    <h2> Social Media</h2>
    <div class="footer-section-inner-container">
        <a href="https://www.facebook.com"><img src="img/fb.png" style ="width: 15px; height: 15px;"><span></i> Facebook</span></a>
        <a href="https://twitter.com"><img src="img/twitter.jpg" style ="width: 15px; height: 15px;"><span></i> Twitter</span></a>
        <a href="https://www.instagram.com"><img src="img/insta.png" style ="width: 15px; height: 15px;"><span></i> Instagram</span></a>
    </div>
</div>
<div class="footer-section  footer-section3">
    <p>© Kavin Parikh </p>
    <a>Advertising</a>
    <a>Privacy Policy</a>
    <a href="contact-us.php">Contact</a>
</div>

	</footer>
    
    
</body>

</html>