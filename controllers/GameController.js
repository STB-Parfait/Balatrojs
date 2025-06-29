import Player from '../models/Player.js';
import Carta from '../models/Carta.js';
class GameController{
    constructor(){
        this.player = new Player();
    }
    newHand(){
        this.player.hand = [];
        for(let x = 0; x < 5; x++){
            this.player.hand.push(new Carta());
        }
    }
    discard(){
        for(let i = 0; i < this.player.hand.length; i++){
            if(this.player.hand[i].isSelected){
                this.player.hand[i] = new Card();
            }
        }
    }
    selectCards(input){

        const maxIndex = this.player.hand.length - 1;

        if(input!==''){

            let inputTranslation = input
                .split(' ')
                .map(str => parseInt(str,10)-1)
                .filter(index =>
                    !isNaN(index) &&
                    index >= 0 &&
                    index <= maxIndex
                );
            
            for(const index of inputTranslation){
                this.player.hand[index].isSelected = true;
            }
        }
    }
}