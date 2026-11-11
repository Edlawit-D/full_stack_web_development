//ternary operation = if/else statement
const exerciseTime=140
let message = ''
exerciseTime < 30 ? message='you need to try harder' : message='Doing Good'
console.log(message)

message=exerciseTime < 30 ? message='you need to try harder' : message='Doing Good'
console.log(message)

exerciseTime < 30 ? console.log('you need to try harder') : console.log('Doing Good')


//ternary operation for complex conditionals, when there is else if statement
exerciseTime < 30 ? message='you need to try harder' : 
    exerciseTime<60 ? message='u are doing good' : 
    message='Execellent!'
//we can make it look easy by breaking it into lines, for more complex ones its better to use if/else cause it would make it even more easier
console.log(message)



//switch statements-used when there is multiple possible code blocks we want to execute, it makes the code neater and more redeable than if/else statements

function selectItem(item){
    let price=0
    switch(item){
        //item === coffee(strict equallity)
        case "coffee":
            price=2
            break
        case "sandwiches":
            price=5
            break
        case "salad":
            price=4
            break
        case "Lemoncake":
            price=3
            break
        default:
            return `Sorry, we don't sell ${item}`
            //whether we write default or any other statement,the break key word is not needed since its the end of the condition
            //default statement mainly occur at the end but it is not necessary for it to be there
    }
    return `you selected ${item}. That will be $${price}`
}
console.log(selectItem("biscuits"))



//object destructuring- enables to extract properties from objects into distinct variables
//hard coding to access the properties in the object would be really hard specially if the properties are many also it violates DRY rule
let destination=""
let activity=""
let accomodation=""
let companion=""
const dreamHoliday={
    destination: "Austin, Texas",
    activity: "visit the Tesla HQ",
    accomodation: "luxury ranch",
    companion:"Elon Musk"
}

//if hard coded;
//const destination=dreamHoliday.destination
//const activity=dreamHoliday.activity
//const accomodation=dreamHoliday.accomodation
//const companion=dreamHoliday.companion

const properties={destination, activity, accomodation, companion} = dreamHoliday//this one is with object destructuring
console.log(`I would like to go to ${destination} to ${activity}. I'd sleep in a ${accomodation} and hang out with ${companion} all day.`)


//set time out with params- I think its like setting a time after which a code will run 
 function logAnswer(answer, point){
    console.log(`The answer is ${answer} of the course! If you got it right, give ur self ${point}.`)
 }
console.log("what is the capital city of peru?")
const questionTimer=setTimeout(logAnswer, 3000 , "Lima", "10")//the function we want to run is mandatory to pass in, then there is the time set up which is optional and its default value is 0, the time is passed in micro seconds.after it there will be the arguments that the function requires(it can be one or multiple).
//when we run first the question which is "what is the capital city of peru?" occur then after 3000 microseconds or 3 second the answer (the set time out statement)  

//we can interupt this using;
//const stopButton=document.getElementById("stopSetTimer")
//stopButton.addEventListener('click',function(){
//    clearTimeout(questionTimer)//to indicate which setTimer we want to terminate we entered the argument questionTimer. clearTimeout function
//    console.log("cancelling...")
//})


//the event loop
setTimeout(function(){
    console.log("hi")
}, 5000)
console.log("hello")//this will be logged before hi sice there is a timer

//setTimeout VS setInterval---setTimeout- after how much time should a certain program run, setInterval-the set of interval in which the code will rerun like if it is 5000seconds, the program will run every 5000 seconds, and setTimeout is when we want a certain line or part of code to run after certain time passed after the whole file started running

//import export:named- is used when we want to import a data from another file
import {data} from './datas.js' //or else we can do import{data as info} fron './data.js' and use info whenever we want to refer it
console.log(data)

//import export:default

import selectItems from './datas.js'//we can use any name we want since it is default export, but to avoid complexity and ambiguity its better to use same name in all files
console.log(selectItems(data, 32))

//constructors- gives an object(inbuit-predetermines formats(date, error and otherobjects for each of the datatypes) and all of which has an upper case first letter, custom-design them by our selves for our own purpose)

//the date() constructor- it is used to create a new date object with the current date and time, we can also use it to create a date object with a specific date and time
const currentDate= new Date()
console.log(currentDate.toString())//having toString() change it from object into string. it makes it more human readable and the time(clock) will be correct when we do it
console.log(currentDate.valueOf())//having valueOf() change it from object into number. it makes it more machine readable and the time(clock) will be correct when we do it
console.log(currentDate.getFullYear())//gives the year only
console.log(`Copyright ${currentDate.getFullYear().toString()} all rights reserved`)//tis is the text we see at the end of most websites
//there are packages like luxon used in determining date in js, for luxon, install it with npm install luxon and then import it to the fileand then we can use it with the different ethods it has

