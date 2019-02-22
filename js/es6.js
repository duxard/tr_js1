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

// FUNCTIONS
cl("+++++FUNCTIONS+++++")

function f1(title="Main", x=10, y=100){
    cl(`title: ${title} x: ${x} y: ${y}`)
}

f1(undefined, null, null);

// FUNCTIONS + DESTRUCTURING ASSIGNMENT
cl("+++++FUNCTIONS + DESTRUCTURING ASSIGNMENT+++++")

const pl1 = {
    name: "Pluto",
    radius: 2000,
    rings: false,
    satellites: ["x", "y"]
}


function getPlanet({name, radius, satellites:s} = {}){
    if(!arguments[0]){
        cl("Empty object will be filled automatically");
        var name = "default", radius = 1000, s = ["default"];
    }

    cl(`Planet: ${name}, Radius: ${radius}, Satellites: ${s}`);
}

getPlanet(pl1);
getPlanet();
cl();

let group = {
    city: "msc",
    colors: ['green', 'yellow', 'red'],
    
    getColors(){
        this.colors.forEach(item => cl(item));
    }
    
}
group.getColors();



