
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


player.display = function () {
    player.container.css({
        left: player.x + 'px',
        top:  player.y + 'px'
    });
};


monster.display = function () {
    monster.container.css({
        left: monster.x + 'px',
        top:  monster.y + 'px'
    });
};


monster.move = function () {
    var dx = monster.x - player.x;
    var dy = monster.y - player.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
        dx = dx / distance;
        dy = dy / distance;

        monster.x += dx * monster.speed;
        monster.y += dy * monster.speed;
        monster.display();
    }
};


function addKeyListeners () {

    $('body').keydown(function (event) {
        if (event.keyCode === 37) {
            player.x -= player.speed;
        }
        if (event.keyCode === 39) {
            player.x += player.speed;
        }
        if (event.keyCode === 40) {
            event.preventDefault();
            player.y += player.speed;
        }
        if (event.keyCode === 38) {
            event.preventDefault();
            player.y -= player.speed;
        }

        monster.move();
        player.display();

    });

}


function init () {
    player.container   = $('#player');
    monster.container  = $('.monster');

    player.display();
    monster.display();

    addKeyListeners();
}


$(init);


