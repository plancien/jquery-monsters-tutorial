
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


function random256 () {
    return Math.floor(Math.random() * 256);
}


Monster.prototype.setRandomColor = function () {
    this.container.css('background-color', 'rgb(' + random256() + ', ' + random256() + ', ' + random256() + ')');
};


Monster.prototype.createHtml = function () {
    var template = $('#monster_template');
    this.container = $(template.html());
    this.eyeContainers = this.container.find('.eye_ball');
    $('body').append(this.container);
    this.setRandomColor();
};


Monster.prototype.display = display;


Monster.prototype.moveEyes = function (x, y) {
    this.eyeContainers.css({
        left: 30 * (1 + x) + '%',
        top:  30 * (1 + y) + '%'
    });
};


Monster.prototype.react = function () {
    var dx = this.x - player.x;
    var dy = this.y - player.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    dx = dx / distance;
    dy = dy / distance;

    if (distance < 150) {
        this.x += dx * this.speed;
        this.y += dy * this.speed;
        this.display();
    }

    this.moveEyes(-dx, -dy);

};





function reactMonsters () {
    for (var i = 0; i < monsters.length; i++) {
        monsters[i].react();
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

        reactMonsters();
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

    reactMonsters();

    addKeyListeners();
}




$(init);


