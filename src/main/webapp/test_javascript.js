// comment: this is a comment

console.log("Hello to the world!");

// ES 5 version 1-5
var z=1;

//ES 6
let x = 1;
const y = 1;

let variableOne = 5;
let variableTwo = 6;

console.log("variableOne: " + variableTwo);
let variableThree = variableOne + variableTwo;
variableThree ++;
console.log(variableThree);

function addNumbers(a,b){
    return a+b;
}
console.log("Output: " + addNumbers(22, 32));

let otherFunction = addNumbers;
x = otherFunction(22, 23);
console.log("x: "+ x);

//JSON object
let personA = {
    name: "John",
    email: "john.person@gmail.com"
};
console.log(personA);
console.log(personA.name);
console.log(personA['name'])

// ES6 class
class PersonB {
    constructor() {
        this.name = "";
        this.email = "";
    }
    fullName() {
        return this.name + " " + this.email;
    }
}
let personB = new PersonB();
personB.name = "Smith";
personB.email = "smith.personb@gmail.com"
console.log(personB)

// ES5 class
var personC = {
    firstName: "Alex",
    lastName: "Cook",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(personC.fullName())

//Loop
for(let i=0; i<10; i++){
    console.log(i);
}

var colors = ["red", "green", "blue"];
for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}

var personF = {name: "Paul", email:"this.email@email.com"};

for(let field in personF){
    console.log(field + " " + personF[field]);
}

let a = 5;
let b = 6;
if (a == b){
    console.log("a == b");
}
a = "Paul";
b = "Paul";

if (a === b){
    console.log("a = b");
}

a = 5;
b = 6;
c = a+b;
console.log(c);

c = a.toString() + b.toString();
console.log(c);

a = "5";
b = "6";
c = Number(a) + Number(b);
console.log(c);
