<?php
session_start();

$username = "";
$name = "";
$password_1 = "";
$password_2 = "";

$errors= array();

$host = "localhost:3306"; /* Host name */
$user = "root"; /* User */
$password = ""; /* Password */
$dbname = "cinema_db"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

$username = isset($_POST['username']) ? mysqli_real_escape_string($con, $_POST['username']) : "";
$name = isset($_POST['name']) ? mysqli_real_escape_string($con, $_POST['name']) : "";
$password_1 = isset($_POST['password_1']) ? mysqli_real_escape_string($con, $_POST['password_1']) : "";
$password_2 = isset($_POST['password_2']) ? mysqli_real_escape_string($con, $_POST['password_2']) : "";


if(empty($username)){array_push($errors, "Email is required");}
if(empty($name)){array_push($errors, "Name is required");}
if(empty($password_1)){array_push($errors, "password is required");}
if($password_1 != $password_2){array_push($errors, "passwords dont match");}

//check the db for users

$users_check_query = "SELECT * FROM users WHERE username ='$username' or name = '$name' LIMIT 1";

$results = mysqli_query($con, $users_check_query);
if(!$results){
  die("Query failed: " . mysqli_error($con));
}

$users = mysqli_fetch_assoc($results);

if($users){
  if($users['username']== $username){array_push($errors, "email already exists");}
}
if($users){
  if($users['name']== $name){array_push($errors, "user already exists");}
}

if(count($errors)==0){
  $password = md5($password_1); // encrypt password
  $query = "INSERT INTO users (username, name, password) VALUES ('$username','$name', '$password')";
  mysqli_query($con, $query);
  $_SESSION['username'] = $username;
  $_SESSION['success'] = "You are logged in";
 
  header("location: index.php");
}


//login user

if(isset ($_POST['login_user']))
{
  $username = mysqli_real_escape_string($con, $_POST['username']);
  $password = mysqli_real_escape_string($con, $_POST['password_1']);

  if(empty($username)){
    array_push($errors,"Username is required");
  }
  if(empty($password)){
    array_push($errors,"password is required");
  }
  if(count($errors)==0){
    $password =md5($password);
    $query ="SELECT *FROM users WHERE username ='$username'AND password = '$password'";
    $results =mysqli_query($con, $query);

    if(mysqli_num_rows($results)){
      $_SESSION ['username'] = $username;
      $_SESSION ['success'] = "Logged in Successfully";
      header("location : index.php");
    }
    else{
      array_push($errors, "Wrong username or password");
    }
  }
}
?>  