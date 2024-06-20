<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../CSS/home.view.css">
        
        <title>To Do!</title>
    </head>
    <body>
        
        <?php require "Partial/nav.view.php";?>

        <br><br><br><br><br><br><br><br><br><br>
        <h3 style="text-align: center;">Weekly Analysis</h3>
        <br>

        <div class="weekly">
            <div class="box" id="completed">
                <p>Completed</p>
                <p>9</p>
            </div>
            <div class="box" id="inProgress">
                <p>In Progress</p>
                <p>4</p>
            </div>
            <div class="box" id="Overdue">
                <p>Overdue</p>
                <p>0</p>
            </div>
        </div>
        <br><br><br><br>
        
        <div class="container">
            <div class="toDoApp">
                <h3>To Do List</h3>
                <div class="row">
                    <input type="text" id="inputBox" placeholder="Add New Task">
                    <button onclick="addTask()">Add</button>
                </div>
            </div>
            <ul id="listContainer"></ul>
        </div>

    
        <script src='../JS/home.view.js'></script>
    </body>
</html>
