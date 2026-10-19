let messages=["hey", "I am great", "All good"]
let newMessage="Same here"
messages.push(newMessage)
console.log(messages)
messages.pop()//opposite of push since it is rmoving the last item while push is addding an item at last
console.log(messages)
//      start     condition   step size
for(let count=10 ; count<21 ; count++){//count is only defined inside the for loop, so I can use it anytime I want again
    console.log(count)
}
for (let i = 0; i<messages.length; i++){
    console.log(messages[i]);
} 
let random = Math.random()//Math.random return a random number between 0 and 1(not including 1)
console.log(random)
let rand = Math.random()*6//Math.random return a random number between 0 and 6(not including 6)
console.log(rand)
let ran= Math.floor(-3.4567)//usually used in positive numbers but it just returns the greatest number lessthan or equal to the given value
console.log(ran)
function randomnumber(){
    let ra= Math.floor(Math.random()*6)+1
    return(ra)
}
//it doesnt matter if we redefine a variabe outside a function where it was first defined
let ra=randomnumber()
console.log(ra)
console.log(randomnumber())

let hasSolvedChallenge = false
let hasHintsLeft = false
if (hasSolvedChallenge == false && hasHintsLeft == false){
    showSolution()
}
//and===&& or===||
function showSolution(){
    console.log("show solution ......")
}

//objects
let course={
    title: "learn css",
    lessons: 16,
    creater: "edlawit",
    length:63,
    level:2,
    isFree:true,
    tags:["html","css"],
    methods: function(){
        console.log("hello")
    }//methods- functions in objects,how to call is at line 55
}
//we can access the values through
console.log(course.length)
console.log(course["length"])
course.methods()//here is how to invoke or call functions in objects or methods
//comparison operators: ==,===,<, <=, >,>=...
//logical operators: and, or
let person={
    name:"Edlawit",
    age:20,
    country:"Ethiopia"
}
function logdata(){
    console.log(person.name+ " is "+person.age+" year old and lives in "+person.country+".")
}
logdata()
let age=6
if (age<6){
    console.log("free")
}
else if (age>=6 && age<=17){
    console.log("child discount")
}
else if (age>=18 && age<=26){
    console.log("student discount")
}
else if (age>=27 && age<=66){
    console.log("full price")
}
else{
    console.log("senior citizen discount")
}
let largeCountries=["Tuvalu","India", "USA","Indonesia","Monaco"]
console.log("The 5 largest countries in the world: ")
for(let i=0; i<largeCountries.length; i++){
    console.log("-"+ largeCountries[i])
}
largeCountries.pop()
largeCountries.push("pakistan")
largeCountries.shift()//it is like pop() but at the first part of the array
largeCountries.unshift("china")//it is like push() but at the first part of the array
console.log(largeCountries)

let dayOfMonth= 13
let weekday="friday"
if(weekday==="monday" && dayOfMonth===13){
    console.log("happy!!!!")
}
let hands=["rock","paper","scissor"]
function handgame(){
    let index=Math.floor(Math.random()*2)
    console.log(hands[index])
}
handgame()



let stageEl=document.getElementById("stage")
let fighters=["🧟‍♀️","🧜🏻","🐶","🐸","🐒","🐬","🦑","🐘","🐈‍⬛","🦍","🦣","🦒","🦧","🐕","🦩","🦦","🐉","🐲","🐿","🦔","🐁","🤷‍♀️","👻","😾","🐨","🐻‍❄️","🫎","🐴","🐌","🪰","🪱","🪳","🦟","🐍","🐢","🦂","🕸","🦕","🦖","🦗","🦓","🐆","🐅","🐊","🦭","🦏","🐪","🐫","🦃","🐓","🕊","🦜","🦚","🐕‍🦺","🐃","🦬","🐠","🐏","🧟‍♀️","🧜🏻","🐶","🐸","🐒","🐬","🦑","🐘","🐈‍⬛","🦍","🦣","🦒","🦧","🐕","🦩","🦦","🐉","🐲","🐿","🦔","🐁","🤷‍♀️","👻","😾","🐨","🐻‍❄️","🫎","🐴","🐌","🪰","🪱","🪳","🦟","🐍","🐢","🦂","🕸","🦕","🦖","🦗","🦓","🐆","🐅","🐊","🦭","🦏","🐪","🐫","🦃","🐓","🕊","🦜","🦚","🐕‍🦺","🐃","🦬","🐠","🐏"]
function pickfighter() {
    let i=Math.floor(Math.random()*(fighters.length))//since the range do not include the last number by default we can take the length of the array as the boundary even if its out of index  
    let j=Math.floor(Math.random()*(fighters.length))
    stageEl.textContent= fighters[i] + " vs " + fighters[j]
}

