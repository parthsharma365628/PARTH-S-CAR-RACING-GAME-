class Form{
 constructor(){
this.input=createInput("     Enter Name")
this.button= createButton('JOIN')
this.greeting=createElement('h3')

}
hide(){
  this.input.hide()
  this.button.hide()
  this.greeting.hide()
}

 display(){
  var title= createElement('h2')
  title.html("WELCOME TO THE BEST CAR RACING GAME")
  title.position((width/2)-250,20)

  
  
  this.input.position(width/2-50 ,height/2-250)
  this.button.position(width/2 ,height/2-200)

  this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()

    player.name=this.input.value()
    
    playerCount += 1
    player.index = playerCount
    player.update()
    player.updateCount(playerCount)

    this.greeting.html("HELLO  "+ player.name +"  !!!")      //HELLO nameofplayer 
    this.greeting.position(width/2 -110,height/2-250)
    
  })
 }
}