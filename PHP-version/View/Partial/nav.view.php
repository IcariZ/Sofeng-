<link rel="stylesheet" href="../../CSS/Partial/nav.view.css">
<header>
    <h2 class="logo">toroo</h2>
    <nav class="navigation">
        <a href="Home" id="home" <?php if($_SERVER['REQUEST_URI'] === '/home' ){echo 'class="currentPage"';}?> >Home</a>
        <a href="Calendar" id="calendar" <?php if($_SERVER['REQUEST_URI'] === '/calendar' ){echo 'class="currentPage"';}?>>Calendar</a>
        <a href="Pomodoro" id="pomodoro" <?php if($_SERVER['REQUEST_URI'] === '/pomodoro' ){echo 'class="currentPage"';}?>>Pomodoro Timer</a>
        <a href="Analysis" id="weeklyAnalysis" <?php if($_SERVER['REQUEST_URI'] === '/analysis' ){echo 'class="currentPage"';}?>>Weekly Analysis</a>
        <a href="WFC" id="recommendations" <?php if($_SERVER['REQUEST_URI'] === '/wfc' ){echo 'class="currentPage"';}?>>WFC Recommendations</a>
        <?php
            $askLoginReg =  "<button class=\"btnLogin-popup\">Get Started!</button>";
            $out = "<button class=\"btnLogin-popup\" onclick=\"login()\">Log Out</button>";
            echo (TRUE) ? $askLoginReg : $out;
        ?>
    </nav>
</header> 