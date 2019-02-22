let cl = console.log;
cl(true)

let o1 = {
    walk(){
        cl("o1 walk");
    }
};

let o2 = {
    __proto__: o1,
    walk(){
        super.walk()
    }
};

o1.walk();
o2.walk();