//document.getElementById("count").innerText = 5
//cmd+k+c --- to comment out multiple lines at once
//let m=1
//let n=2
//let a=n+m
//let b=n-m
//let c=n*m
//let d=n/m
//console.log(a)
//console.log(b)
//console.log(c)
//console.log(d)
//let bonus=50
//bonus=bonus+20
//console.log(bonus)
//bonus=bonus-45
//console.log(bonus)
//bonus=bonus+45
//console.log(bonus)

let count = 0
//count=6  we can change a variable like this when using let
let countEl= document.getElementById("count")//here count is called pass in argument
//The last line is using DOM(document object model--since the selected part is a model 
// of the html document) its aka how to use javascript to modify websites
console.log(countEl)
//let count=0  trying to access a variable before we even create it referencial error
function increment(){
    console.log("The button was clicked")
    count = count + 1
    countEl.innerText= count
    //countEl.innerText= countEl.innerText + 1;  this one treats the inner value as text
    //so instead of adding the numbers it just concatnates them
}
//xcept for functions called right here in javascript, 
//functions called in the html file return the value only on the browser 
//when we click on the button, inspect, console.
//functions are used to keep "dry" rule
//function output(){
//    console.log("42")
//}
//output()
let x=2
let y=3
let z=1
function output(){
    let w = x+y
    //let variables are block scoped, for example 
    // we cant use w outside this function
    console.log(w)
    console.log(x+y)
}
output()

//function incree(){
  //  count=count+1
    //console.log(count)
//}
//incree()
//incree()
//incree()

function save(){
    let saveEl= document.getElementById("save-el")
    let update= count + " - "
    //saveEl.innerText = saveEl.innerText + update
    saveEl.textContent = saveEl.innerText + update
    //inner text, mostly focuses on human readable 
    // texts so that sometimes or at smepoint of 
    // the return the space sround - may disapear or 
    // get ignored therefore instead of innerText use textContent
    console.log(count)
}
function set(){
    count = 0
    countEl.innerText = count
}
//the last function is used to set the count to 0 whever we hit save, 
// but we can also do this by just adding count=0 countEl.innerText=count or 0, 
// and it may be more convenient, but in this one u have earnt how to call multiple function in one
console.log
//anything in a quotation("") is a string
//escape! character(\) is used to indicate for js that the character that comes next to the \ is not considered as a string
let welcome_el=document.getElementById("welcomeEl")
let name="Edlawit"
let greeting="welcome back! "
welcome_el.innerText= greeting + name
welcome_el.innerText=welcome_el.innerText + "1"
welcome_el.innerText +="1"
console.log(name+greeting)
let mypoints=3
function add3points(){
    mypoints+=3
}
function remove1point(){
    mypoints-=1
}
add3points()
add3points()
add3points()
remove1point()
remove1point()
console.log(mypoints)



