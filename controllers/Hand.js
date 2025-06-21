import Card from '../models/Carta.js';
class Hand{
    constructor(){
        this.cartas = new Array(5);
        this.rank = null;
    }
    newHand(){
        for(let x = 0; x < 5; x++){
            this.cartas[x] = new Card();
        }
    }
    discard(discardArray){
        for(let x = 0; x < discardArray.length; x++){
            cartas[discardArray[x]] = new Card;
        }
    }
}

export default Hand;