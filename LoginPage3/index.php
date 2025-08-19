<?php require("register class.php")?>
<?php
    if(isset($_POST["submit"])) {
        $user = new RegisterUser($_POST["username"], $_POST["password"]);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Register Form</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data" autocomplete="off">
        <h2>Register Form</h2>
        <h4>Both feilds are <span>required</span></h4>

        <label>Usrname</label>
        <input type="text" name="username">

        <label>Usrname</label>
        <input type="text" name="password">

        <button type="submit" name="submit">Register</button>

        <p class="error"><?php echo @$user->error ?></p>
        <p class="success"><?php echo @$user->success ?></p>
    </form>
</body>
</html>