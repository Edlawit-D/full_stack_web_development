import getStockData from "./superChallengeData.js"
setInterval(function(){
    const stockData=getStockData()
    renderStockData(stockData)
}, 1500)

let prevPrice=null



function renderStockData(stockData){
    const StockDisplayName= document.getElementById("name")
    const StockDisplaySymbol= document.getElementById("symbol")
    const StockDisplayPrice= document.getElementById("price")
    const StockDisplayPriceicon= document.getElementById("priceicon")
    const StockDisplayTime= document.getElementById("time")

    const {name,symbol,price,time}=stockData

    let priceDirectionIcon= price>prevPrice ? "arrows/Green.png" : price<prevPrice ? "arrows/Red.png" : "arrows/Grey.png"
    const priceIconElement=document.createElement('img')
    priceIconElement.src= priceDirectionIcon
    priceIconElement.alt='price direction icon'
    priceIconElement.style.width = "16px"
    priceIconElement.style.height = "16px"
    priceIconElement.style.objectFit = "contain"
    StockDisplayPriceicon.textContent=''
    StockDisplayPriceicon.appendChild(priceIconElement)
    
    StockDisplayName.innerText=name
    StockDisplaySymbol.innerText=symbol
    StockDisplayPrice.innerText=price
    StockDisplayTime.innerText=time
    prevPrice=price
}
