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


/*While Loop*/ 

let whileExpample;
/*
while (whileExpample ==="" || whileExpample === null) {
    whileExpample = window.prompt(`Enter your name`);
}
console.log(`HI ${whileExpample}`);

do{
    whileExpample = window.prompt(`Enter your name`);
}while (whileExpample ==="" || whileExpample === null) 
console.log(`HI ${whileExpample}`);
*/

//Luego está el do while, donde la condicion while pasa abajo, y en el do ponemos un código que se ejecutrá al menos
//1 vez, en esta condicion, podemos dejar el whileExample sin definir.

//Do the code first, and then, check the condition at the end.

let loggedIn = false;
let whileUser;
let whilePass;

/*Pensamos, cómo podríamos escapar del while loop.
while(!loggedIn){
    whileUser = window.prompt("Enter Username");
    whilePass = window.prompt("Enter Password");

    if(whileUser ==="myUsername" && whilePass === "myPassWord"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials Please try again");
    }
}

De esta forma, podemos poner que logged sea true, y aún así ejecute lo de dentro
do{
    whileUser = window.prompt("Enter Username");
    whilePass = window.prompt("Enter Password");

    if(whileUser ==="myUsername" && whilePass === "myPassWord"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials Please try again");
    }
}while(!loggedIn)
*/


/*For loop*/
//Contador para trackear iternaciones ; condición para continuar el loop ; aumentar/decrementar contador
/*
for (let index = 0; index <= 20; index++) {
    if (index == 13) {
        continue;
        con break; una vez que llega a 13 chapa (no se llega a ver)
    }
    console.log(index);
}
*/


/*
function esperar(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciarCuentaRegresiva() {
for (let i = 10; i >= 0; i--) {
    console.log(i);
    await esperar(1000); // Esperar 1 segundo
}
console.log("¡Cuenta regresiva finalizada!");
}

iniciarCuentaRegresiva();
*/


/*Adivina el número

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));
//Si temonos un numero minimo que no sea 1, debemos añadir un + minNUm al Math.foor()


let attemps = 0;
let guess;
let running = true; 

while(running){

    guess = window.prompt(`Guess a number entre ${minNum} - ${maxNum} :`)

    if(guess === null) {
        window.alert("Juego cancelado. ¡Hasta la próxima!");
        running = false;
        continue; // Salta al siguiente ciclo (que no ocurrirá porque running es false)
    }


    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Pon un número válido!")
    }
    else if (guess < minNum || guess > maxNum){
        window.alert("No te salgas del rango!");
    }
    else{
        attemps++;
        if(guess < answer){
                window.alert("Too low");
        }
        else if(guess > answer){
                window.alert("To high")
        }
        else{
            window.alert(`CORRECT! the answer was ${answer}. it took you ${attemps} attemps.`);
            running = false;
        }
    }  
}
*/


/*Funciones*/ 
function happyBirthday(felicitado, edad){
console.log(`Felicidades ${felicitado}`);
console.log(`Felicidades ${felicitado}`);
console.log(`Felicidades ${felicitado}, ahora tienes ${edad} años`);

}

function add(x, y){
    let result = x + y;     
    return result;
}

let aswerFun= add(2, 3);
//console.log(aswerFun);


/*temperature conversion*/ 
const TemperatureTxtbox = document.getElementById("TemperatureTxtbox");
const toFahreinheit = document.getElementById("toFahreinheit");
const toCelsius = document.getElementById("toCelsius");
const resultTemp = document.getElementById("resultTemp");
let temp;


function convert(){
    if(toFahreinheit.checked){
        temp =Number(TemperatureTxtbox.value);
        temp = temp * 9 / 5 + 32;
        resultTemp.textContent = temp.toFixed(1) + "ºF"
    }
    else if(toCelsius.checked){
        temp =Number(TemperatureTxtbox.value);
        temp = (temp-32)* (5/9);
        resultTemp.textContent = temp.toFixed(1) + "ºC"
    }
    else{
        resultTemp.textContent ="Selecciona unidad";
    }
}


/*Arrays*/

let fruitsS = ["apple", "orange", "banana"];

fruitsS[0] = "coconut" //cambia apple por coconut

fruitsS.push("pear");  //Empujar un elemnto al final

fruitsS.pop();  //borra el último elemnto

fruitsS.shift(); //eleimina el rpimer elemento

fruitsS.unshift("mango");  //añade elemnto al principio del array

let numOfFruits = fruitsS.length;

let index = fruitsS.indexOf("orange");

