
/*
function work(a) {
    cl(a);
}

function makeLogging(f, log) {
    return function(a){
        log.push(a);
        return f.call(this, a);
    }
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log
cl(log);
*/
/**********************************************/


/*
const Singleton = (function() {
    let instance;

    // Приватные методы и свойства

    // Конструктор
    function Singleton() {
        if (instance) return instance;
        instance = this;
    }

    // Публичные методы
    Singleton.prototype.test = function() {};

    return Singleton;
})();

let a1 = new Singleton();
let a2 = new Singleton();
let a3 = new Singleton();


console.log(a1 === a2);
*/

var user = {
    name: "Alex",
    sh(){
        cl(this.name);
    }
};

function defer(f, ms){
    let args = arguments,
        ctx = this;
    return function(){
        setTimeout(function(){
            return f.apply(ctx, args);
        }, ms);
    }
}


//function defer(f, ms) {
//    return function() {
//        setTimeout(() => f.call(this, arguments), ms)
//    }
//}

const show = defer(user.sh, 1000);
show();
user.sh();

