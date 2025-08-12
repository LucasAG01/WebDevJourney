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

let firstNamee ="Lucas";
let favoriteFood = "sushi";
let eemail = "Hola@gmail.com"
/*

*/ 

//Boolean
let isStudent = false;
let online=true;
console.log(`Lucas`);

document.getElementById("p1").textContent = `Your name is ${firstNamee}`;
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
        document.getElementById("myH2").textContent = `Your name is ${username}`; 
    }
    else{
        document.getElementById("myH2").textContent = `You put nothing`; 
    }   
    //console.log(`${username}, datatype: ${typeof username}`);
}


/* Type Conversion */

//let age;

//age = Number(age); //convierte lo que le pongas a un numero

//age+1;


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
window.addEventListener("load",function(){
    radioInput ="";
})


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


/*Math Operator*/
//let a = 3.21;
//let b = 2;
//let c;

//c = Math.round(a);
//c = Math.floor(a);
//c = Math.ceil(a);
//c = Math.min(a, b, c);
//c = Math.max(a, b, c);
//c = Math.trunc(a);
//c = Math.pow(3,4); //3 elevado a 4
//c =Math.sqrt(81);
//c =Math.abs(a); //el positivo


/*Numeor aleatorio generator*/

let randomNum = Math.random(); //entre 0 y 1

//quiero un número entre 1 y 6
let random16 = Math.floor(Math.random() * 6) + 1;

//Quiero un numero aleatorio en un cierto rango
const min = 50;
const max = 100;
let random50 = Math.floor(Math.random() * (max -min)) + min;



/*Del 1 al 10 con los botones*/ 
const generatorBtn =document.getElementById("generatorNUM");
const RanNUMlabel =document.getElementById("RanNUMlabel");
const RanNUMlabel2 =document.getElementById("RanNUMlabel2");
const RanNUMlabel3 =document.getElementById("RanNUMlabel3");
const minimo = 1;
const maximo =10;


generatorBtn.addEventListener("click",function(){
let randomNUm10 = Math.floor((Math.random()*maximo))+minimo;
let randomNUm101 = Math.floor((Math.random()*maximo))+minimo;
let randomNUm102 = Math.floor((Math.random()*maximo))+minimo;
RanNUMlabel.textContent = randomNUm10;
RanNUMlabel2.textContent = randomNUm101;
RanNUMlabel3.textContent = randomNUm102;
});


/*NO SE IF*/ 
window.addEventListener("load",function(){
    myTextAge.value = "";
})

const myTextAge = document.getElementById("myTextAge");
const AgeVerBtn = document.getElementById("AgeVerBtn");
const resultAgeVerf = document.getElementById("resultAgeVerf");
let age;

AgeVerBtn.addEventListener("click",function(){
age = myTextAge.value;
age=Number(age);

if (age >=100){
resultAgeVerf.textContent= `Too old to enter`;
}
else if(age ==0){
resultAgeVerf.textContent= `Can't enter you were just born`;
}
else if(age >=18){
resultAgeVerf.textContent= `You are old enough to enter`;
}
else if(age < 0){
resultAgeVerf.textContent= `Your age can't be below 0`;
}
else{
resultAgeVerf.textContent= `You must be 18+ to enter this site`;
}  
//myTextAge.value =""; borra el contenido del  textbox
});


/*CheckBox*/

window.addEventListener('load', function() {
    MyCheckBox.checked = false;
    VisaBtn.checked = false;
    MasterCardBtn.checked = false;
    PayPalBtn.checked = false;
    submitResult.textContent = '';
    paymentResult.textContent = '';    
});

const MyCheckBox = document.getElementById("MyCheckBox");

