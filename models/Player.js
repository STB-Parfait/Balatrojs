import Carta from './Carta.js';
class Player {

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
        this.hand = new Array(5);
        this.handRank = 0;
        this.points = 0;
    }

    get rankString(){
        const rankString = Hand.#rank[this.handRank];
        return `${rankString}`;
    }
}