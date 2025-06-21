import Hand from './Hand.js';
import Card from '../models/Carta.js';
class Checker{
    _getFrequency(hand){
        let frequencyMap = new Map();
        for(const carta of hand.cartas){
            let valorCarta = carta.value;
            let currentCount = frequencyMap.get(carta.value) || 0;
            frequencyMap.set(valorCarta,currentCount + 1);
        }
        return Array.from(frequencyMap.entries());
    }
    _getNipes(hand){
        let frequencyMap = new Map();
        for(const carta of hand.cartas){
            let nipeCarta = carta.nipe;
            let currentCount = frequencyMap.get(carta.nipe) || 0;
            frequencyMap.set(nipeCarta,currentCount + 1);
        }
        return Array.from(frequencyMap.entries());
    }
    _arrayCheck(arr1, arr2){
        if(arr1.length!==arr2.length){
            return false;
        }
        return arr1.every((value,index) => value===arr2[index]);
    }
    _checkLowAce(frequencyMap){
        let referenceArray = [0,1,2,3,12];
        frequencyMap.sort((a,b) => a[0]-b[0]);
        let copyArray = [];
        for(let x = 0; x < 5; x++){
            copyArray[x] = frequencyMap[x][0];
        }
        return this._arrayCheck(copyArray,referenceArray);
    }
    checkPair(frequencyMap){
        for(const linha of frequencyMap){
            if(linha[1]===2){
                return true;
            }
        }
        return false;
    }
    checkTwoPair(frequencyMap){
        let pairs = 0;
        for(const linha of frequencyMap){
            if(linha[1]===2){
                pairs++;
            }
        }
        return pairs===2;
    }
    checkToak(frequencyMap){
        for(const linha of frequencyMap){
            if(linha[1]===3){
                return true;
            }
        }
        return false;
    }
    checkFoak(frequencyMap){
        for(const linha of frequencyMap){
            if(linha[1]===4){
                return true;
            }
        }
        return false;
    }
    //this one uses the frequencyMap created by _getNipes()
    checkFlush(frequencyMap){
        for(const linha of frequencyMap){
            if(linha[1]===5){
                return true;
            }
        }
        return false;
    }
    checkStraight(frequencyMap){
        if(frequencyMap.length!==5){
            return false;
        }
        frequencyMap.sort((a,b) => a[0]-b[0]);
        if(this._checkLowAce(frequencyMap)){
            return true;
        } else {
            for(let x = 0; x < 4; x++){
                if(frequencyMap[x+1][0]!==frequencyMap[x][0]+1){
                    return false;
                }
            }
            return true;
        }
    }
    checkFullHouse(frequencyMap){
        let pair = this.checkPair(frequencyMap);
        let toak = this.checkToak(frequencyMap);
        if(pair===true&&toak===true){
            return true;
        } else {
            return false;
        }
    }
    checkStraightFlush(frequencyMap, nipeMap){
        let straigth = this.checkStraight(frequencyMap);
        let flush = this.checkFlush(nipeMap);
        if(straigth===true&&flush===true){
            return true;
        } else{
            return false;
        }
    }
    checkHighCard(frequencyMap,nipeMap){
        if(frequencyMap.length!==5){
            return false;
        }
        if(!this.checkStraight(frequencyMap)&&!this.checkFlush(nipeMap)){
            return true;
        } else{
            return false;
        }
    }
    checkRoyal(frequencyMap,nipeMap){
        if(this.checkStraightFlush(frequencyMap,nipeMap)){
            if(frequencyMap[4][0]===12&&frequencyMap[0][0]===8){
                return true;
            }
        }
        return false;
    }
    setRank(hand){
        let multiCheck = new Array(10);

        let frequencyMap = this._getFrequency(hand);
        let nipeMap = this._getNipes(hand);

        multiCheck[1] = this.checkPair(frequencyMap);
        multiCheck[2] = this.checkTwoPair(frequencyMap);
        multiCheck[3] = this.checkToak(frequencyMap);
        multiCheck[4] = this.checkStraight(frequencyMap);
        multiCheck[5] = this.checkFlush(nipeMap);
        multiCheck[6] = this.checkFullHouse(frequencyMap);
        multiCheck[7] = this.checkFoak(frequencyMap);
        multiCheck[8] = this.checkStraightFlush(frequencyMap,nipeMap);
        multiCheck[9] = this.checkRoyal(frequencyMap,nipeMap);
        multiCheck[0] = this.checkHighCard(frequencyMap,nipeMap);

        let higherRank = 0;

        for(let x = 0; x < 10; x++){
            switch(multiCheck[x]){
                case true:
                    higherRank = x;
                    break;

                case false:
                    break;    
            }
        }

        return higherRank;
    }
}

export default Checker;