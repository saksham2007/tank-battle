var playerCnt = 0
var database
var deathCnt = 0
var allPlayers
var gameState = 0
var player,game
var form,bg;
var tank1img,tank2img,tank3img,tank4img,tanks=[]
var tank1,tank2,tank3,tank4


function preload() {
    tank1img = loadImage("images/tank11.png")
    tank2img = loadImage("images/tank22.png")
    tank3img = loadImage("images/tank33.png")
    tank4img = loadImage("images/tank44.png")

    stoneImg = loadImage("images/stone.png")
    cactusImg = loadImage("images/cactus.png")

    bg = loadImage("images/desert.jpg")

}

function setup() {
    createCanvas(displayWidth - 20, displayHeight - 120)

    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()

    if (gameState === 1) {
        //spawning cactus
        for (var i = 0; i < 12; i++) {
            var randX = Math.round(random(50, displayWidth - 50))
            var randY = Math.round(random(100, displayHeight - 280))
            cactus = createSprite(randX, randY)
            cactus.addImage(cactusImg)
            cactus.scale = 0.05
        }
        //spawning stone
        for (var i = 0; i < 6; i++) {
            var randX = Math.round(random(50, displayWidth - 50))
            var randY = Math.round(random(100, displayHeight - 180))
            stone = createSprite(randX, randY)
            stone.addImage(stoneImg)
            stone.scale = 0.2
        }
    }
}

function draw() {
    background("white")
    if(playerCnt===4){
        game.update(1)
    }
if(gameState===1){
    game.play()
     drawSprites()
}
   

}