<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Registration | T O R O O</title>
    <link rel="stylesheet" href="../CSS/index.view.css">
</head>
<body>
    
    <?php require "Partial/nav.view.php";?>

    <div>
        <div class="wrapper active">
            <span class="icon-close"><ion-icon name="close-outline"></ion-icon></span>
            <!-- login section -->
            <div class="form-box login">
                <h3>Welcome Back!</h3>
                <form onsubmit="loginFunc()">
                    <div class="input-box">
                        <input type="email" name="email" id="email" placeholder="Email" required> <br>
                    </div>
                    <div class="input-box">
                        <span class="icon" id="eyeicon"><ion-icon name="eye-off-outline" id="eyeIconElement"></ion-icon></span>
                        <input type="password" id="password" placeholder="Password" name="log_pwd" required
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">
                        <br>
                    </div>

                    <center>    
                        <p id="result"></p> <br>
                    </center>

                    <button type="submit" class="btn">Login</button>
                    <div class="remember-forgot">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div class="login-register">
                        <p>Don't have an account? <a href="#" class="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
            <!-- registration section -->
            <div class="form-box register">
                <h3>Hello there!</h3>
                <form onsubmit="signup()">
                    <div class="input-box">
                        <!-- <span class="icon"><ion-icon name="mail"></ion-icon></span> -->
                        <!-- <input type="email" required>       ga nyangkut gitu deh gatau -->
                        <!-- <label>Email</label> -->
                        <input type="email" id="new_email" placeholder="Email" required> 
                    </div>
                    <div class="input-box">
                        <span class="icon" id="eyeicon"><ion-icon name="eye-off-outline" id="reg_eyeIconElement"></ion-icon></span>
                        <input type="password" id="reg_password" placeholder="Password" name="reg_pwd" required
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">
                        
                    </div>
                    <div class="input-box">
                        <span class="icon" id="eyeicon"><ion-icon name="eye-off-outline" id="confirm_eyeIconElement"></ion-icon></span>
                        <input type="password" id="conf_password" placeholder="Confirm Password" name="conf_pwd" required
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">
                    </div>
                    
                    <button type="submit" class="btn">Register</button>
                    <div class="login-link">
                        <p id="post_register" style="margin: 0; display: inline;">Already have an account?</p>
                        <p style="margin: 0; display: inline;" align="right"><a href="#" class="register-link">Login</a></p>
                    </div>
                </form>
            </div>
            
            
                
        </div>
    </div>
    
    <script src="../JS/index.view.js"></script>
    <!-- Ionicons scripts -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script>
        // eye icon for password
        let eyeIcon = document.getElementById("eyeIconElement");
        let password = document.getElementById("password");
    
        eyeIcon.onclick = function() {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.setAttribute("name", "eye-outline");
            } else {
                password.type = "password";
                eyeIcon.setAttribute("name", "eye-off-outline");
            }
        }

        let reg_eyeIcone = document.getElementById("reg_eyeIconElement");
        let reg_password= document.getElementById("reg_password");
    
        reg_eyeIcone.onclick = function() {
            if (reg_password.type === "password") {
                reg_password.type = "text";
                reg_eyeIcone.setAttribute("name", "eye-outline");
            } else {
                reg_password.type = "password";
                reg_eyeIcone.setAttribute("name", "eye-off-outline");
            }
        }

        let con_eyeIcone = document.getElementById("confirm_eyeIconElement");
        let conf_password = document.getElementById("conf_password");
    
        confirm_eyeIconElement.onclick = function() {
            if (conf_password.type === "password") {
                conf_password.type = "text";
                confirm_eyeIconElement.setAttribute("name", "eye-outline");
            } else {
                conf_password.type = "password";
                confirm_eyeIconElement.setAttribute("name", "eye-off-outline");
            }
        }
    </script>
</body>
</html>