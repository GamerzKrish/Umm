class Player {
  constructor(){
    this.name = null
    this.index = null

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = 'Players/player' + this.index;
    database.ref(playerIndex).set({
      name:this.name
    });
  }
  static GPI(){
//static function is independent of objects, so static funct is called using class name eg- Player.GPI()       XD XP :) hahahahaha
var Info = database.ref("Players")
Info.on("value",(data)=>{

  allPlayers = data.val();
})


  }
}
