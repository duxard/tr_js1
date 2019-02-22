
let s1 = Symbol();
cl(s1.toString());

let isAdmin = Symbol("isAdmin");
let user = {
    name: "Alex",
    [isAdmin]: true
};

cl( Object.keys(user) );
cl( Object.getOwnPropertyNames(user) );