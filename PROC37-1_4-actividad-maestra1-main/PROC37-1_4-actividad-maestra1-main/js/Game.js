class Game {
  constructor() {}

gameState(){
var gameStateRef=database.ref("gameState");
gameStateRef.on("value", function(data){
  gameState=data.val();
})
}

update(state){ 
  database.ref("/").update({ 
    gameState:state }); 
  }

  handleElements(){ 
    form.hide();
     form.titleImg.position(40,50);
      form.titleImg.class("efectoTitulo"); 
    }

    play(){ 
      this.handleElements();
      
      

      drawSprites(); 
    }




start(){
form = new Form();
  form.display();
  player = new Player();
}
}