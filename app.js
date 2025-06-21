import Hand from './controllers/Hand.js';
import Checker from './controllers/Checker.js';

let check = new Checker();
let hand = new Hand();

hand.newHand();

for(let x = 0; x < 5; x++){
    console.log(hand.cartas[x].asString);
}