const VisaBtn = document.getElementById("VisaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const SubmitSubBtn = document.getElementById("SubmitSubBtn");

const submitResult = document.getElementById("submitResult");
const paymentResult = document.getElementById("paymentResult");

SubmitSubBtn.addEventListener("click",function(){

    if(MyCheckBox.checked){
    submitResult.textContent = `You are subscribed !`;
    
    if(VisaBtn.checked){
    paymentResult.textContent = `You pay with Visa`;
    }
    else if(MasterCardBtn.checked){
    paymentResult.textContent = `You pay with MasterCard`;
    }
    else if(PayPalBtn.checked){
    paymentResult.textContent = `You pay with PayPal`;
    } 
    else{
        submitResult.textContent = `Select a payment method in order to subscribe`;
    }
    }
    else{
    submitResult.textContent = `You are NOT subscribed !`;
    }   
});

/*SWITCH*/

const inputDayWeek = document.getElementById("inputDayWeek");
const DayWeekBtn = document.getElementById("DayWeekBtn");
const DayWeekRes = document.getElementById("DayWeekRes");
let day;

DayWeekBtn.addEventListener("click",function(){
day = Number(inputDayWeek.value)

    switch(day){
    case 1:
        DayWeekRes.textContent="It is Monday";
        break;
    case 2:
        DayWeekRes.textContent="It is Tuesday";
        break;
    case 3:
        DayWeekRes.textContent="It is Wednesday";
        break;
    case 4:
        DayWeekRes.textContent="It is Thursday";
        break;
    case 5:
        DayWeekRes.textContent="It is Friday";
        break;
    case 6:
        DayWeekRes.textContent="It is Saturday";
        break;
    case 7:
        DayWeekRes.textContent="It is Sunday";
        break;
    default:
        DayWeekRes.textContent= "No se mano. Number between 1 and 7";
        break;
}
});

/*Strings*/

let nombreUser = "LucaS"

nombreUser.indexOf("A"); /*Donde aparece la primera A mayúscula*/ 
nombreUser.charAt(2) //Qué carácter hay en el index 2
nombreUser.length; //Largura de la cadena.
nombreUser.trim();//Quitar espacion en blanco
nombreUser.toUpperCase();
nombreUser.toLowerCase();
nombreUser.repeat(3); //Se repite 3 veces seguidas ese string
nombreUser.startsWith(" "); //boolean para ver si la ceda empiueza por un espacio blanco
nombreUser.endsWith("S");
nombreUser.includes(" "); //boolean de si incluye eso

let phoneNumber = "123-456-7890";
phoneNumber.replaceAll("-", "/");//reemplaza los - por /

phoneNumber = phoneNumber.padStart(15, "0"); //Quiero un string de 15 chars "," el comienzo del string  000123-456-7890
phoneNumber = phoneNumber.padEnd(15, "0"); //123-456-7890000
//console.log(phoneNumber)


/*String Slicing*/

const fullName = "Lucas AG01";

//let firstName = fullName.slice(0, 5);
//let lastName = fullName.slice(6, 10);
//último index exclusivo

//let firstChar = fullName.slice(0,1);
//let lastChar = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1); //el rpimer espacio + 1 para no incluirlo

//console.log(firstName);
//console.log(lastName);

const email = "hehe@gmail.com";

let emailUser = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
//console.log(emailUser)
//console.log(extension)


/*Method Chaining*/ 

//let nombreUsuario = window.prompt("Enter your username: ");
let nombreUsuario="";

/*Sin method chaining*/

nombreUsuario = nombreUsuario.trim(); //quitar espacios principio y final
let letter = nombreUsuario.charAt(0); //coge la prierma letra
letter = letter.toUpperCase(); //la pone en mayuscula

let extraChars = nombreUsuario.slice(1); // coge el resto de chars hasta el final
extraChars = extraChars.toLowerCase(); // los pone en minúscula

nombreUsuario = letter+extraChars; //junta las 2 cadenas

//console.log(nombreUsuario);


/* Con method chaining */ 

nombreUsuario = nombreUsuario.trim().charAt(0).toUpperCase() + nombreUsuario.trim().slice(1).toLowerCase();

//console.log(nombreUsuario);


/*Logical Operators*/ 








