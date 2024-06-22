<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pomodoro Timer</title>
  <link rel="stylesheet" href="../CSS/pomodoro.view.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

  <?php require "Partial/nav.view.php";?>
  
  <div class="allin">
    <div class="timer-container">
      <div class="timer">00:00</div>
      <div class="controls">
        <button id="increase">&#9650;</button>
        <button id="decrease">&#9660;</button>
      </div>
    </div>

    <div class="controls2">
      <button id="start" style="color: #D9AAA0 ;">&#9658;</button>
      <button id="stop" style="display: none; color: #D9AAA0 ;" >
        <i class="fa fa-pause"></i>
      </button>
      <button id="clear"><i class="fa fa-undo"></i></button>
    </div>
  </div>
  <div style="width:0px;position:relative;"><video autoplay="" src="https://user-uploads.perchance.org/file/da1bf91d3531f0c92e59e6db38e44176.webm" style="max-width: 7rem;position:absolute;top: -1.6rem;left: -1.8rem;z-index: -1;" muted="" loop=""></video></div>
  <script src="../JS/pomodoro.view.js"></script>
</body>
</html>
