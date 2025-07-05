import GameController from '../controllers/GameController.js';
import readlineSync from 'readline-sync'
import figlet from 'figlet';
class GameView{
    constructor(){
        this.gameController = new GameController();
    }
    _splash(prompt){
        if(typeof prompt !== 'string'){
            console.error('typeof [parameter] not match');
            return;
        }
        try{
            const data = figlet.textSync(prompt);
            console.log(data);
        }catch(err){
            console.log('Something went wrong...');
            console.dir(data);
        }
    }
    _showAll(){
        this.gameController.newHand();
        this.gameController.setRank();
        console.clear();
        console.log('{\n');
        for(let x = 0; x < 5; x++){
            console.log(this.gameController.player.hand[x].asString);
        }
        console.log("\n}   Hand Type:" + this.gameController.player.rankString + "\n");
    }
    
}

export default GameView;