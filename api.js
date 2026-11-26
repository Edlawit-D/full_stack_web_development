
//API-application programming interface, it is a set of rules and protocols that allows different software applications to communicate with each other,to interact with each other,to share data and functionality,to work together,to access each other's data and functionality,to integrate with each other,to extend each other's functionality,to build on top of each other's functionality,to create new functionality by combining existing functionality from different software applications
//API is a tool that allows ur code to talk with(use goodness from) someone else's(wep APIs, 3rd party package...) code without the need to understand the underling code.
//examples of API's are google maps, twitter, facebook, weather, news, stock market, payment gateways, etc
//I have used API's in DOM objects, in array methods, local storage, in fetch() method, in async/await, in promises, in axios, in jquery, in react, in angular, in vue, in node.js, in express.js, in mongodb, in firebase, in aws, in azure, in google cloud, in heroku, in netlify, in vercel, etc

//any thing in the 500 range of a response code shows a failure with the internal server, any thing in the 400 range of a response code shows a failure with the client, any thing in the 300 range of a response code shows a redirection(means the request has been redirected to a different URL- this may not be an error it is just the response is in another page, sometimes there may be an error of infinite redirect where two pages keep forwarding u back and forth untill the server gives up), any thing in the 200 range of a response code shows a success, any thing in the 100 range of a response code shows an informational message(means that the request was received and is being processed, but no response is available yet, it is used for long running requests, it is used for streaming data, it is used for server-sent events, it is used for web sockets, it is used for HTTP/2 push, it is used for HTTP/3 push, it is used for HTTP/3 server push, it is used for HTTP/3 client push, it is used for HTTP/3 bidirectional push, it is used for HTTP/3 unidirectional push, it is used for HTTP/3 multiplexed push, it is used for HTTP/3 prioritized push, it is used for HTTP/3 deferred push, it is used for HTTP/3 speculative push, it is used for HTTP/3 preemptive push, it is used for HTTP/3 proactive push, it is used for HTTP/3 reactive push, it is used for HTTP/3 adaptive push, it is used for HTTP/3 dynamic push, it is used for HTTP/3 static push, it is used for HTTP/3 hybrid push, it is used for HTTP/3 incremental push, it is used for HTTP/3 batch push, it is used for HTTP/3 streaming push, it is used for HTTP/3 chunked push, it is used for HTTP/3 pipelined push, it is used for HTTP/3 multiplexed streaming push) 
//in a website going to inpect and choose the "network" bar and then filter it with "XHR" we can see the recent requests we have made which are returned/responsed as a json file and w can even preview what was returned

//URL-uniform resource locator, it is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it, it is a specific type of URI(uniform resource identifier) that provides the means to access a resource on the internet, it is used to identify and locate resources on the internet, it is used to access web pages, images, videos, files, APIs, etc, it is used to navigate the web, it is used to share links, it is used to bookmark pages, it is used to search for information, it is used to access online services, it is used to connect to remote servers, it is used to download files, it is used to upload files, it is used to stream media, it is used to make requests to web servers, it is used to send data to web servers, it is used to receive data from web servers
//URL- 2 portions(base(no matter what kind of resource we are getting from this api, it doesnt change. although the precise format is upto the designer or the owner(https://scrimba.com/api)), endpoint(the specific resource I want to retriev(/courses,/templates,/resources/tests.....also we may use query strings))

fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
    .then(response => response.json()) 
    .then(data => console.log(data)) //it is a convention to use response and data as variables here but it not mandatory at all, we can use any other variable name we want, but it is better to use them as they are more descriptive and easier to understand
    //.then(data => {
      //  const imgEl=document.createElement('img')
      // imgEl.src=data.message
     //imgEl.alt="A random dog"
     // document.getElementById("img-container").appendChild(imgEl)
    //})
    .catch(err => {
        console.log(err)
        //throw new Error("Failed to fetch data from the API")//but it would not let the other code after it to run so its better not to use it
    })
    .finally(() => console.log("operation completed"))
    //finally has nothing to do with error or promise it is just a method that will run after the promise is settled, whether it is fulfilled or rejected, it is used to clean up resources, it is used to log messages, it is used to update the UI, it is used to reset state, it is used to perform any other final actions that need to be done after the promise is settled
    
    
