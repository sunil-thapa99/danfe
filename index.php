<?php 
    $timeHand = array('hour', 'minute', 'second');
    $state = array('Sydney', 'Berlin', 'New York', 'Kathmandu');
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>A Digital Analog Clock</title>
    <link rel="stylesheet" href="clock/style.css" type="text/css" media="all">
    <script src="clock/script.js" defer></script>
</head>

<body>
<main class="main">
    <div class="berlin">
        <div class="clockbox">
            <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
                <g id="face">
                    <circle class="circle" cx="300" cy="300" r="253.9"/>
                    <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                    <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
                </g>
                <?php 
                    for ($i=0; $i < sizeof($timeHand); $i++) { 
                        echo '<g id="'.$timeHand[$i].'">
                                <path class="'.$timeHand[$i].'-arm" d="M300.5 298V142"/>
                                <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
                            </g>';
                    }
                ?>
            </svg>
        </div>
        <div class="digital">
            <h4 id="time"></h4>
        </div>    
    </div>
    <div class="sydney">
        <div class="clockbox">
            <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
                <g id="face">
                    <circle class="circle" cx="300" cy="300" r="253.9"/>
                    <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                    <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
                </g>
                <?php 
                    for ($i=0; $i < sizeof($timeHand); $i++) { 
                        echo '<g id="'.$timeHand[$i].'">
                                <path class="'.$timeHand[$i].'-arm" d="M300.5 298V142"/>
                                <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
                            </g>';
                    }
                ?>
            </svg>
        </div>
        <div class="digital">
            <h4 id="time"></h4>
        </div>
    </div>
    <div class="newYork">
        <div class="clockbox">
            <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
                <g id="face">
                    <circle class="circle" cx="300" cy="300" r="253.9"/>
                    <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                    <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
                </g>
                <?php 
                    for ($i=0; $i < sizeof($timeHand); $i++) { 
                        echo '<g id="'.$timeHand[$i].'">
                                <path class="'.$timeHand[$i].'-arm" d="M300.5 298V142"/>
                                <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
                            </g>';
                    }
                ?>
            </svg>
        </div>
        <div class="digital">
            <h4 id="time"></h4>
        </div>
    </div>
    <div class="kathmandu">
        <div class="clockbox">
            <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
                <g id="face">
                    <circle class="circle" cx="300" cy="300" r="253.9"/>
                    <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                    <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
                </g>
                <?php 
                    for ($i=0; $i < sizeof($timeHand); $i++) { 
                        echo '<g id="'.$timeHand[$i].'">
                                <path class="'.$timeHand[$i].'-arm" d="M300.5 298V142"/>
                                <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
                            </g>';
                    }
                ?>
            </svg>
        </div>
        <div class="digital">
            <h4 id="time"></h4>
        </div>
    </div>
</main>

</body>

</html>
