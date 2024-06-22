<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/analysis.view.css">
    <title>Weekly Analysis</title>
</head>
<body>
    <?php require "Partial/nav.view.php"?>
    <main>
        <h1 style="text-align: center;">You did well this week! Keep it up 𐙚˙⋆.˚ ᡣ𐭩</h1>
        <p></p> 
        <div class="analysis-container">
            <div class="summary">
                <h2>Summary</h2>
                <p>Total tasks completed: <span id="total-tasks">0</span></p>
                <p>Most productive day: <span id="productive-day">N/A</span></p>
                <p>Average tasks per day: <span id="average-tasks">0</span></p>
            </div>
            <div class="chart">
                <h2>Tasks Completed Per Day</h2>
                <canvas id="tasksChart"></canvas>
            </div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="../JS/analysis.view.js"></script>
</body>
</html>