class Game{
    constructor(){

    }

    getState(){
var gameStateRef = database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState = data.val();
})
    }

    update(state){
database.ref('/').update({
    gameState: state
})
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          player.getPlayerCount();          
          form = new Form()
          form.display();
        }

        tank1 = createSprite(100,200);
        tank1.addImage(tank1img);
        tank1.scale=0.5
        tank2 = createSprite(300,200);
        tank2.addImage(tank2img);
        tank2.scale=0.5
        tank3 = createSprite(500,200);
        tank3.addImage(tank3img);
        tank3.scale=0.5
        tank4 = createSprite(700,200);
        tank4.addImage(tank4img);
        tank4.scale=0.5

        tanks = [tank1, tank2, tank3, tank4];
    }

    

    play(){
        form.hide();
     drawSprites()
        Player.getPlayersInfo();
       // Player.getCarsAtEnd();
    
        if(allPlayers !== undefined){
          background(bg);
         // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
          
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 175 ;
          var y;
    
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
             console.log(allPlayers)
            //position the cars a little away from each other in x direction
            x =   allPlayers[plr].position.x
            //use data form the database to display the cars in y direction
            y =  allPlayers[plr].position.y
            if(allPlayers)
            tanks[index-1].x = x;
            tanks[index-1].y = y;
           // console.log(index, player.index)
    
           
            if (index === player.index){
              stroke(10);
              fill("red");
              ellipse(x,y,60,60);
              tanks[index - 1].shapeColor = "red";
             // camera.position.x = displayWidth/2;
              //camera.position.y = cars[index-1].y;
            }
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.posY+=10
          player.update();
        }
    
        // if(player.distance > 3860){
        //   gameState = 2;
        //   carEnd+=1
        //   player.rank=carEnd
        //   player.update()
          
        //  Player.UpdateCarsAtEnd(carEnd)
        // }
    
        drawSprites();
      }


    }
