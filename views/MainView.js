import Carta from '../models/Carta.js';
import Hand from '../controllers/Hand.js';
import Checker from '../controllers/Checker.js';
import readline from 'readline-sync';

class MainView{
    constructor(hand){
        this.hand = hand;
    }
    showHand(){
        console.log('{');
        for(let x = 0; x < 5; x++){
            console.log('   ' + this.hand.cartas[x].asString);
        }
        console.log('}  [current best hand: ' + this.hand.rankString + ']\n');
    }
}

export default MainView;
