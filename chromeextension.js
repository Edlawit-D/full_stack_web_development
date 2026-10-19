// chrome://extensions/
//let input=document.getElementById("input-el")
//let number=""

//function save(){
  //  number=input.value
    //console.log("button clicked!!!")
    //console.log(number)
//}  the above is one way to use the value inputed by the user and there is this second method shown below

//inputEl.addEventListener("click",function(){
  //  console.log("button clicked from event listener")
//})
let myLeads=[] 
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
let deleteButton=document.getElementById("delete-btn")
let tabBtn=document.getElementById("save-tab")
let listItems=""

//function save(){
  //  console.log("button clicked from onclick attribute")
//}  this can also be done as
const saveBtn=document.getElementById("input-btn")//the difference between let and const is that const variables are not reassignable
//for example const z=2  z=6 throws an error whike it will not throw any if let was used insted

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("i"))//use const whenever w can cause it provides strictness to our code
if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    //let tab=tabs[0].url
    //console.log(tab)
    //the following is how we actually grab the link of the tab opened on chrome instead of hardcoding the url we want
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){//like the addEventListener function it needs two arguments one which specifies which tab we want(if multiple tabs are opened in the window we are telling chrome we want the active one, and also with currentWindow, we are telling chrome that if there were other active tabs background, we want the current tab we are running the extension on) and the second argument is the function where we write whatever we want to do with the tab we specified at the first argument
        //the query function only works in  real chrome which is when we actually deploy it, so if we just run this, we would get undefined query error
        //first check if the tabs array exists and has at least one active tab item
        if(tabs && tabs[0] && tabs[0].url){
            myLeads.push(tabs[0].url) // Grabs the URL from the first tab object
            localStorage.setItem("i", JSON.stringify(myLeads)) // Now this safely runs!
            render(myLeads)
        }
        
    })//chrome is an object we can access when we run the app as a chrome extension and, it has a tabs key and tabs is also an object which has a query method
    
})

//there is something called refactoring our code, which requires us to modify our code in a way its more functional
//for example, in this code function renderLead only works with an array called myLeads but, we can make it to take any other array and 
//process through its elements, so now the new function render work with arguments passed through it, as u can se whenver I call it, 
// I pass the argument which in this case is myLeads, this makes the function work with whatever array we want it to work with
let newItem=""
//function renderLead(){
function render(lead){
    listItems=""
    for(let i=0;i<lead.length;i++){
        //ulEl.textContent += myLeads[i] // this returns it as a plane text not as a list instead use:
        
        //listItems +="<li><a target='_blank' href=' "+ myLeads[i] + "'>"+ myLeads[i] + "</a> </li>"
        //we can write the above complex line whish we cant write in diffrent lines even for simplification in a more clearer way using template strings/'iterals(`xdfcgvhbjn mkuiyftdcfg`) as follows
        listItems += `
            <li>
                <a id="link" target='_blank' href=' ${lead[i]}'>
                    ${lead[i]}
                </a>
            </li>
        `
        //unlike the first one, the next one is pretty simple, easy to understand and more html like writting

        //or else just ulEl.innerHTML +="<li>"+ myLeads[i] + "</li>", but the above make it more clear
        //at first listItems will just store the <li> as a string added to the values as well but when we apply inerHTML to the ulEl, they will be displayed as lists
    }
    //newItem="<li>"+myLeads.pop()+"</li>"//if the browser is not refreshed, it is not necessary to load all the vlues in the array whenver we add a new item
    //newItem="<li>"+inputEl.value+"</li>" //and this is way more efficient cause if we dont want to store multiplw values adn load through them, why would we put them in an array
    ulEl.innerHTML =listItems//it would be best to manipulate the dom once instead of making it inside of the for loop and manipulate it three times
}
console.log(localStorage.getItem("i"))

saveBtn.addEventListener("click", function(){ 
    myLeads.push(inputEl.value)
    
    //newItem="<li>"+<a href="inputEl.value"></a>+"</li>" //and this is way more efficient cause if we dont want to store multiplw values adn load through them, why would we put them in an array
    //ulEl.innerHTML +=newItem
    //instead of calling the renderLead fubction we can jus do the above two lines here adn have the same result
    inputEl.value=""// to make it empty after the save button is clicked
    localStorage.setItem("i", JSON.stringify(myLeads))
    render(myLeads)
})


deleteButton.addEventListener("dblclick", function(){
    //listItems=""   ulEl.innerHTML=listItems
    ulEl.innerHTML=""
    myLeads=[]
    localStorage.clear()
})

//const tabs=[
  //  {url:"https://www.linedin.com/in/edlawit-desalegn-asrade-16960237b"}
//] hadcoded link(url) to be accesses when the SAVETAB button clicked





