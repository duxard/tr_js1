
function* myGen(){
    const arr = [];
    var x = yield "apple";
    var y = yield "pear";
    var z = yield "orange";
    arr.push(x,y,z);

    console.log(arr);
    return "all done";
}

let gen = myGen();
console.log( gen.next() );
console.log( gen.next(3) );
console.log( gen.next(5) );
console.log( gen.next(4) );


