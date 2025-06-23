import Card from '../models/Carta.js';
import readline from 'readline-sync';
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
    discard(){
        for(let i = 0; i < this.cartas.length; i++){
            if(this.cartas[i].isSelected){
                this.cartas[i] = new Card();
            }
        }
    }
    selectCards(){

        const maxIndex = this.cartas.length - 1;

        let playerInput = '';

        playerInput = readline.question('input the cards to be discarted, then press ENTER');

        if(playerInput!==''){

            let inputTranslation = playerInput
                .split(' ')
                .map(str => parseInt(str,10)-1)
                .filter(index =>
                    !isNaN(index) &&
                    index >= 0 &&
                    index <= maxIndex
                );
            
            for(const index of inputTranslation){
                this.cartas[index].isSelected = true;
            }
        }
    }
    get rankString(){
        const rankString = Hand.#rank[this.rank];
        return `${rankString}`;
    }
}

export default Hand;