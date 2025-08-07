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
//let x;
//x = 100;

//let age = 25;
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
//console.log(result);

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


/*Aceptar User Prompt*/
//Forma fácil, windwos promt
//let username;
//username = window.prompt("Whats your username"); 
//console.log(username);

//La forma buena con una htmlBox
let username;
let check;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    
    check=Boolean(username);
    
    if(check){
        document.getElementById("myH2").textContent = `Your name is ${firstName}`; 
    }
    else{
        document.getElementById("myH2").textContent = `You put nothing`; 
    }   
    //console.log(`${username}, datatype: ${typeof username}`);
}


/* Type Conversion */

let age;

age = Number(age); //convierte lo que le pongas a un numero

age+1;


//console.log(`${age}, datatype: ${typeof age}`);


let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); //NaN not a number
y = String(y);
z = Boolean(z); //Simpre que z tenga un valor, simepre sra true si esta vacio es false
//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z); 



/*COnstantes usando calculo de circunferencia*/

let pi= Math.PI; //3 digitos
//pero para otras cosas que si o ni nadie durante el rpograma pueda cambiar es asi
const PI = 3.14159;

//radious = window.prompt("Dame el radio del círculo: ");

//todo esto va dentro de function(){aqui}

document.getElementById("submitRadio").addEventListener("click",function(){
/*declaraciones de inputs y resultado*/     
const radioInput = document.getElementById("radioInput").value;
const resultadoElement = document.getElementById("Resultado");

if(radioInput.trim() === "" || isNaN(radioInput)){
    resultadoElement.textContent = "Debes ingresar campo válido, pista: numero";

}else{

    const radio = Number(radioInput);

    if(radioInput < 0){
        resultadoElement.textContent = "Debes ingresar numero mayor a 0";

    }else{
        const circunferencia = 2*pi*radio;

        resultadoElement.textContent = `La circunferencia es con radio ${radioInput} es: ${circunferencia.toFixed(4)} cm`;
    }
}
});



//radious=Number(radious);

//circunferencia = 2*pi*radious;
//console.log(circunferencia.toFixed(2));


/*CONTADOR*/ 

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.addEventListener("click",function(){  
    count++;
    countLabel.textContent = count;
})

resetBtn.addEventListener("click", function(){
    count = 0;
    countLabel.textContent = count;
})

decreaseBtn.addEventListener("click",function(){
    count--;
    countLabel.textContent = count;
})