//error constructor
const errors=new Error('error occured')//this is how we create an error object, it is used to create a new error object with a specific message
console.log(errors.message)

function checkUserName(username){
    if (username){
        console.log(username)
    }
    else{
        console.log(new Error('no username entered please enter a username'))
        throw new Error('username not entered!')
        //console.log("this will not be logged")//this line will not be logged because the keyword "throw" prevents anyline after it fro being excuted, it is used to throw an error and stop the execution of the code
    }
}
try {
    checkUserName()
}
catch(err){
    console.log(err.message)
}
//the try/catch error makes the not stop running after the throw keyword cause thats what the throw keyword do instead it makes the code work smoothly even after the throw keyword
//the try/catch statement is used to handle errors in js, it is used to try a block of code and catch any errors that occur in that block of code, it is used to prevent the code from crashing when an error occurs, it is used to handle errors gracefully and provide feedback to the user

//constructors for common data types, which are all built in js, they are used to create new objects with a specific data type, they are used to create new objects with a specific format, they are used to create new objects with a specific behavior, they are used to create new objects with a specific properties and methods
//they are rarely used except for some methods that Object() gives
String()
const str1=new String("hello")
const str2=new String("hello")
console.log(typeof(str2))//object
console.log(typeof(str1+str2))//string- the +changes the elements in the object into string which is their premitive value and then concatenate them
const str3=new String(str1+str2)//to have their sum in an object
console.log(str3)
Number()
Array()
Object()
const obj=new Object() //or else more frequently we use const obj={}
obj.name="jane"
obj.age=25
console.log(obj)
Boolean()

//pre-increment
let currentTicketNumber=0
function getNextTicketNumber(){
    //return currentTicketNumber++ +1//since ticket numbers starting from 0 are nor logical we have added a plus 1 to the end, or else we can do at the variable definition let currentTicketNumber=1
    return ++currentTicketNumber //this is what is called preincrement and it basiclly means that the value of the element incremented before it is being used 
//pre-decremnts would also work and they are like --currentTicketNumber
}
console.log(`Guest 1, your ticket number is ${getNextTicketNumber()}`)

//numeric separators
console.log(9_999_999_999_999_008)//for us to make it clear to undrstand and read we use numeric separatpors in here, this number right here is also the biggest number that can be displayed with correct precision(as an exact number),
//if we want numbers even bigger that this, we use bigInt
console.log(9_999_999_999_999_008_098n)//we can make a number big int like this, o else like the one below 
console.log(BigInt(9_999_999_999_999_008_098))//BigInt is a constructor unlike other constructors, we dont use the keyword new when declaring a value
console.log(9_999_999_999_999_008_098n+1n)//we can do arithmetic operations with bigInt but we cannot mix it with normal numbers, we have to convert them into bigInt first before we can do any arithmetic operation with them
//since operations within big int and normal numbers is not allowed bigint is mostly used for contexts requiring precise handling of large integers like cryptography and databases that use large numbers for identification


//Hoisting
console.log(getNews())

function getNews(){
    return "A swimming pool has opened in the town center ..."
}//although this function declared after its envoked, it will be moved to the top (which is before its invoked) so that it can run perfectly, thisis called hoisting  
//Hoisting also works for variables
//console.log(small)//log out "can not access 'small' before initialization" error for const and let=thats becasue the variable exists at temporal dead zone-like few minutes of the early morning where we know who we are but we cant fully function, js knows that its is declared because it is hoisted but it can not access its value if it is not initialized or given value before trying to use, for var its more forgivving that it will just log "undefined" and the other part of the code will just get excuted, It is not the same as when an variable was not declared yet, cause the variables is already declared and js is aware of it but it can not access the value
//const small
//console.log(small)
//small="very small"
//it can also be like the above 3 lines
const small="very small"//at line (this line-5) there is a line logging small out before it is declared which will return "can not access small before initialization" error which means that the js knows its declared even if its declared later but it cant access it 



//arrow functions-ultra concise type of function()
function speedWarning(speed){
    return `you are going at ${speed} mph!`
}
console.log(speedWarning(100))

//the above function can be written more consisely using arrow function

