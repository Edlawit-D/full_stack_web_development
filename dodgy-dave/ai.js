import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.VITE_AI_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1'
})

const response = await openai.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
        {
            role: 'system',
            content: 'give an explicit description, be friendly, explain things as it is for a 10 year old.'
        },
        {
            role: 'user',
            content: 'explain about quantum computing'
        }
    ]
})

console.log(response.choices[0].message.content)

//abt, errors and how I solved them, I already had node(checked with "node -v" at the terminal with the return of the version in my pc),
//then after that (npm create vite@latest dodgy-dave -- --template vanilla)  to install and make use of vite, while doing this, there exist files already in the folder(dodgy-dave), like a folder structure already formed. If not apear a structure of files do (npm init -y) to do so
//I copy and pasted my html file to the index.html already existing in the folder, and I move other files, imgs and gifs related to the folder right into the folder
//then inside the folder(cd dodgy-dave), I run (install openai) and then openai will get installed
//I go to polygon.io(which is massive.com now) signup and create an api key copy it, got to openai.com(since openai works only with a prepayment I have used anther free ai called groq.com and creeate and copy api key there) and google.com also provided free ai
//then create a file called .env and do ( VITE_POLYGON_API_KEY= paste the polygon.io api here    VITE_AI_API_KEY=paste the api from groq.com)
//after defining openAi=new openai({}) and specifying api key and base URL, do  the model and the message(containing two objects with two keys(role and content))
//at the model part try to use the not outdated one, outdates versions will log error
//after starting to use vite in the folder, npm run dev is used to run the folder in browser like dev which also requires doing dangerouslyAllowBrowser=true to run cause it will throw error for our security (detail in aiEngineering.js)
//in files like this, we dont want them to run in a browser like environment instead we want them to run the console so dangerouslyAllowBrowser=true is not needed and run by(node --env-file=.env file name with the extension like(ai.js))


//in this project I found out that there should exist an index.html file(every browser expects an index.html file not just empty but the main html file should apear in there, like this one) also it keeps the url clear and the projects organized-1. Servers & Bundlers Look for It Automatically: Tools like Vite, Live Server, GitHub Pages, Netlify, and Vercel are all programmed to look for index.html first whenever someone visits your website's root address (like http://localhost:5173/ or https://yoursite.com).
//before pushing to git, do git status adn .env should not apear, it it so u are not safe cause didnt ignore it instead it is trying to push it but if it ignore it u are safe since ur keys are stored in ur folder locally
//icog cv
//assignment