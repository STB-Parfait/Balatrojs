import Card from '../models/Carta.js';
class Hand{

    static #rank = {
        0:'high card',
        1:'pair',
        2:'two pair',
        3:'three of a kind',
        4:'straight',
        5:'flush',
        6:'full house',
        7:'four of a kind',
        8:'straight flush',
        9:'royal flush'};

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
    get rankString(){
        const rankString = Hand.#rank[this.rank];
        return `${rankString}`;
    }
}

export default Hand;