//loop por los elementos y mostrarlos

for (let index = 0; index < fruitsS.length; index++) {
    const element = fruitsS[index];   
    //console.log(element + ' posicon '+index)   
}

//SI fejo soloel fruist.legght, imporimira 4 espacios, pero se cuenta con 1 menos el length
for (let index = fruitsS.length - 1; index >= 0; index--) {
    const element = fruitsS[index];   
    //console.log(element + ' posicon '+index)   
}

//Esto es un shortcut para mostrar los elementos de un array
for(let fruit of fruitsS){
    //console.log(fruit)
}



/*Spread Operator ...*/

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximumNum = Math.max(...numbersArray);
let minimumNum = Math.min(...numbersArray);

//let nombreArrayEj ="Lucas AG";
//let lettersOp =[...nombreArrayEj].join("-")

let fruits = ["apple", "orange", "banana"];
let vegetables =["carrots", "celery", "potatoes"];


let foodsS = [...fruits, ...vegetables, "eggs", "milk"]; //copy y paste de 2 arrays

//console.log(foods);

/*Rest parameters*/

function openFridge(...foods){
    console.log(...foods); //Así las juento y las separo, las muestro separadas
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "sushi";

//openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);

//console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number
    }
    return result;
}

const total = sum(1, 3, 4);

//console.log(`Your total is $${total}`)

//average
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number
    }
    return result / numbers.length;
}

const totalAvg = getAverage(75, 60, 80, 50);

//console.log(`Your average score is ${totalAvg}`);


/*random password generator*/

