class Card{
    constructor(){
        this.value = Math.floor(Math.random() * 13);
        this.nipe = Math.floor(Math.random() * 4);
        this.hasFace = this.value > 9;
    }
}

export default Card;