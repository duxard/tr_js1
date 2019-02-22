/*
let arr = [1,2,3,4,5];
for(let i of arr){
    cl(i);
}


const str = "ISOHDFS27";
for(let i of str){
    cl(i);
}
*/

let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function(){
    let current = this.from,
        last = this.to;

    return {
        next(){
            if(current <= last){
                return {
                    done: false,
                    value: current++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    };
};

for(let key of range){
    cl(key);
}