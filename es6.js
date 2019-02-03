'use strict';
const cl = console.log;

//DESTRUCTURING ASSIGNMENT

let fruits = ['apple', 'grape', 'pear', 'peach', 'pinapple'];
let [one, two, ...rest] = fruits;
cl(one, two);
cl(rest);

const getDefaultVisitor = () => Date.now() + "-visitor";

let [user1, user2=getDefaultVisitor()] = ["Delta"];
cl(user1);
cl(user2);

const city = {
    name: "Yalta",
    bars:["roppongi", 'koza-nostra'],
    schools: {
        one: 'first',
        two: 'second'
    },
    location: {
        latitude: 22222,
        longitude: 11111

    }
};

let {country="RUS",name} = city;
cl(country);
cl(name);