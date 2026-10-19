let password1El=document.getElementById("password1")
let password2El=document.getElementById("password2")
let components=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z","1","2","3","4","5","6","7","8","9","0","-","_","+","=","&","^","$","#","@","!","`","~","|","{","}","[","]","<",",",".",">","?"]
let capitalcomponents=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
let smallcomponents=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
let numbercomponents=["1","2","3","4","5","6","7","8","9","0"]
let specialcomponents=["-","_","+","=","&","^","$","#","@","!","`","~","|","{","}","[","]","<",",",".",">","?"]
let inputEl=document.getElementById("input")
let smallEl=document.getElementById("small-el")
let capitalEl=document.getElementById("capital-el")
let specialEl=document.getElementById("special-el")
let numberEl=document.getElementById("number-el")
let component=[]
let number=0
//function numberofpassword(){
  //  number=inputEl.value;
//}if we want to add a submit button and have the number=inputEl.value; 
// in another function invoked when the submit button is clicked, u can 
// see the html if u want, the previously added submit button is commnted out
function small(){
    component=[...component,...smallcomponents]
}
function capital(){
    component=[...component,...capitalcomponents]
}
function special(){
    component=[...component,...specialcomponents]
}
function numberr(){
    component=[...component,...numbercomponents]
}
function generate(){
    number=inputEl.value;
    password1El.textContent=""
    password2El.textContent=""
    for(let i=0; i<number; i++){
        let k=Math.floor(Math.random()*component.length)
        let l=Math.floor(Math.random()*component.length)
        password1El.textContent+=component[k]
        password2El.textContent+=component[l]
    }
}
function clear(){
    password1El.textContent=""
    password2El.textContent=""
}