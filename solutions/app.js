
import checkIP from './ip.js';
import checkMAC from './mac.js';
import checkVisa from './visa.js';

const checker = {
    rules : {checkIP, checkMAC, checkVisa},
    validate(string, pattern){
        if(pattern === "visa"){
            return this.rules.checkVisa(string)
        }
        else if(pattern === "ip"){
            return this.rules.checkIP(string)
        }
        else if(pattern === "mac"){
            return this.rules.checkMAC(string)
        }
    }
};

export default checker;