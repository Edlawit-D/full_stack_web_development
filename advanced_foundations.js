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