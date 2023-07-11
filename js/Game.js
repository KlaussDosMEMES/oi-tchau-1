class Game {
  constructor() {}

  getState(){
    var gameStateRef = database.ref ("gameState")
gameStateRef.on("value", function(data) {
  gameState= data.val()
});
 
}
  update(state){
    database.ref("/").update({
      gameState: state
    })
  }

  start(){
    player = new Player()
    playerCounte = player.getCount()

    form = new Form()
    form.display()
    car1 = createSprite(width/2 - 50, height - 100)
    car1.addImage("car1",car1_img)
    car1.scale = 0.07
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  start() {
    form = new Form();
    form.display();
    player = new Player();
  }
}
