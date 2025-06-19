import Hand from './controllers/Hand.js';
import Checker from './controllers/Checker.js';

//pneumoultramicroscópicosilicovulcanocorniótico;

let check = new Checker();
let hand = new Hand();

hand.newHand();

let teste = [];
teste = check.checkAll(hand);

console.log(teste);