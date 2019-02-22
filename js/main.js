'use strict';
const cl = console.log;

let obj1 = {
    x: {
        x:{
            x: {
                s: true
            }
        }
    }
};

var nesting = (function(){
    var depth = 0;
    return function f(obj){
        if(Object.getOwnPropertyNames(obj).length){
            for(var key in obj){
                if(typeof(obj[key]) === 'object'){
                    cl(typeof(obj[key]));
                    depth++;
                    f(obj[key]);
                }
            }
        }
        return depth;
    }
})();

cl( nesting(obj1) );

function Coffee(){
    var waterAmount = 0;

    this.waterAmount = function(amount){
        if(!arguments.length){
            return waterAmount;
        }
        if(amount<0){
            throw new Error("Error!");
        }
        waterAmount = amount;
    }
}

var cup = new Coffee()
cup.waterAmount();
cl(cup.waterAmount() )