import OpenAI from 'openai'//after installing openai library which could work with the freemsources like groq.com and google.com as well as the not free ones like openai.com
import {dates} from '/dates.js'//there is a dates.js file where the date got calculated



const plusButton= document.getElementById("plus")
const input=document.getElementById("input")
const tickers=document.getElementById("tickers-apear")
const ticker=document.getElementById("tickers")
const generate=document.getElementById("generate")//right here we can use document.querySelector("the exact same pointer or syntax we used at the css to refer the element we want"). for example for this one, we can do, const generate=document.querySelector("#generate")
let order=document.getElementById("order")
const loadingArea=document.getElementById("loading-area")
let apiMessage=document.getElementById("apimessage")
let tick=[]
generate.disabled=true
plusButton.addEventListener("click",(e)=>{
    e.preventDefault()//this is to prevent auto refreshing, cause whenever a button is inside a form which it is in the html, js will percieve it as a submit button and when clicked it refreshes the page by default to prevent this (e)=>{e.preventDefault() ...} must be used
    if (input.value.length>2){
        if(tick.length<3){
            tick.push(input.value.toUpperCase())
            ticker.textContent+=input.value.toUpperCase()+","
            input.value=""
            generate.disabled=false
            tickers.textContent =""
        }
        else{
            //generate.disabled=true//to allow the user have the report with his/her existing 3 stocks we dont disable it
            order.textContent="Tickers should not exceed 3 for the clarity and correctivity of the responses, If you want for the report of the 3 stocks you already entered, click GENERATE REPORT."
            order.style.color="red"
        }
    }
    else{
        order.textContent="You must add at least one ticker. A ticker is a 3 letter or more code for stock. E.g. TSLA for tesla"
        order.style.color="red"
    }
})

generate.addEventListener("click", fetchStockData)
async function fetchStockData(){
    document.getElementById("body").style.display='none'
    loadingArea.style.display='flex'
    apiMessage.innerText="Quering the API..."
    try{
        const stockData=await Promise.all(tick.map(async (ticker)=>{
            const url=`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${import.meta.env.VITE_POLYGON_API_KEY}`//right here Replace process.env.POLYGON_API_KEY with import.meta.env since we are using vite and process is not defined here
            const response= await fetch(url)
            const data=await response.text()
            const status= response.status
            if(status===200){
                apiMessage.innerText="Creating report..."
                return data
            }else{
                throw new Error('There was an error fetching stock data.')
            }
        }))
        fetchReport(stockData.join(''))
    }
    catch(err){
        loadingArea.style.display='none'
        apiMessage.innerText="There was an error fetching stock data"
        console.error("error:",err)
    }
}

async function fetchReport(data){
//AI will be right here
    const openai= new OpenAI({
        dangerouslyAllowBrowser:true,//here since we want this folder to run in browser like dev, we do this other wise it will throw error(This is disabled by default, as it risks exposing your secret API credentials to attackers.)it will be run with(npm run dev)
        apiKey: import.meta.env.VITE_AI_API_KEY,
        baseURL:'https://api.groq.com/openai/v1'

    })
    try{
        const response=await openai.chat.completions.create({
            model:"openai/gpt-oss-120b",
            messages:[
                {
                    role:'system',
                    content:'you give an analyzation of the data of the stock markets on the given set of Stocks. your responses are no morethan 100 words.'
                },
                {
                    role:'user',
                    content:`Give me the overall report for the stocks ${tick.join(",")} based on this market data: ${data}`
                }
            ]
        })
        renderReport(response.choices[0].message.content)
    }
    catch(error){
        console.log("error happened trying to generate the report")
        loadingArea.innerText="Unable to access AI. Please refresh and try again."
    }
} 

function renderReport(output){
    loadingArea.style.display='none'
    const outputArea=document.getElementById("output-area")
    const report=document.createElement("p")
    outputArea.appendChild(report)
    report.textContent=output
    outputArea.style.display='flex'  
}

//when using open ai we would specify the model we want to use like model=gpt-4 and then when the response comes, it will mention waht exact model it used like gpt-4-0013 the last 4 nubers(0013) are cally sanp shots and by specifiying the model to gpt-4 we are actually asking it to give us the lattest snapshot they get from the gpt-4
//context length-how much request we could ask adn how much request we could get from a model, like gpt-4-32k the 32k is the context length and as it gets larger the massivity of the request and response will also increase
//knowledge cutoff date of models- the date after which the ai has no knowledge of, it can be got at the openai docs tocheck for the openai we use
//models have no memory, they cant remember what we tell tehm and what they have told us
//prompt engineering-the art of science of designing inputs for generative AI tools like gpt-4 to produce optimal outputs.
