class Card{

    static #value = { 0: '2', 1: '3', 2: '4', 3: '5', 4: '6', 5: '7', 6: '8', 7: '9', 8: '10', 9: 'Jack', 10: 'Queen', 11: 'King', 12: 'Ace' };
    static #nipe = {0:'spades',1:'clubs',2:'hearts',3:'diamonds'};

    constructor(){
        this.value = Math.floor(Math.random() * 13);
        this.nipe = Math.floor(Math.random() * 4);
        this.hasFace = this.value > 9;
        this.isSelected = false;
    }
    get asString(){
        const valorString = Card.#value[this.value];
        const nipeString = Card.#nipe[this.nipe];
        return `${valorString} of ${nipeString}`;
    }
}

export default Card;