let appleEl=document.getElementById("apple")
let orangeEl=document.getElementById("orange")
let bananaEl=document.getElementById("banana")
let fruits=["🍎","🍊","🍌","🍎","🍊","🍌","🍊","🍎","🍊","🍌","🍎","🍌"]
function sortFruit(){
    for(let i=0; i<fruits.length; i++){
        if(fruits[i]==="🍎"){
            appleEl.textContent +=fruits[i]
        }
        else if(fruits[i]==="🍊"){
            orangeEl.textContent +=fruits[i]
        }
        if(fruits[i]==="🍌"){
            bananaEl.textContent +=fruits[i]
        }
    }
}
sortFruit()


//use const whenever w can cause it provides strictness to our code
//this is how we can declare a value with whatever tag we want. below, u can see that we just created a button just from a div 
let buyEl=document.getElementById("buy")
buyEl.innerHTML="<button onclick='render()'>"+"buy!" + "</button>"//since there is "" at the end of button tag, we should use '' for the function render()


function render(){
    buyEl.innerHTML += "<p>thank u for buying!</p>"
}

let array=[1,2,3]
let ulEl=document.getElementById("ul-el")
for(let i=0; i<array.length; i++){
    //ulEl.innerHTML +="<li>"+array[i] +"</li>"
    //first we created element
    //we assigned the value inside or we set the text content
    //stored it to ulEl
    const li=document.createElement("li")//here in the bracket we enter the type of the element we want to create, here we want a list but if we wanted a button, it would be ("button") instead
    li.textContent=array[i]
    ulEl.append(li)//we can use this method as well but ulEl.innerHTML +="<li>"+array[i] +"</li>" is more prefferable for its clarity
    //here we used append because append means to add something at the end of a document
}
//or we can do like this

let listItem=""
for(let i=0; i<array.length; i++){
    listItem += "<li>"+array[i]+"</li>"
}
ulEl.innerHTML=listItem//at first listItems will just store the <li> as a string added to the values as well but when we apply inerHTML to the ulEl, they will be displayed as lists
//here we dont get the value of ulEl displayed twice because its pointing to the 
// same point(element) on the html so when we reassign it using the first and then the second method, 
// it will just have the value reassigned at the second method which is the same as the value that was 
// assigned at the fist, u can check it by commenting out the other when working with the other
//we use this method because manipulatiing a DOM comes with a cost so having it in a for loop and manipulating it multiple times is risky, instead its better to have it outside and manipulate it just once


//instead of running every line of the list each time when a new item is added we can use this one instead
let neww=""
let array2=[]
let list=document.createElement("li")
let element=document.getElementById("input")
let saveEl=document.getElementById("save")
let ulel=document.getElementById("ul-El")
saveEl.addEventListener("click", function(){
    array2.push(element.value)
    neww="<li>"+array2.pop()+"</li>"
    ulel.innerHTML+=neww
    element.value=""
})
//if there is no refreshment on the page there is 
// no need to store all in an array and use for loop 
// to go through them, instead we should just add the last one entered in the input, the above is the way to do that


//temlate string/literal
const recipient="James"

const email1="Hey! "+ recipient + " How is it going? Cheers Edl" //this one into:
const email2 =`Hey!  ${recipient}  How is it going? Cheers Edl`//having ` around a line changes all the things into strings so to access real times values of variables, we do ${} 
console.log(email1)
console.log(email2)
const sender="Edl"
const email3=`Hey!  ${recipient}  How is it going? Cheers  ${sender } `
const email4=`Hey!  ${recipient}  How is it going? Cheers `+ sender
console.log(email3)
console.log(email4)//email 3 and 4 are the same
//unlike regular strings, template strings can be written in different line which makes the code more clear
const email5= `
    Hey!,  ${recipient}
How is it going? Cheers  ${sender }, 
    bye!`
console.log(email5)


//localStorage.setItem("name", "Edlawit")//or it can be Window.localStorage()- and window is because the localStorage is available only on this window, but it can be ommited and writting less code is better so we will write the lesser one. even if we delete or comment this line out the key:value pair is already stored
//console.log(localStorage.getItem("name"))
localStorage.clear()//this will clear the local storage after we comment out the two lines above 
//local storage is where the user will store some data locally(only on his/her computer),the disadvantage of local storage is that it can only store a data with both key and value pair in string which made it called premitive data type


