<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/styles.css">
<title>E-Cinema</title>
	<script src="scripts/script.js "></script>
</head>

<body>
    <?php
    include "connection.php";
    $sql = "SELECT * FROM movieTable";
    ?>
    <header>
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
			<a class="active" href="index.php">HOME</a>
			<a href="schedule.php">EVENT</a>
			<a href="offers.php">OFFERS</a>
			<a href="contact-us.php">CONTACT US</a>
			<a href="aboutus.php">ABOUT US</a>
		</div>
		<hr>
	</header>
    <div class="navbar-container">
    <nav class="navbar">
        <ul class="navbar-menu">
            <li><a href="action.php">Action</a></li>
            <li><a class="active" href="horror.php">Horror</a></li>
            <li><a href="comedy.php">Comedy</a></li>  
            <li><a href="comedy.php">Animation</a></li>           
        </ul>
    </nav>
</div>
    <div id="home-section-1" class="trailers-section">
        <br>
        <h1 class="section-title">Now showing | Horror</h1>
        <h3>Click on it For Youtube Trailer</h3>
        <div class="trailers-grid">
        <div class="trailers-grid-item">
                <img src="img/horror-1.jpg" alt="">
				<div class="trailer-item-info">
                    <h3>The Lego Movie</h3>
                </div>
            </div>
            <div class="trailers-grid-item">
                <img src="img/horror-2.jpg" alt="">
				<div class="trailer-item-info">
                    <h3>Karmat Bytmrmt</h3>
                </div>
            </div>
            <div class="trailers-grid-item">
                <img src="img/horror-3.jpg" alt="">
				<div class="trailer-item-info">
                    <h3>Secret Men Club</h3>
                </div>
            </div>
            <div class="trailers-grid-item">
                <img src="img/horror-4.jpg" alt="">
				<div class="trailer-item-info">
                    <h3>VICE</h3>
                </div>
            </div>
            <div class="trailers-grid-item">
                <img src="img/horror-5.jpg" alt="">
				<div class="trailer-item-info">
                    <h3>The Vanishing</h3>
                </div>
            </div>
            <div class="trailers-grid-item">
                <img src="img/horror-6.jpg" alt="">
				<div class="trailer-item-info">
                    <h3>The Vanishing</h3>
                </div>
            </div>
        </div>
    <div id="home-section-1" class="movie-show-container">
        <h1>Currently Showing</h1>
        <h3>Book a movie now</h3>

        <div class="movies-container">

            <?php
            if ($result = mysqli_query($con, $sql)) {
                if (mysqli_num_rows($result) > 0) {
                    for ($i = 0; $i <= 5; $i++) {
                        $row = mysqli_fetch_array($result);
                        echo '<div class="movie-box">';
                        echo '<img src="' . $row['movieImg'] . '" alt=" ">';
                        echo '<div class="movie-info ">';
                        echo '<h3>' . $row['movieTitle'] . '</h3>';
                        echo '<a href="booking.php?id=' . $row['movieID'] . '"> Book a seat</a>';
                        echo '</div>';
                        echo '</div>';
                    }
                    mysqli_free_result($result);
                } else {
                    echo '<h4 class="no-annot">No Booking to our movies right now</h4>';
                }
            } else {
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
            }

            // Close connection
            mysqli_close($con);
            ?>
        </div>
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
			<h2><i class="fas fa-user-alt"></i> Social Media</h2>
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

</html>