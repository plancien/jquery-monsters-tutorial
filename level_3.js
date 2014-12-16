
var playerX = 200;
var playerY = 100;


var monsterX = 300;
var monsterY = 150;


var playerSpeed   = 20;
var monsterSpeed  = 30;


var playerContainer;
var monsterContainer;


function moveMonster () {
    var dx = monsterX - playerX;
    var dy = monsterY - playerY;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
        dx = dx / distance;
        dy = dy / distance;

        monsterX += dx * monsterSpeed;
        monsterY += dy * monsterSpeed;
        displayMonster();
    }
}


function displayPlayer () {
    playerContainer.css({
        left: playerX + 'px',
        top:  playerY + 'px'
    });
}


function displayMonster () {
    monsterContainer.css({
        left: monsterX + 'px',
        top:  monsterY + 'px'
    });
}


function addKeyListeners () {

    $('body').keydown(function (event) {
        if (event.keyCode === 37) {
            playerX -= playerSpeed;
        }
        if (event.keyCode === 39) {
            playerX += playerSpeed;
        }
        if (event.keyCode === 40) {
            playerY += playerSpeed;
        }
        if (event.keyCode === 38) {
            playerY -= playerSpeed;
        }

        moveMonster();
        displayPlayer();
    });

}


function init () {
    playerContainer   = $('#player');
    monsterContainer  = $('.monster');

    displayPlayer();
    displayMonster();

    addKeyListeners();
}


$(init);