function generatePassword(lenght, includeLowercase, includeUppercase,includeNumbers, includeSymbols){

    const lowercaseChars ="abcdefghijklmnñopqrstuvwxyz";
    const upercaseChars = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const numberChars ="0123456789";
    const symbolChars= "!#~$%&/()={}'`¡@º][*";

    let allowedChars = "";
    let password = "";

    // ? past
    //Si una de estas const es true, quiero que coja ese correspondiente set de chars y los 
    //concatene en el allowedChars string 

    // concatenamos las const y vemos si queremos o no , si es asi, que concatene, sino que use nada.
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? upercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(lenght <= 0){
        return `(Password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let index = 0 ; index < lenght; index++){
        const randomIndex = Math.floor(Math.random () * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers, 
                                includeSymbols);

console.log(`Generated password: ${password}`);                                


/*Callbacks*/ 


function hello(callback){
    //console.log("Hello!");
    callback(); //llama a la función callback que le pasamos como argumento
}

function goodbye(){
    //console.log("Goodbye!");
}

hello(goodbye); //pero hay que pasarlo como parámetro, por eso modificamos hello para que acepte un callback y lo llame dentro de su cuerpo.

//Se llaman las funciones hello y goodbye, y se ejecutan en ese orden., pero si por algun motivo hello tarda en ejecutarse,
//goodbye se ejecutará antes de que hello termine, por eso se usan los callbacks,

function leave(){
    //console.log("Leaving...");
}
hello(leave); //Ahora, cuando hello se ejecute, llamará a leave después de que se ejecute su código.


// 1. Definimos el callback
function displayResultado(result) {
    console.log(`The result is: ${result}`);
}

// 2. Definimos sum
function sumar(callback, a, b) {
    let result = a + b;
    callback(result); 
}

// 3. Llamamos correctamente a sum()
//sumar(displayResultado, 5, 3); 


//ejemplo en la web

function displayPage(result){
    document.getElementById("resultadCall").textContent = `The result is: ${result}`;
}

//sumar(displayPage, 5, 3); 



/*for each loop*/

let numbersForEach = [1, 2, 3, 4, 5];


numbersForEach.forEach(triple); // Ejecuta triple() en cada elemento
//numbersForEach.forEach(display) // Ejecuta display() en cada elemento


function triple(element, index, array){
    array[index] = element * 3; // Multiplica cada elemento por 3
}

// Función que solo muestra el elemento
function display(element){
    console.log(element); // Imprime el elemento
}

let frutitas = ["apple", "orange", "banana", "coconut"];

frutitas.forEach(capitalize);
//frutitas.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}



/*Maps*/
const chavales = ["lucas", "otro", "nose"]
const numbersMap =[1, 2, 3, 4, 5];

const numbersPow = numbersMap.map(square);
const chavalesSubidos =  chavales.map(arrayUpper)

//console.log(numbersPow)
//console.log(chavalesSubidos)

function square(element){
    return Math.pow(element, 2);
}
function arrayUpper(element){
    return element.toUpperCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

//console.log(formattedDates)

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

/*.filter()*/

let numersFilter =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersEvenFiltered = numersFilter.filter(isEven);

//console.log(numbersEvenFiltered)

//Cogera los valores true y los colocara en un nuevo array
function isEven(element){
    return element % 2 === 0;
}

/*Reduce*/

const grades = [15, 50, 65, 86, 90, 100, 99];
const maxmoGrade = grades.reduce(getMax);

//console.log(`La nota máxima es: ${maxmoGrade}`);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}


/*Function Expression*/

function Hello(){
    console.log("Hello");
}

//setTimeout(Hello, 3000); //setTimeout(callback, 3000); funcion, tiempo hasta  que la lance.

//En JS es posible pasar una funcion entera como un valor, esperara 3 segundos para hacer la suma

setTimeout(function(a, b){
    let result = a + b;   
},3000);

//Sumo todos lo valores de un array, no hay timeout, es al momento.
const totals = numbersArray.reduce(function(accumulator, element){
    return accumulator + element;
});

//console.log(totals);

/*Arrow functions*/

const helloO = (name, age) => {console.log(`Hola, eres ${name}`)
                            console.log(`Tienes ${age} años`)};

//helloO("lucas",23);

const Cuadrados = numbersArray.map((element) => Math.pow(element,2 ));




/*Objetos*/ 

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true, 
    sayHello: function(){console.log("Hi! I am Spongebob")},
    eat: function(){console.log("I am eating a krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false, 
    sayHello: () => console.log("Hey, Im Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
}


//person1.eat()
//person2.eat()


/*THIS*/ 

const person3 = {
    name: "kosko",
    favFood: "polo",
    sayHello: function(){console.log(`hi, im ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person4 = {
    name: "Pisco",
    favFood: "pipa",
    sayHello: function(){console.log(`hi, im ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
    //Las arrow functions no funcionan, que siguen haciendo referencia al objeto ventana.
}


/*Constructores*/ 

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.colo = color,
    this.drive  =function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("chrevolet","Camaro",1990,"yellow");
const car2 = new Car("ferrari","Roma",2025,"red");
const car3 = new Car("Dodge","Charger",2026,"black");

//car2.drive(); // You drive the Roma


/*Classes*/

class Products{
    constructor(name, price){
        this.name = name,
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: €${this.price.toFixed(2)}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }

}

const IVA = 0.21;

const product1 = new Products("Shirt",29.99);
const product2 = new Products("Pants",19);
const product3 = new Products("Underwear",100);

//product1.displayProduct();
//product2.displayProduct();
//product3.displayProduct();

const totalTaxed = product2.calculateTotal(IVA);
//console.log(`Total price (with IVA): €${totalTaxed.toFixed(2)}`)


/*Static keyword*/ 

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius
    }

}

//console.log(MathUtil.PI);
//console.log(MathUtil.getDiameter(10));
//console.log(MathUtil.getCircumference(10));
//console.log(MathUtil.getArea(10));

class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }


    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
}

const user1 = new User("Spongebob");

//console.log(user1.username); //Spongebob

//console.log(user1.userCount); //undefined ya que es static

//console.log(User.userCount); //1 como es static, tenemos que acceder desde el nombre de la clase, no objeto

//user1.sayHello()

//User.getUserCount();



/*inheritance + intro SUPER*/


class AnimalS{
    constructor(){
    this.alive = true;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}


class RabbitS extends AnimalS{
    constructor(){  
        super();
    this.name = "rabbit";
}
    run(){
        console.log(`this ${this.name} is running`);
    }
}

class FishS extends AnimalS{
    constructor(){
        super();
    this.name = "Fish";
    }
    swim(){
        console.log(`this ${this.name} is swiming`);
    }
}

class HawkS extends AnimalS{
    constructor(){
        super();
    this.name = "Hawk";
    }

    fly(){
        console.log(`this ${this.name} is flying`);
    }
}


const rabbit1 = new RabbitS();
const fish1 = new FishS();
const hawk1 = new HawkS();

//rabbit1.eat();
//fish1.sleep();
//console.log(rabbit1.alive);
//rabbit1.run()
//hawk1.fly()


/*Super*/ 

class Animal{

    constructor(name, age) {
        this.name = name,
        this.age = age     
    }

    move(speed){ // función clase PArent
        console.log(`The ${this.name} moves at speed of ${speed} kmh`);
    }
}

class Dog extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed
    }

    run(){
        console.log(`${this.name} is running`);
        super.move(this.runSpeed); //extension de función clase PArent
    }

}

class Shark extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`${this.name} is swiming`);
        super.move(this.swimSpeed);
    }

}

class Loro extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed
    }

    fly(){
        console.log(`${this.name} is flying`);
        super.move(this.flySpeed); 
    }

}

const loro1 = new Loro("PICO", 5,15);
const shark1 = new Shark("Jaws", 13, 90);
const dog1 = new Dog("Nago", 12, 25);
/*
console.log(loro1.age);
console.log(dog1.name);
loro1.fly()
shark1.swim();
dog1.run();
*/



/*Getter & Setter*/

class Rectangle{

    constructor(width, heigth){
        this.width = width;
        this.heigth = heigth
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error("Width must be a positive number")
        }
    }

    set heigth(newHeigth){
        if(newHeigth > 0){
            this._heigth = newHeigth
        }
        else{
            console.error("Heigth must be a positive number")
        }
    }

    /*
    Ya están settedas pero cuando las lanzamos por la consola, aparecen undefined aunque pongoiamos el valor correcto,
    ahora hay que recogerlos para poder asignarlos con los getter
    */
    
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get heigth(){
        return `${this._heigth.toFixed(1)}cm`;
    }

    //tambien podemos acceder a otras funciones sin que sean una propiedad que exista en el cosntructor.

    get area(){
        return `${(this._width * this._heigth).toFixed(1)}cm^2`;
    }

}

const rectangle1 = new Rectangle(3, 4);

class PersonS{
    constructor(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName 
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }


    set age(newAge){
        if(typeof newAge ==="number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.log("Age must be a non-negative number")
        }
    }

    /*
    Ya están settedas pero cuando las lanzamos por la consola, aparecen undefined aunque pongoiamos el valor correcto,
    ahora hay que recogerlos para poder asignarlos con los getter
    */

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    //tambien podemos acceder a otras funciones sin que sean una propiedad que exista en el cosntructor.
    get fullName(){
        return `${this._firstName} ${this._lastName}`
    }
}


const person5 = new PersonS("Kosko","keko",23);
/*
console.log(person5.firstName)
console.log(person5.lastName)
console.log(person5.age)
console.log(person5.fullName)
*/


/*Objetos anidados Nested*/ 

const person6 ={
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    addres: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}
/*
console.log(person6.fullName);
console.log(person6.age);
console.log(person6.hobbies[0]);
console.log(person6.addres.city)
*/

/*Recorrer el addres array
for(const property in person6.addres){
    console.log(person6.addres[property])
}
*/



class Person{
    
    constructor(name, age, ...address){
        this.name = name,
        this.age = age,
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street,
        this.city = city,
        this.country = country
    }
}


const person7 = new Person("SpongeBob", 30, "124 Conch St.",
                            "Bikini Bottom",
                            "Int. Waters");

const person8 = new Person("Patrick", 37, "128 Conch St.",
                            "Bikini Bottom",
                            "Int. Waters");                           

const person9 = new Person("Squidward", 47, "126 Conch St.",
                            "Bikini Bottom",
                            "Int. Waters");

//console.log(person8.address.street);




/*Arrays de objetos*/ 

const froitas = [{name:"apple", color: "red", calories: 95},
                {name:"orange", color: "orange", calories: 45}, 
                {name:"banana", color: "yellow", calories: 105}, 
                {name:"coconut", color: "white", calories: 159}, 
                {name:"pineapple", color: "yellow", calories: 37}];

froitas.push({name: "grapes", color:"purple", calories: 62})
//froitas.pop(); //borra el último
//froitas.forEach(fruit =>console.log(fruit)); //recorre y muestra, podemos especificar el que all the

const fruitNames =  froitas.map(fruit => fruit.name);
const fruitColors = froitas.map(fruit =>fruit.color);

//nuevo array con lo especificado
const yellowFruits = froitas.filter(fruit => fruit.color === "yellow");
//console.log(yellowFruits);

//reduce
const maxFruit = froitas.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);

//console.log(maxFruit);


/*Sorting*/ 

let sortingArray = [1, 23 ,4 , 2, 8, 5, 7]
sortingArray.sort((a, b) => a - b); // b - a es orden inverso 

//console.log(sortingArray);

//priedades diferntes en objetos 
froitas.sort((a, b) => a.calories - b.calories);

//obejto con string 
froitas.sort((a, b) => a.name.localeCompare(b.name));

//console.log(froitas)


/* Shuffle an Array */

const cards =['A',2, 3, 4, 5, 6,7 ,8 ,9 ,10, 'J', 'Q', 'K'];

shuffle(cards);

//console.log(cards);

//Fisher-Yates algorithm
/*
Pasos del algoritmo:

    1. Empezar desde el último elemento y avanzar hacia el primero

    2. Seleccionar un índice aleatorio entre 0 y el índice actual

    3. Intercambiar el elemento actual con el elemento en la posición aleatoria
*/

function shuffle(array){
    //Comienza desde el último elemento hacia el primero
    for(let index = array.length - 1; index > 0; index--){  

        //Elige un índice aleatorio entre 0 e index (inclusive)      
        const random = Math.floor(Math.random() * (index + 1));

        // Intercambia los elementos
        [array[index], array[random]] = [array[random], array[index]]; //swapping
    }
}


/* Date */

const date = new Date();

const year = date.getFullYear();

const month = date.getMonth();

const dayDate = date.getDate();

const hour = date.getHours();

const dayOfWeek = date.getDay();

date.setFullYear(2026);
date.setMonth(8);
date.setDate(22);
date.setHours(19);
date.setMinutes(58)

//console.log(date)

const date1 = new Date("2024-12-31");
const date2 = new Date("2025-12-31");

if(date2 > date1){
    //console.log("Happy new Year");
}


/* closure */ 
/*
En la funcion interior, puede acceder a declñaraciones y llamamientos creados en el exteiorior,
pero, la exterior no puede acceder a cosas de la inteiori, para poder hacerlo hay que llamar a la inteiroi en le nivel de la exterior 
si creo una variable mensaje en el exteriori para modificar el mensage, no lo hace, es más, aparece como una diferente, es decir, que las del interior de outer

aparecen como variables privadas, es decir, como de otra dimensión.
*/

function outer(){

    let message = "hello"
    function inner(){
        //console.log(message);
    }

    inner();  
}

outer();

function createCOunter(){

    let count  = 0;

    function incremmet(){   
        count++;
        //console.log(`El contador ha sido llamdo ${count} vecdes`);
    }

    function getCount(){
        return count;
    }


    return {incremmet, getCount} //Esta retornando un objeto con la funcion
}

const counter = createCOunter();
//counter.incremmet();
//counter.incremmet();
//counter.incremmet();
//console.log(`The current count is ${counter.getCount()}`)

//de esta forma, aunque crees una variable counter y pongas un numero raro, dira que no hay un counter declarado


/*
function incremmet(){
    let count  = 0;
    count++;
    console.log(`El contador ha sido llamdo ${count} vecdes`);
}
incremmet()
incremmet()

    aunque spamee increment, el constador simepre se resetea y se queda en 1, pero con las enclosure, podemos crear un estado de mantenimiento 
 */


function createGame(){
    
    let score = 0;

    function increaseScore(points){
        score+= points;
        //console.log(`+${points} pts`);
    }

    function decreaseScore(points){
        score-= points;
        //console.log(`+${points} pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

    //Básicamente, he creado un ciontador, epro se podía modificar en el codigo, así que al meterlo dentro de una funcion gigante
    //y hacer que devulva en objeto, las function creadas, ya nadie peude tocar en la puntuacion 
    //Tdos los metodos llamados, tien que tener preciedidod el objeto asociado a la megafunción.

    const game = createGame();

    game.increaseScore(5);
    game.increaseScore(6)
    game.decreaseScore(3);
    

   // console.log(`The final score is ${game.getScore()}`);



   /*setTimeout()*/
   
    let timeOutId;

   function startTimer(){
    timeOutId = setTimeout(() => window.alert("hello"), 3000);
   }

   function clearTimer(){
    clearTimeout(timeOutId);
   }


   /* CLOCK */
   
   function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0); //tostring y pad es para que haya 2 cifras
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;
   }


   updateClock();
   setInterval(updateClock,1000);

   
    /* StopWatch */ 


    const display1 = document.getElementById("display");
    let timer = null; // guarda el valor de intervalo
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function StartWatch(){

        if(!isRunning){
            startTime = Date.now() - elapsedTime;
            timer = setInterval(UpdateDisplay, 10);
            isRunning = true;
        }

    }

    function StopWatch(){

        if(isRunning){
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
    }

    function ResetWatch(){

   clearInterval(timer);
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    display1.textContent = "00:00:00";
    }

    function UpdateDisplay(){
       
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        display1.textContent = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${milliseconds.toString().padStart(2, 0)}`;
    }

   