const speeding= (speed) => {
    return `you are going at ${speed} mph!`
}
console.log(speeding(200))

// the last one can alos be written as below which is way more concise
const speedingg= speed => `you are going at ${speed} mph!`
console.log(speedingg(300))

//at the above we dont have brackets for the parameter, but when we have 0, 2 or more paraameters we should have one
const speedinggg= (name,speed) => `Hey ${name} you are going at ${speed} mph!`
console.log(speedinggg("edl", 400))

//also ther are no {} there but when we want to add some complex logic to our function we need to have  {} and also "return" keyword
const speedingggg= speed => {
    if (speed>40){
        return `you are going at ${speed} mph!`
    }
}
console.log(speedingggg(100))


const speedinggggg= (speedLimit, driverSpeed) => {
    if (driverSpeed>speedLimit){
        return `you are going at ${driverSpeed} mph! which is greater than the speed limit (${speedLimit})`
    }
}
console.log(speedinggggg(30,40))


const distanceTraveledMiles = [267, 345, 234,190, 299]
const distanceTraveledinkm = distanceTraveledMiles.map(function(distance){
    return Math.round(distance*1.6)
})
console.log(distanceTraveledinkm)

//the above function can be done as follows:
const distanceTraveledKm = distanceTraveledMiles.map( distance => Math.round(distance*1.6))
console.log(distanceTraveledKm)



//reduce() method
const itemsBoughtArr=[
    {
        item:"banana",
        price:10
    },
    {
        item:"apple",
        price:20
    },
    {
        item:"pineapple",
        price:30
    },
    {
        item:"watemellon",
        price:40
    }
]

function calculateTotalPrice(itemsBoughtArr,discount){
    const total=itemsBoughtArr.reduce((total, currentItem) =>//total is the value gained from previous iterations and currentItem refers to the value we are entering into
        total+currentItem.price, 0//0 is the initial value for current item
)
return  total-discount}
console.log(calculateTotalPrice(itemsBoughtArr,10))


//what happens to a parameter that we have used on our logic but we didnt give the value of it when calling the function, for example what if we dont give the value for discount when calling the function calculateTotalPrice, it will say NaN or null which is not right
function calculateTotalPrices(itemsBoughtArr,discount,tax = 0){//we can also use default params as we did to the third parameter which is tax or else we can use the following logic, default params are used only when there is no value entered, default params can be used for default numbers, strings, arrays, functions...
    if(!discount){
        discount=0
    }
    const total=itemsBoughtArr.reduce((total, currentItem) =>//total is the value gained from previous iterations and currentItem refers to the value we are entering into
        total+currentItem.price, 0//0 is the initial value for current item
)
return  total-discount+(total*tax)}
console.log(calculateTotalPrices(itemsBoughtArr))

//the rest parameter-way of catching the rest of the parameters-if there is the same thing we want to happen to the rest of the arguments in a method
function setPermissionLevel(permissionLevel, name1,name2){
    console.log(`${name1} has get ${permissionLevel}`)
    console.log(`${name2} has get ${permissionLevel}`)
}
setPermissionLevel("admin","abebe","kebede")
//here we want the same thing happen to name1 and name 2 but we hard coded them which is a bad habit and would throw a messs to our code specially if we want the same thing happen for multiple more objects, insteed using the rest parameters would do the work in much less easy and clear way

function setPermissionLevels(permissionLevel,...names){//the ...names parameter can only be at the end cause it refers to the other remaining parameters(other wise there will be"rest parameter must be last formal parameter" error text), also there can only one rest parameter in a method
    console.log(names)//an array of the the names we have entered as arguments will show up, thats why we hae used forEach() method right here
    names.forEach((name) => (
         console.log(`${name} has got ${permissionLevel} permission.` )   

    ))
}
setPermissionLevels("admin","abebe","kebede")

//the rest parameter challenge at restParamterChallenge.html,restParamterChallenge.css and restParamterChallenge.js 


//callback functions-functions that are called inside other functions, we use them in array functions(map(), forEach(), reduce()), asyncronious method(setTimeout(), setInterval()),event listeners and also we can cretae outr own functions that use callback functions
function notifyUser(userNotification){
    userNotification()
}
const emailUserNotification=()=>{
    console.log("your email has received!")
}
const txtUserNotification=()=>{
    console.log("your text has received!")
}
notifyUser(emailUserNotification)
notifyUser(txtUserNotification)
//here the two methods emailUserNotification and txtUserNotification are call back functions

