var game = new Phaser.Game(800,600,Phaser.AUTO,'amazingGame',{preload:preload, create:create, update:update, render:render});
var x=100;
var y=100;
var buttonstart;
var text;
function preload() {
    game.load.image('button','assets/buttonstart.png');
    
}
function create() {
    game.stage.backgroundColor='#FFC5E0';
    buttonstart=game.add.button(0,0,'button',_start,this,2,1,0);
    text= game.add.text(buttonstart.x+buttonstart.width+30,buttonstart.y,'Click to load assets',{fill:'#fffff'});
    game.load.onLoadStart.add(_loadStart,this);
    game.load.onFileComplete.add(_loadfile,this);
    game.load.onLoadComplete.add(_loadfinished,this);
}

function update() {  
}

function render(){

}
function _start() {
    game.load.image('image1','assets/image1.jpg');
    game.load.image('image2','assets/image2.jpg');
    game.load.image('image3','assets/image3.jpg');
    game.load.image('image4','assets/image4.jpg');
    game.load.start();
    buttonstart.visible=false;
}

function _loadStart()
{
    text.text='loading assets...';
    console.log('load start');
}
function _loadfile(process,name)
{
    text.text=name +' has loaded.Loading: ' + process+ '%';
    var newasset=game.add.image(x,y,name);
    newasset.scale.set(2);
    x+=newasset.width+50;

    console.log('load file');
    
}
function _loadfinished()
{
    text.text='Loaded!!';
}


