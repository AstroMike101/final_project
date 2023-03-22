<?php include('connection.php')?>

<!DOCTYPE html>
<html>
<head>
    <title> Registration form</title>
    <link rel="stylesheet" href="style/styles.css">
</head>
<body>
    
    <div class ="container">
        <div class ="header">
            <h2>Register</h2>
        </div>
        <form action = "register.php" method ="POST">
            <?php include('errors.php') ?>
            <div>
                <label for ="username">Email*</label>
                <input type="text" name="username" required>
            </div>
            
            <div>
                <label for ="name">*</label>
                <input type="text" name="name" required>
            </div>
            
            <div>
                <label for ="password">password*</label>
                <input type = "password" name = "password_1" required>
            </div>

            <div>
                <label for ="password">Confirm Password*</label>
                <input type = "password" name = "password_2" required>
            </div>
            
            <button type ="Submit" name="register user"> Submit </button>

            <p> Already a user? <a href="login.php"><b> Log in </b></a></p>
        </form>
    </div>
    
</body>
</html>