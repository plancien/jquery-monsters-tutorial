
function display () {
    this.container.css({
        left: this.x + 'px',
        top:  this.y + 'px'
    });
}


var player = {
    x:     200,
    y:     100,
    speed:  20,
    display: display
};





function Monster () {
    this.x = 50 + Math.random() * 500;
    this.y = 50 + Math.random() * 500;

    this.speed = 30;

    this.createHtml();
    this.display();
}


Monster.prototype.createHtml = function () {
    var template = $('#monster_template');
    this.container = $(template.html());
    $('body').append(this.container);
};


Monster.prototype.display = display;


Monster.prototype.move = function () {
    var dx = this.x - player.x;
    var dy = this.y - player.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
        dx = dx / distance;
        dy = dy / distance;

        this.x += dx * this.speed;
        this.y += dy * this.speed;
        this.display();
    }
};





function moveMonsters () {
    for (var i = 0; i < monsters.length; i++) {
        monsters[i].move();
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

        moveMonsters();
        player.display();

    });

}



var monsters = [];




function init () {
    var monstersCount = 30;

    for (var i = 0; i < monstersCount; i++) {
        monsters.push(new Monster());
    }

    player.container = $('#player');
    player.display();

    moveMonsters();

    addKeyListeners();
}




$(init);


