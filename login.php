<?php
include_once 'header.html';
?>
<section class="signup-form">
  <h2>Log In</h2>
  <form action="signup.inc.php" method="post">
    <input type="text" name="email" placeholder="Email...">
    <input type="text" name="uid" placeholder="Username...">
    <input type="password" name="pwd" placeholder="Password...">
    <input type="password" name="pwd repeat" placeholder="Repeat password...">
    <button type="submit" name="submit">Sign Up</button>  
  </form>
</section>