//the fetch method is like giving a set of instruction that should have been done one after another. 
// in the above example, the js will fetch the data from the provided link and then there is "then" method. we want to chain it with fetch so we have used(.) 
// .then("a variable we are gonna put the data from fetch-by convention its mostly 'response' => we saw the json at the provided link so to make usable in our app we will change it into a js file using .json()) 
// and then there is another .then(the variable here hold the data returned from the last then which is the json data that now converted to js data => we can log it or we can have another function)

async function getBoredActivity() {
    try{
        const response = await fetch("https://apis.scrimba.com/bored/api/activity");
        const data =  await response.json();//here and at the above it is not a must to use response and data as variables in here always, as I have done at the next challenge we can do use another variable
        console.log(data);
        //const activityEl = document.getElementById("activity");
        //activityEl.textContent = data.activity;
    }catch(error){
        console.log("Error fetching data:",error);
    }
    finally{
        console.log("operation completed");
    }
}
getBoredActivity();
//promises are used to handle asynchronous operations in JavaScript, they represent a value that may be available now, or in the future, or never.
//promises have three states: pending, fulfilled, and rejected. A promise is pending when it is created and has not yet been resolved or rejected. A promise is fulfilled when it has been resolved successfully and has a value. A promise is rejected when it has been rejected with an error. Promises can be chained together using the .then() method, which allows us to handle the resolved value of a promise and return a new promise. Promises can also be handled using the async/await syntax, which allows us to write asynchronous code in a synchronous manner(It means your code runs asynchronously in the background (without freezing the browser), while being written in a clean, top-to-bottom order that looks just like regular line-by-line synchronous code.)
//if I omit the "await" at the second .then, the data will be a promise object instead of the actual data, and I will not be able to access the properties of the data object directly. I will have to use another .then() method to handle the promise and access the data.

//async adn await are used to handle asynchronous operations in JavaScript, they allow us to write asynchronous code in a synchronous manner, they make our code easier to read and understand, they allow us to use try/catch blocks to handle errors, they allow us to use the await keyword to wait for a promise to resolve before continuing with the execution of the code, they allow us to use the async keyword to define a function that returns a promise, they allow us to use the await keyword inside an async function to wait for a promise to resolve before continuing with the execution of the code, they allow us to use the await keyword outside of an async function by wrapping it in an immediately invoked function expression (IIFE) or by using top-level await in modules.
//if we dont use them the user could not be using any other features from the app untill the promise got resolved or rejected, but with them the user can use other features of the app while the promise is being resolved or rejected, and when it is resolved or rejected the user will be notified and the app will update accordingly.

//for exapmple here, other codes even at the bottom of them got excuted before them, which other wise would wait the promise to be reolved or rejected

async function fetchDog(){//the try/catch should be inside an async function if we dont have type="module" in the html-having modular js
    //async is a function modifier, it is what akes the function stoppable other wise js code can not be stopped by any means.there fore we use async with await if the js is not modular so that we have the await... inside a function, if the function is modular we can use await directly and its not a must for the code to be inside a function
    try
    {const dog=await fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
    const dogs=await dog.json()
    console.log(dogs)}
    catch(error){
        console.log("Error fetching data:",error);//the parameter "error is optional I can just log the message or even only the error but having only the error would not make it more clear so use only the message or the message with the error"
    }
}
fetchDog()

//in both async/await and fetch/then, we can use the same variables in them like (response and data), because they create they own scope so there will be no error when we define the same variables again and again(even though they are same, theyare in differeent scope)

