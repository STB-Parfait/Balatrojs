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
            console.log('   ' +`[${x+1}] - `+ this.hand.cartas[x].asString);
        }
        console.log('}  [current best hand: ' + this.hand.rankString + ']\n');
    }
    showSelected(){
        let selectedStrings = [];
        for(let x = 0; x < 5; x++){
            if(this.hand.cartas[x].isSelected===true){
                selectedStrings.push(this.hand.cartas[x].asString);
            }
        }
        if(selectedStrings.length===0){
            console.log('[nenhuma carta selecionada]');
        } else{
            console.log(selectedStrings);
        }
    }
}

export default MainView;
