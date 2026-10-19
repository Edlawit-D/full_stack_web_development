let num1=0
let num2=0
let hscore = document.getElementById("hscore")
let gscore = document.getElementById("gscore")
let highlight= document.getElementById("leader")
function plus1(){
    num1+=1
    hscore.textContent = num1
}
function plus2(){
    num1+=2
    hscore.textContent = num1
}
function plus3(){
    num1+=3
    hscore.textContent = num1
}
function plus11(){
    num2+=1
    gscore.textContent = num2
}
function plus22(){
    num2+=2
    gscore.textContent = num2
}
function plus33(){
    num2+=3
    gscore.textContent = num2
}
function newround(){
    gscore.textContent=0
    hscore.textContent=0
}
function leader(){
    if (hscore.textContent > gscore.textContent) {
        highlight.textContent = "Home is Leading!!!";
        }
    else if (hscore.textContent < gscore.textContent){
        highlight.textContent = "Guest is Leading!!!";
    }
    else{
        highlight.textContent = "Equal Points!!!";
    }
    
}