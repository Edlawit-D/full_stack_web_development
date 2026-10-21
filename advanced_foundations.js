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
            //whether we write default or any other statement,the break key word is not needed sinceits the end of the condition
    }
    return `you selected ${item}. That will be $${price}`
}
console.log(selectItem("biscuits"))