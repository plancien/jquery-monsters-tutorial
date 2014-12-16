
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
    this.x =       300;
    this.y =       150;
    this.speed =   30;
}


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

        monster.move();
        player.display();

    });

}



var monster = new Monster();


function init () {
    player.container   = $('#player');
    monster.container  = $('.monster');

    player.display();
    monster.display();

    addKeyListeners();
}




$(init);


