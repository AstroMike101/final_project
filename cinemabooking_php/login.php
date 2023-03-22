<?php
include('connection.php');

if(isset($_POST['login'])) {
  $username = mysqli_real_escape_string($con, $_POST['username']);
  $password = mysqli_real_escape_string($con, $_POST['password']);

  if(empty($username)) {
    array_push($errors, "Email is required");
  }
  if(empty($password)) {
    array_push($errors, "Password is required");
  }

  if(count($errors) == 0) {
    $password = md5($password);
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $results = mysqli_query($con, $query);

    if(mysqli_num_rows($results)){
        $_SESSION['username'] = $username;
        $_SESSION['success'] = "Logged in Successfully";
        ob_clean(); // add this line to clear output buffer
        header("location: index.php");
      } else {
        array_push($errors, "Wrong username or password");
      }
  }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title> Login form</title>
    <link rel="stylesheet" href="style/styles.css">
</head>
<body>
    <div class ="container">
        <div class ="header">
            <h2>Login</h2>
        </div>
        <form action="login.php" method="POST">
            <div>
                <label for="username">Email</label>
                <input type="text" name="username" required>
            </div>
            
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" required>
            </div>

            <button type="submit" name="login">Submit</button>

            <p>New user? <a href="register.php"><b>Register</b></a></p>
        </form>
    </div>
</body>
</html>
