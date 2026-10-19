let messageEl= document.getElementById("message-el")
let sumEl= document.querySelector("#sum-el")
//another way to select an element from the DOM is querySelecter but we should use # if the selection is by id and  . if the selection is based on the class and nothing when selecting by element
let cardEl=document.getElementById("card-el")
let playerEl=document.getElementById("player")
let cards=[]//arrays are ordered lists of items
let sum= 0
let hasblackjack = false
let isAlive = false//before starting the game, let alone being alive, I am not even in the game
let message=""
//since the name of the player and his/her coins are features of the same object we can define them as an object
//objects are called composite or complex data types, they are written as key:value pairs
let player={
    name:"Edlawit: ",
    coin:145
}
console.log(sum)
function startGame(){
    player.coin=145
    isAlive=true
    let firstCard = getRandomCard()//function at line 13
    let secondCard= getRandomCard()
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function getRandomCard(){
    let randomm = Math.floor(Math.random()*13)+1
    if (randomm === 1){
        randomm=11
    }
    else if ( randomm >10){
        randomm=10
    }
    return randomm
}//whether we define/declare a function before or after we call it, it doesnt matter, it works either way 

function renderGame(){
    cardEl.textContent ="cards: "
    for (let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + "  "
    }
    sumEl.textContent = "sum: "+ sum//making sumEl.textContent += sum makes the values concatnate whenever we hit the start game button, but this one just change the value
    if(sum <= 20){
        isAlive=true
        hasblackjack=false
        message="u're still in the game, u want to draw another card?";
        playerEl.textContent=player.name+" $"+player.coin
        //messageEl.textContent="u're still in the game, u want to draw another card?";
        //return "u're still in the game, u want to draw another card?";
    }
    else if(sum === 21 && isAlive==true){//=== strictly or exactly equal, meaning it also checks oout whether the datatype of the values being compared is the same or not, == ignores their datatype, = is just to assign values
        message="got a blackjack, u won!!!";
        isAlive=false;
        hasblackjack = true;
        player.coin+=25
        playerEl.textContent =player.name+" $"+player.coin
        //messageEl.textContent="got a blackjack, u won!!!";
        //return "got a blackjack, u won!!!";
    }
    else {
        isAlive=false;
        hasblackjack=false;
        message="u lost!!!";
        player.coin-=25
        playerEl.textContent=player.name+" $"+player.coin
        //messageEl.textContent="u lost!!!";
        //return "u lost!!!";
    }
    messageEl.textContent=message
}
function newCard(){
    if (hasblackjack==false && isAlive==true){
        console.log("drawing a new card.")
        let card =getRandomCard()
        cards.push(card)
        sum +=card
    }
}
//let h=blackjack()
//console.log(h)
//console.log(hasblackjack)
//or else, we can do just the condition and instead of return we use console.log
//console.log(message)

