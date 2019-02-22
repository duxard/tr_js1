/*
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
*/
var array2 = ["lively", "alive", "harp", "sharp", "armstrong"];
var array1 = ["xyz", "live", "strong"];

function inArray (array1, array2) {
    let subsetArray = array1.filter((word) => {
       return isSubsetOfWord(word, array2);
    });
    return [...new Set(subsetArray)].sort();
};

function isSubsetOfWord (word, array2) {
    return array2.some((wordToCheckAgainst) => {
        return wordToCheckAgainst.includes(word);
    });
};

/*******************************************************************/


function diamond(n){
  if( n%2==0 || n<1 ) return null
  var x=0, add, diam = line(x,n); //number of stars, diameter
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}

function repeat(str,x){
    return Array(x+1).join(str); 
}
function line(spaces,stars){ 
    return repeat(" ",spaces)+repeat("*",stars)+"\n"; 
}


/*******************************************************************/

function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  var data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError("Ошибка в URI", e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError("Синтаксическая ошибка в данных", e);
    } else {
      throw e; // пробрасываем
    }
  }
}

try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    alert( e.message );
    alert( e.cause ); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}

/*******************************************************************/

function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

/*******************************************************************/

var getDepth = function(obj){
    var depth = 0,
        targetKey = '';

    function getType(obj){
        return {}.toString.call(obj).slice(8, -1);
    }


    function isObjectEmpty(obj){
        return Object.keys(obj).length ? false : true;
    }

    function isThereAnObject(obj){
        var existence = false;
        for(var key in obj){
            if(getType(obj[key]) == 'Object'){
                targetKey = existence = key;
                break;
            }
        }
        return existence;
    } 

    function nestingDepth(obj){
        if(!isObjectEmpty(obj)){
            if(isThereAnObject(obj)){
                depth++;
                nestingDepth(obj[targetKey]);
            }
        }
    }

    nestingDepth(obj);
    return depth;
}
        /***************************************/
        
        
        var newObj = {
            1: [],
            'wretwre': {}
        };


        cl( getDepth(newObj) );

/*******************************************************************/

const sumArgs = (...rest) => rest.reduce((acc, item) => item + acc);
const applyAll1 = (fn, ...args) => fn(...args);

/*******************************************************************/
/*
Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.
Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.
Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .
There should be no space between the minus "-" sign and the digit after it.
*/
function coords(str){
    var regExp = /^-?\d{1,2}(\.\d{1,})?,\s?-?\d{1,3}(\.\d{1,})?$/;
    if(!regExp.test(str)){
        return false;
    } 
    var nums = str.split(/,\s?/);
    return nums[0] >= -90 && nums[0] <= 90 && nums[1] >= -180 && nums[1] <= 180;
}
/*******************************************************************/

var fibonacci = (function(){
    var memo = {};

    function f(n){
        var result;
        if(n in memo){
            result = memo[n];    
        }else{
            if(n===0 || n===1){
                result = n;
            }else{
                result = f(n-1) + f(n-2);
            }
            memo[n] = result;
        }
        return result;
    }
    return f;
})();

/*******************************************************************/

function mf(obj){
    if(Object.getOwnPropertyNames(obj).length){
        for(var key in obj){
            if(typeof obj[key] == 'object'){
                mf(obj[key]);
            }
            if(key == 'error'){
                obj[key] = false;
            }
        }
    }
}

var obj1 = {
    error: true,
    name: 'Vasya',
    obj: {
        error: true,
        obj: {
            name: "john",
            obj: {},
            obj1: {
                error: true,
                obj: {error: true}, obj1:{error: true}, obj2:{error: true}
            }
        }
    }
};
/*******************************************************************/
var obj1 = {
    x: {
        x: {
            x: {
                x: {}
            }
        }
    }
};

var depth = (function(){
    var total = 0;

    return function(obj){
        if(Object.getOwnPropertyNames(obj).length){
            for(var key in obj){
                if(typeof obj[key] == 'object'){
                    total++;
                    depth(obj[key]);
                }
            }
        }
        return total;
    }
})();

/*******************************************************************/

function f(str, sub){
    var re = new RegExp(sub, 'g');
    return str.match(re).length;
}


console.log( f('dotdot dot dfgfd dot', 'dot') );

/*******************************************************************/

var Service = (function(){
    var Service = function(){
        this.say = 'Hello';
    }

    Service.prototype.publicMethod = function(){
        privateMeth.call(this);
    }

    var privateMethod = function(){
        cl(this.say);
    }

    return Service;
})();

/*******************************************************************/