//the reason why we use try/catch for async/await and catch for fetch/then is that if we use try/catch for fetch/then, try/catch is way faster than fetch/then so that it will get excuted faster and when the error happens later the program is already out of try/catch so the errorwill not be caught and it will throw an error, but catch is attached to the direct premise so it will wait for the premise to be rejected so if it is, it will catch it.
//for async/await the main purpose of await is to make the the code wait until the promise is resolved or rejected, so that thr try/catch will wait for the premise while other code other than the try/catch will be excuted and wehn the proise gets resolved or rejected the try catch will run accordingly.


//try/ catch and catch are used to catch errors(happening because of the base URL(which is the first part of a link which is not changed when we want a different category or type), network errors and other unexpected issues-this is like no link is found with that name), but there may be a mistake specially typing mistake in end point(the part of the link after the base URL which gets changed, its like different categories found in a baseURL-there will be no error but there will be a failure, there will be the link returned but with status:'error',these are not errors they are just failures so they are not catched by the try/catch, but there is a .ok attribute(bullean value) to the variable where the fetch is put into which in this case 'dog'--the failure is like there is this main part(base URL) but not with this category)
async function fetchDogg(){
    try{
        const dog=await fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")//here I have changed the endpoint of the link(image to images)
        if (!(dog.ok)){
            throw new Error('There was a problem with the API')//here the new variable called error is created but this will be picked by the catch() clause and get logged out
        }
    const dogs=await dog.json()
    console.log(dogs)}
    catch(error){//it will refer the Error created at the if clause(when the condition mate)-failure because of the endpoint of the link or else the error catched-error with base URL
        console.log(error);//return the error(if there is an error catched())
        //the effects that we want to have in any part like the DOM or if we want to access another api because of the error, we do all that in here at the catch block
    }
}
fetchDogg()

async function fetchPost(){
    try{
        const post=await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        if (!post.ok){
            throw new Error("failure to access the data!")
        }
        const postJson=await post.json()
        console.log(postJson)
    }
    catch(error){
        console.log(error)//if we want different error messages for different errors we can have an if/else clause in the catch block(here), other wise the erro created at the if/else clause above will get excuted when we log error, cause the if clause at the above can notice bothe the baseURL an dthe end point errors(since both cases make post.ok===false)
    }
}
fetchPost()

//JSON placeholder-not only aceessing data from the server but also uploading to it as well
//methods(different requests in JSON placeholder)-GET(getting data),POST(postig data),PUT(updating data-but we may also use post depending on the api we use),DELETE(deleting data),PATCH and OPTIONS--its a convention to make the methods written in capital
//when we do fetch, GET is the default method so we dont need to pass GET in methos as a value
async function createPost(){
    try{
        const post=await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
            method:'POST',
            body:JSON.stringify({
                title: "Holiday NightMares",
                body:"when I was kidnapped in scotland...",
                userId:4703,
            }),//json placeholder dont actually put our data to the server but its like simulation, when we try this one even though it is not put to the server we will get a confirmation text of the id(the id returned to the console)
            headers:{
                "Content-Type":"application/json"
            }//headers give more details on what we are uploading to the server-here the title,body,userId,and id=101 will be logged out on the console
        })
        if (!post.ok){
            throw new Error("failure to access the data!")
        }
        const postJson=await post.json()
        console.log(postJson)
    }
    catch(error){
        console.log(error)//if we want different error messages for different errors we can have an if/else clause in the catch block(here), other wise the erro created at the if/else clause above will get excuted when we log error, cause the if clause at the above can notice bothe the baseURL an dthe end point errors(since both cases make post.ok===false)
    }
}
createPost()
//0910587739-omi great run
//how to update a resource in api-we can use put(to update all the parts) or patch(to update only part of the resource)


//promise constructor
const promise= new Promise((resolve, reject) => {
    const success=Math.random() > 0.5
    if(success){
        resolve("premise resolved operation successful!!!")
    } else {
        reject("premise rejected operation failed!!!")
    }
})
promise.then(response => console.log(response))

