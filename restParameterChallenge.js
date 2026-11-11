function getLebelsHtml(text, sender, ...levelnames){
    //names.forEach((name) => {
        //console.log("dear " +name.name+ " " + text + " from " + sender)
    //})
    const labels = levelnames.map((levelname) => (
      //   return "dear " +name.name+ " " + text + " from " + sender
    //
    `<div class="levelsCard">
        <p> Dear ${levelname.name},</p>
        <p> ${text}</p>
        <p> BestWishes,</p>
        <p>${sender}</p>
    </div>`
    )). join("")//by default there will be "," between the divs but we dont want that, so we have to use join("") to remove it
    return labels
}
document.getElementById("levels-header").innerHTML=getLebelsHtml("Your hard work paid u off, I am always greatefull to work with u!","Tom",{name:"Abebe"},{name:"Kebede"},{name:"Helen"},{name:"Adam"})
