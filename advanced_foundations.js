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