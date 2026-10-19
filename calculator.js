let num1=8
let num2=2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let value=document.getElementById("sum-el")

function addition(){
    let result=num1+num2
    value.textContent="sum: " +result
}
function subtraction(){
    let result=num1-num2
    value.textContent="subtraction: "+result
}
function multiplication(){
    let result=num1*num2
    value.textContent="multiplication: "+result
}
function division(){
    let result=num1/num2
    value.textContent="division: "+result
}
