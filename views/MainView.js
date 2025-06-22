import Carta from '../models/Carta.js';
import Hand from '../controllers/Hand.js';
import Checker from '../controllers/Checker.js';
import readline from 'readline-sync';

let playerHand = new Hand();

playerHand.newHand();

for(let x = 0; x < 5; x++){
    console.log('| ' + playerHand.cartas[x].asString);
}
