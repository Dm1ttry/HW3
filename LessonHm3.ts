//  Task 1 
let x: number = 20;
let y: number = 58;
let c: number = 42;
console.log(x + y + c);


// Task 2 
let age : number = 24;
let second : number = 60; 
let hour : number = 60;
let day : number = 24;
let year : number = 365;
let myAgeInSeconds: number = year * day * hour * second * age;
console.log(myAgeInSeconds);


// Task 3 
let count : any = 42;
let userName: string = '42';
console.log(String(count), Number(userName), count.toString( ), +userName);


// Task 4 
let a : number = 1;
let b : number = 2;
let c4 : string = "белых медведей";
console.log(String(a) + b + " " + c4)


// Task 5 
let word1 :string = "доступ";
let word2 :string = "морпех";
let word3 :string = "наледь";
let word4 :string = "попрек";
let word5 :string = "рубило";
let lengthWords :any = word1 + word2 + word3 + word4 + word5;
let count2 : number = 0;
for (count2 = 0; lengthWords[count2] ; count2++){
} 
lengthWords = count2;    
console.log(lengthWords);


// Task 6 
let variable1 : number = 20;
let variable2 : string = 'text';
let variable3 : boolean = true;
console.log( 'Variable:' , variable1 , ' have type: type ' , typeof(variable1))
console.log( 'Variable:' , variable2 , ' have type: type ' , typeof(variable2))
console.log( 'Variable:' , variable3 , ' have type: type ' , typeof(variable3))


// Task 7 
let type : number = 17;
let type2 : boolean = false;
let type3 : string = "true";
let type4 : null = null;
let type5 : undefined = undefined;
console.log(typeof(type), typeof(type2), typeof(type3), typeof(type4), typeof(type5));


// Task 8 
let heigh : number  = 15;
let width : number = 20;
if (heigh > width ){ 
    console.log(heigh);
} else{
    console.log(width);
}


// Task 9 
for (let integer = 1; integer <= 20; integer++) {
    if (integer % 3 === 0) {
        console.log(integer);
    }
}


// Task 10 
let key : boolean = true ;
let documents : boolean = true ;
let pen : boolean = true ;
let apple : boolean = false;
let orange : boolean = true;
let shouldGoToWork : boolean = false;
if (shouldGoToWork = (key && documents && pen) && apple || orange ) {
    if (shouldGoToWork  === true) {
        console.log(shouldGoToWork);
        }
}


 // Task 11 
let num : number = 5;
if (num % 5 === 0 && num % 3 === 0){
    console.log("FizBuz");
} else if (num % 3 === 0){
    console.log("Buz");
} else if (num % 5 === 0){
    console.log("Fiz");
} else{
    console.log("Null");
}


// Task 12 
let userage : number = 25;
if ( 18 >= userage && userage >= 16 ){
    console.log("Можешь выкурить сигаретку, только маме не говори");
} else if (userage > 18 ){
    console.log("Попей пивка");
} else if (userage < 16 ){
    console.log("Пей колу");
}


// Task 13 
let Directory : string = "юг";
switch (Directory){
    case "юг" :
        console.log("на юг пойдешь счастье найдешь");
        break;
    case "север":
        console.log("на север пойдешь много денег найдешь");
        break;
    case "запад":
        console.log("на запад пойдешь верного друга найдешь");
        break;
    case "восток":
        console.log("на восток пойдешь разработчиком станешь");
        break;
    default:
        console.log("Попробовать еще раз");
        break;
}


// ADVANCED level

// Task 1 
let num1 : number = 4;
let num2 : number = 3;
[num1,num2] = [num2,num1];
console.log(num1,num2);


// Task 2 
const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question("Введите число " , (NumberUser1 : number,) =>{
    rl.question("Cколько отнять от предыдущего результата? " , (NumberUser2 : number,) =>{
        rl.question("Cколько прибавить от предыдущего результата? " , (NumberUser3 : number,) =>{
            rl.question("Cколько умножить от предыдущего результата? " , (NumberUser4 : number,) =>{
                rl.question("Cколько разделить от предыдущего результата? " , (NumberUser5 : number,) =>{
                    let result : Number = ((((NumberUser1 - NumberUser2) + Number(NumberUser3)) * NumberUser4) / NumberUser5);
                    console.log("(((", NumberUser1 ," - ", NumberUser2, ") + ", NumberUser3, ") * " , NumberUser4, ") / " , NumberUser5 , " = ",   
                    String(result));
                    rl.close();
                });
            });
        });
    });
});

// Task 3 
let rows = 6;
let pyramid = '';
for (let i = 1; i <= rows; i++) {
    console.log( pyramid += '#');
}

