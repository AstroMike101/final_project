<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/styles.css">
	<title>E-Cinema</title>
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
    <button class="button1"><a href="login.php">Login</a></button>
    <button class="button3"><a href="bookingseat.php">Create Booking</button>   
</div>
<br>

<div class="topnav">
	<a href="index.php">HOME</a>
	<a href="schedule.php">EVENT</a>
	<a class="active" href="offers.php">OFFERS</a>
	<a href="contact-us.php">CONTACT US</a>
	<a href="aboutus.php">ABOUT US</a>
</div>

<hr><br>
<div class="coupon">
  <div class="container">
    <h3>Humpty Dumpty</h3>
  </div>
  <img src="img/movie-poster-7.jpg" alt="Avatar" style="width:100%;">
  <div class="container" style="background-color:white">
    <h2><b>20% OFF YOUR ONLINE BOOKINGS</b></h2>
  </div>
  <div class="container">
    <p>Use Promo Code: <span class="promo">BOH232</span></p>
    <p class="expire">Expires: April 20, 2023</p>
  </div>
</div>

<footer>
<div class="footer-section footer-section1">
<div class="footer-brand">
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