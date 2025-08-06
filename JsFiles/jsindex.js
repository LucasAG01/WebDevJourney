/*console.log("HOLA");
console.log("I like pizza!");

window.alert("Esto es una alerta");
window.alert("I like pizza");
*/

document.getElementById("myH1").textContent = "hello";
document.getElementById("myP").textContent = "I like pizza!";

/*
Variables
Es un contenedor que almacena un valor.
se comporta como si fuera el valor que contiene.

1. declaracion let x;
2. asignación x = 100;
*/ 
let x;
x = 100;

let age = 25;
let price = 10.99;
let gpa = 2.1;

let firstName ="Lucas";
let favoriteFood = "sushi";
let email = "Hola@gmail.com"
/*

*/ 

//Boolean
let isStudent = false;
let online=true;
console.log(`Lucas`);

document.getElementById("p1").textContent = `Your name is ${firstName}`;
document.getElementById("p2").textContent = `Your favourite food is ${favoriteFood}`;
document.getElementById("p3").textContent = `Is lucas online...: ${online}`;



//Operadores    
let students = 30;

//students = students + 1; 
//students = students - 1; 
//students = students * 2;
//students = students / 2;
//students = students ** 3; //elevado
//let extraStudents = students % 3; módulo

//students += 1;
//students -=1;
//students *=2;
//students **=2;
//students%=2; 
//módulo biene vien para determinar si un numeor es par o no

//students++;
//students--;


/*
precedencia de los operadores

1. paréntesis()
2. exponentes
3. multiplicacion & division & módulo
4. suma & resta

*/

let result = 1 + 2 * 3 + 4 ** 2 
// 1 + 2*3 + 16
// 1 + 6 + 16
// 7 + 16
// 23

console.log(result);










/*
console.log(typeof firstName);
console.log(`Your name is ${firstName}`); 
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);
/*
console.log(typeof age); //tipo de variable
console.log(`You are ${age} years old`);
console.log(`The price is ${price}€`);
console.log(`Your gpa is: ${gpa}`);
*/