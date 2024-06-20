<link rel="stylesheet" href="../../CSS/Partial/nav.view.css">
<header>
    <h2 class="logo">toroo</h2>
    <nav class="navigation">
        <a href="home.php" <?php if($_SERVER['REQUEST_URI'] === '/home.php' ){echo 'style="background-color: #D9AAA0; padding: 10px; border-radius:5px"';}?> >Home</a>
        <a href="calendar.php" <?php if($_SERVER['REQUEST_URI'] === '/calendar.php' ){echo 'style="background-color: #D9AAA0; padding: 10px; border-radius:5px"';}?>>Calendar</a>
        <a href="pomodoro.php" <?php if($_SERVER['REQUEST_URI'] === '/pomodoro.php' ){echo 'style="background-color: #D9AAA0; padding: 10px; border-radius:5px"';}?>>Pomodoro Timer</a>
        <a href="analysis.html" <?php if($_SERVER['REQUEST_URI'] === '/analysis.php' ){echo 'style="background-color: #D9AAA0; padding: 10px; border-radius:5px"';}?>>Weekly Analysis</a>
        <a href="wfc.php"<?php if($_SERVER['REQUEST_URI'] === '/wfc.php' ){echo 'style="background-color: #D9AAA0; padding: 10px; border-radius:5px"';}?>>WFC Recommendations</a>
        <?php
            $s =  "<button class=\"btnLogin-popup\">Link Account</button>";
            echo (False) ? $s : '';
        ?>
        
    </nav>
</header> 