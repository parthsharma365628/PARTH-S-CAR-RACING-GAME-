class GAME {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(200,100);
      car1.addImage(c1)
      car2 = createSprite(500,100);
      car2.addImage(c2)
      car3 = createSprite(800,100);
      car3.addImage(c3)
      car4 = createSprite(1100,100);
      car4.addImage(c4)
      cars = [car1, car2, car3, car4];

    
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        background("lightblue")
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        image(ground,0,displayHeight,displayWidth,500)
        image(winner,0,(-displayHeight*4)-500,displayWidth,700)
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 150;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 230;
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
         
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance>4900 ){
        gameState=2
        console.log("winner : "+player.name)
      }
      
      drawSprites();
    }
  }