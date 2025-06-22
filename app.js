import Hand from './controllers/Hand.js';
import Checker from './controllers/Checker.js';

let check = new Checker();
let hand = new Hand();

hand.newHand();

hand.rank = check.setRank(hand);

console.log(hand.cartas);