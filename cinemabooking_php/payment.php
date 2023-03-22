<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/styles.css">
	<title>E-Cinema</title>
    <link rel="icon" type="image/png" href="img/logo.png">
    <style type="text/css">
		dd { margin-left: 750px; }
	</style>
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
		<button class="button1"><a href="#">Login</a></button>
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
	<hr>
	</header>
	
<div> 
<br>
	
<fieldset>
    <dl>  
		<dt>ORDER_ID:</dt>
        <dd>
            <input id="client_no" type="text" name="client_no" value="" size="30"/>
        </dd>
                            
        <dt>Collection Amount</dt>             
        <dd>
            <input id="collection_amount" type="text" name="collection_amount" size="30"/>             
        </dd>
        <br>                       
        <div>
            <h2><input type=radio name=formOfPayment id=formOfPayment value=CreditCard />Pay by Credit Card</h2>             
        </div>      
        <br>
        <dt>Card Number</dt>
        <dd>
            <input type="text" id="cc_no" name="cc_no" value="4111111111111111"/>
        </dd>            
        <dt>Expiry Date</dt>
        <dd>
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <td><select id="cc_exp_mm" name="cc_exp_mm">
                            <option value="">Month</option>
                            <option value="1" selected="selected">January</option>                                 
                            <option value="2">February</option>                              
                            <option value="3">March</option>                           
                            <option value="4">April</option>                           
                            <option value="5">May</option>                            
                            <option value="6">June</option>                            
                            <option value="7">July</option>                           
                            <option value="8">August</option>                             
                            <option value="9">September</option>                     
                            <option value="10">October</option>                              
                            <option value="11">November</option>                             
                            <option value="12">December</option>                             
                        </select></td>                         
                    <td width="20">&nbsp;</td>                         
                    <td><select id="cc_exp_yyyy" name="cc_exp_yyyy">
							<option value="">Month</option>
                            <option value="2016" selected="selected">201</option>                                 
                            <option value="2017">2017</option>                              
                            <option value="2018">2018</option>                           
                            <option value="2019">2019</option>                           
                            <option value="2020">2020</option>                            
                            <option value="2021">2021</option>                            
                            <option value="2022">2022</option>                           
                            <option value="2023">2023</option>                             
                            <option value="2024">2024</option>                     
                            <option value="2025">2025</option>                              
                            <option value="2026">2026</option>                             
                            <option value="2027">2027</option>
							<option value="2028">2028</option>                             
                            <option value="2029">2029</option>
							<option value="2030">2030</option>
                        </select>                         
                    </td>                     
                </tr>                 
            </table>             
        </dd>
        <dt>Security Code</dt>
        <dd>
            <input id="cvv" type="text" size="5" name="cvv" value="111"/>
        </dd>
        </dl>              
        <dd class="button1 button2"><a href="index.php">Pay</a></button> <br>   
                
        </dd>   
        <br>      
    </dl>  
    <br>   
</fieldset>
</form> 
</div>

<br>
		
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
		<p>© Kavin Parikh</p>
		<a>Advertising</a>
		<a>Privacy Policy</a>
		<a href="contact-us.php">Contact</a>
	</div>
</footer>
 
</body>

</html>