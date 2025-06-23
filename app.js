import Hand from './controllers/Hand.js';
import Checker from './controllers/Checker.js';
import MainView from './views/MainView.js';

let check = new Checker();
let hand = new Hand();

hand.newHand();

hand.rank = check.setRank(hand);

let view = new MainView(hand);
view.showHand();

hand.selectCards();
hand.discard();

view.showHand();