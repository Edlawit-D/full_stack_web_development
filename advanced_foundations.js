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
    price=0
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


//import export:named
//import export:default
