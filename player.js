class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null

    }

    getCount(){
    database.ref('playerCount').on("value" , (data)=>{
        playerCount = data.val()
    })    

    }

    updateCount(count){
    database.ref('/').update({
        playerCount : count
    })
    }

    update(){

        var playerIndex = "players/player" + player.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        
        })
     }
    //players---> player1, player2,player3,player4
     static getPlayerInfo(){
         database.ref('players').on("value",(data)=>{
         allPlayers=data.val()

         })
         
     }
}