
//storing the player and monster data into a {}
var player = {
    x:     200,
    y:     100,
    speed:  20
};


var monster = {
    x:     300,
    y:     150,
    speed:  30
};


function displayPlayer () {
    player.container.css({
        left: player.x + 'px',
        top:  player.y + 'px'
    });
}


function displayMonster () {
    monster.container.css({
        left: monster.x + 'px',
        top:  monster.y + 'px'
    });
}


function moveMonster () {
    var dx = monster.x - player.x;
    var dy = monster.y - player.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
        dx = dx / distance;
        dy = dy / distance;

        monster.x += dx * monster.speed;
        monster.y += dy * monster.speed;
        displayMonster();
    }
}


function addKeyListeners () {

    $('body').keydown(function (event) {
        if (event.keyCode === 37) {
            player.x -= player.speed;
        }
        if (event.keyCode === 39) {
            player.x += player.speed;
        }
        if (event.keyCode === 40) {
            event.preventDefault();  // to avoid page scrolling
            player.y += player.speed;
        }
        if (event.keyCode === 38) {
            event.preventDefault();  // to avoid page scrolling
            player.y -= player.speed;
        }

        moveMonster();
        displayPlayer();

    });

}


function init () {
    player.container   = $('#player');   //container property can be added after player variable has been created
    monster.container  = $('.monster');

    displayPlayer();
    displayMonster();

    addKeyListeners();
}


$(init);


