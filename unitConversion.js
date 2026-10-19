let lengthEl=document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")
let inputEl=document.getElementById("input-el")
let convertEl=document.getElementById("convert-el")
convertEl.addEventListener("click", function(){
    let value=inputEl.value
    lengthEl.textContent=`${value} meters = ${((value)*3.28084).toFixed(3)} feet | ${value} feet = ${((value)*0.305).toFixed(3)} meters`
    volumeEl.textContent=`${value} liters = ${((value)*0.264).toFixed(3)} gallons | ${value} gallons = ${((value)*3.785).toFixed(3)} liters`
    massEl.textContent=`${value} kilos = ${((value)*2.20462).toFixed(3)} pounds | ${value} pounds = ${((value)*0.454).toFixed(3)} kilos`
})