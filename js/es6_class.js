const cl = console.log;

//class expression
let SiteGuest = class MyUser {
    sayHi(){
        cl(`hi!`);
    }
};

new SiteGuest().sayHi();

//getters and setter

class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newValue){
        [this.firstName, this.lastName] = newValue.split(' ');
    }

    static createUser(){
        return new User("Guest", "Guest");
    }
}

const guest1 = User.createUser();
cl( guest1.fullName )

// Inheritance

//------------------------------------ ES2015

/*
function Animal(type){
    this.type = type;
}

Animal.prototype.getType = function(){
    cl(this.type);
};


function Dog(type, name){
    Animal.apply(this, arguments);
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    cl("Barking");
};

var dog = new Dog("mammal","Lessy");
dog.bark();
dog.getType();

cl( dog.__proto__ === Dog.prototype );
cl( Dog.prototype.isPrototypeOf(dog) );
cl( dog instanceof Dog );
*/

//------------------------------------ ES6

class Animal {
    constructor(type){
        this.type = type;
    }

    getType(){
        cl(this.type)
    }
}

class Cat extends Animal{
    constructor(type, name){
        super(type);
        this.name = name;
    }


    getName(){
        cl(this.name);
    }

    mew(){
        cl("Mew!");
        return this;
    }

    getCatType(){
        let origin = super.getType();
        cl(`Cat is also a ${origin}`)
    }
}

const ignat = new Cat("mammal", "Ignat");
ignat.getType();
ignat.getName();
ignat.mew().getCatType();

