<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calendar</title>
        <link rel="stylesheet" href="../CSS/calendar.view.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Symbols+Rounded:100,200,300,regular,500,600,700">
        <script src="../JS/calendar.view.js" defer></script>
    </head>
<body>

    <?php require "Partial/nav.view.php";?>
    
        <div class="wrapper">
            <section>
                <p class="current-date"></p>
                <div class="icons">
                    <span id="prev" class="material-symbols-rounded">chevron_left</span>
                    <span id="next" class="material-symbols-rounded">chevron_right</span>
                </div>
            </section>
            <div class="calendar">
                <ul class="weeks">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul class="days">
                    <li class="inactive">29</li>
                    <li class="inactive">28</li>
                    <li class="inactive">30</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li class="active">28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                    <li class="inactive">1</li>
                </ul>
            </div>
        </div>
    </body>
</html>