try {
    const response= await promise
    console.log(response)
} catch(err){
    console.log(err)
}

//promise challenge

async function preLoadeImg(url){
    return new Promise((resolve,reject)=>{
        const img =new Image()
        img.src=url
        img.alt="A random dog"
        img.addEventListener('load',()=> resolve(img))
        img.addEventListener('error', ()=> reject('image has not loaded'))
    })
}
try{
    //first we should fetch the url or the the link and then convert it into a js usabble format, and then after that extract the real img link not a json link or else we could use a jpg file it self or the direct images address or webp page so that there would be no need for extraction of the image link
    const link= await fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
    if (!link.ok){
        console.error("error on the end point of the link provided")
    }
    const realLink= await link.json()
    const results = await preLoadeImg(realLink.message)
    console.log(results)
    document.getElementById("img-container").appendChild(results)
    }
catch (error){
    console.error("Error: can not fetch the image  resource")
    }


//how using promises help escape callback hell
function uploadFile(){
    return new Promise((resolve,reject)=>{
        console.log('step 1: Uploading file ...')
        setTimeout(() =>{
        resolve()}, 1000)
    })
//what is callback function and what do we mean when we say to add a callback function to the promise constructor
// A function passed as an argument into another function so it can be executed later. For example, in setTimeout(() => { resolve(); }, 1000), the arrow function () => { resolve(); } is a callback that runs after 1,000 milliseconds.
}
function processFile(){
    return new Promise((resolve,reject)=>{
        console.log('step 2: processing file ...')
        setTimeout(() =>{
            resolve()}, 1000)
        })
}
function notifyUser(){
    return new Promise((resolve, reject)=>{
        console.log('step 3: Notifying user ...')
        setTimeout(() =>{
            resolve()}, 1000)
    })
}

try{
    await uploadFile()
    await processFile()
    await notifyUser()
}
catch(error){
    console.error('error occured')
}
finally{
    console.log("operation completed!")
}


//instead of the try catch above we could do the following and not use promises
function uploadFil(callback) {
    console.log("step 1: Uploading file ...");
    setTimeout(() => {
        callback();
    }, 1000);
}
function processFil(callback) {
    console.log("step 2: processing file ...");
    setTimeout(() => {
        callback();
    }, 1000);
}
function notifyUse(callback) {
    console.log("step 3: Notifying user ...");
    setTimeout(() => {
        callback();
    }, 1000);
}

uploadFil(()=>
    processFil(()=>
        notifyUse(()=>
            console.log("operation completed!")
        )
    )
)
//using promises with try/catch is more easier, clearer to use specially  when the code is much bigger and the functions be a lot


//how to handle multiple promises all at once
//the output of Promise.all is array of resolved promises, if even one of the promises is rejected it will not get excuted

//super challenge
function getImagePromise(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const img=new Image()
            img.src=url
            img.alt='scenic image'
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error("failed to load the images!")))
        }, 500)
    })
}

const images=[
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preLoadImages(imageUrlArr){
    const imgContainer=document.getElementById('img-containing')
    const uploadContainer=document.getElementById('upload-container')
    try{
        const promise1=getImagePromise(imageUrlArr[0])
        const promise2=getImagePromise(imageUrlArr[1])
        const promise3=getImagePromise(imageUrlArr[2])
        const promises= await Promise.all([promise1,promise2,promise3])//since Promise.all has the output of resolved proises, if one of the promises are not right or rejected, error will be catch and error message will be returned
        //const promises= imageUrlArr.map((url)=> getImagePromise(url))   const results= await Promise.all(promises) === the ABOVE 4 LINES OF CODE
        uploadContainer.style.display='none'
        promises.forEach ((img)=> imgContainer.appendChild(img))
        console.log("All images loaded successfully!!!")
    }
    catch(error){
        console.error("error while fetching the imags in the array")
    }
}
document.getElementById("submit-button").addEventListener('click',()=>preLoadImages(images))