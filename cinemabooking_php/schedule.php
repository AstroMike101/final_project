<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/styles.css">
	<script src="scripts/script.js "></script>
    <title>Movies Schedule</title>
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
	<a class="active"href="schedule.php">EVENT</a>
	<a href="offers.php">OFFERS</a>
	<a href="contact-us.php">CONTACT US</a>
	<a href="aboutus.php">ABOUT US</a>
</div>
<br>

<div class="schedule-section">
    <h1>Schedule</h1>
    <div class="schedule-dates">
		<div class="schedule-item">Tommorow</div>
        <div class="schedule-item schedule-item-selected">Today</div>
        <div class="schedule-item">Weekend</div>
        <div class="schedule-item">Next Month</div>
        <div class="schedule-item">December 14,2021</div>
    </div>
    <div class="schedule-table">
            <table>
                <tr>
                    <th>SHOW</th>
                    <th>SCHEDULE IN CINEMA</th>
                </tr>
                <tr>
                    <td>
                        <h2>Captain Marvel</h2>
                        <h3>SYNOPSIS</h3>
                        <p>Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization
                        </p>
                        <div class="schedule-item"> DETAILS</a>
                        </div>
                    </td>
                    <td>
                        <div class="hall-type">
                            <h3>Private Hall</h3>
                            <div>
                                <div class="schedule-item"></div>
                                <div class="schedule-item">09:00 AM</div>
                                <div class="schedule-item">1:00 PM</div>
                                <div class="schedule-item">06:00 PM</div>
                            </div>
                        </div>
                        <div class="hall-type">
                            <h3>VIP Hall</h3>
                            <div>
                                <div class="schedule-item"></div>
                                <div class="schedule-item">09:00 AM</div>
                                <div class="schedule-item">1:00 PM</div>
                                <div class="schedule-item">6:00 PM</div>
                            </div>
                        </div>
                        <div class="hall-type">
                            <h3>Main Hall</h3>
                            <div>
                                <div class="schedule-item"></div>
                                <div class="schedule-item">09:00 AM</div>
                                <div class="schedule-item">1:00 AM</div>
                                <div class="schedule-item">06:00 PM</div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>End Game</h2>
                        <h3>SYNOPSIS</h3>
                        <p>
						After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.
                        </p>
                        <div class="schedule-item"> DETAILS</a>
                        </div>
                    </td>
                    <td>
                        <div class="hall-type">
                            <h3>Private Hall</h3>
                            <div>
                                <div class="schedule-item"></div>
                                <div class="schedule-item">09:00 AM</div>
                                <div class="schedule-item">11:30 AM</div>
                                <div class="schedule-item">06:00 PM</div>
                            </div>
                        </div>
                        <div class="hall-type">
                            <h3>VIP Hall</h3>
                            <div>
                                <div class="schedule-item"></div>
                                <div class="schedule-item">09:00 AM</div>
                                <div class="schedule-item">11:30 AM</div>
                                <div class="schedule-item">06:00 PM</div>
                            </div>
                        </div>
                        <div class="hall-type">
                            <h3>Main Hall</h3>
                            <div>
                                <div class="schedule-item"></div>
                                <div class="schedule-item">09:00 AM</div>
                                <div class="schedule-item">11:30 AM</div>
                                <div class="schedule-item">06:00 PM</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
</div>
	
	
<footer>
<div class="footer-section footer-section1">
	<div class="footer-brand">
		<a href="#"><img id="logo" src="img/logo.png"></a>
		<a href="index.php">
			<h1 class="footer-heading">CINEMATIC CINEMA</h1>
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
    <p>© Kavin Parikh</p>
    <a>Advertising</a>
    <a>Privacy Policy</a>
    <a href="contact-us.php">Contact</a>
</div>
</footer>
    
</body>

</html>