let myLeads=`["www.awsomeleads.com"]`//this whole thing is a atring since we used `
myLeads=JSON.parse(myLeads)//change it into an array, it is just used to reverse its type from string to whatever datatype it had before
//JSON object is a very common way to store data stringify=to chnge an array or any datatype into a json array and parse to chnge a string which found to be a json array into a javascript array
console.log(typeof myLeads)
myLeads.push("www.aaa.com")//if we try to push a value before, it would throw type error but now its turnd to an array 
myLeads=JSON.stringify(myLeads)
console.log(typeof myLeads)

//truthy and falsy values
//falsy(false, 0, "",null(how a developer signalize emptyness),undefined(how a java script signalize emptyness), NAN)


//there is something called refactoring our code, which requires us to modify our code in a way its more functional
//for example, in the code(chromeextension.js), function renderLead only works with an array called myLeads but, we can make it to take any other array and 
//process through its elements, so now the new function render work with arguments passed through it, as u can se whenver I call it, 
// I pass the argument which in this case is myLeads, this makes the function work with whatever array we want it to work with
//having our function to accept parameters makes our function to be more reusable 
//here also is another simple example

function greetUser(user){
    console.log("welcome back, "+ user)
}
greetUser("EDL")

//functions with multiple parameters--in functions, we can have as many parameters as we want
function greetUsers(greeting, user, emoji){
    console.log(`${greeting}, ${user}${emoji}`)//this looks complex so we will refactor the code to using string literals
}
greetUsers("howdy","EDL","✋")

function add(num1,num2){//parameters are used when writing the funtion, here num1 and num2 are parameters of the funtion
    console.log(num1+num2)
}
add(3,4)//arguments are used when invoking the funtion, here 3 and 4 are arguments of the funtion. arguments are basiclly used outside of the funtion when we just envoke it
add(9,102)

function getFirst(arr){
    return(arr[0])
}
console.log(getFirst([1,2,3]))
let firstCard=getFirst([1,2,3])
console.log(firstCard)

localStorage.setItem("1",JSON.stringify(firstCard))
console.log(localStorage.getItem("1"))
localStorage.clear()

let data=[
    {
        player:"jane",
        score:52
    },
    {
        player:"Mark",
        score:41
    }
]
let scored=document.getElementById("scored")
let scoreJane=document.getElementById("score")
scoreJane.addEventListener("click", function(){
    for (let i=0; i<data.length; i++){
        if((data[i].player)==="jane"){
            scored.textContent=data[i].score
            console.log(scored.textContent)
        }
    }
})


function generateSentence(desc, arr){
    let items="imgs"
    for(let i=0; i<arr.length; i++){
        if(i===(arr.length)-1){
            items+=arr[i]
        }
        else{
            items+=arr[i]+ ", "
        }
        
    }
    console.log(`The ${arr.length} ${desc} are ${items}.`)//or else we can create a variable for this one and then add the items of the array into this variable instead of items
}
generateSentence("best Fruits",["banana","orange","pineapple"])

let container=document.getElementById("images")
const imgs=[
    "axum.jpg",
    "lalibela.png",
    "sofumer.jpg"
]

function renderImages(){
    let newww=""
    for (let i=0;i<imgs.length;i++){
        //newww="<img  src=' "+ imgs[i] + "'>"   if u struggle in these cases first write them like this, then change them to template strings
        //newww=`<img class='team-img' src='${imgs[i]}'>`
        //container.innerHTML=newww
        
        newww += `<img alt="employee of the company" class="team-img" width="100px" height="100px" style="margin:15px; border-radius:50%" src="${imgs[i]}" >`
    }   
    container.innerHTML=newww//since having the DOM elemet in a for loop and altering it multiple times is risky, we made it outside
}
renderImages()


const totalPrice="420.69235632455"
const btn=document.getElementById("purchase-btn")
const btn2=document.getElementById("purchase-btn2")

btn.textContent=`BUY ${Number(totalPrice).toFixed(2)}`//Number() to change string into number and .toFixed(2) to round the number into 2 decimal places
console.log(typeof totalPrice )
btn2.textContent=(`BUY ${Math.round((totalPrice))}`)//Math.round()- to round to the nearest whole number, Math.round() doesnt require a number parameter cause it would work with string as well