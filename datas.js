let data=[
    {
        player:"jane",
        score:52    
    },
    {
        player:"Mark",
        score:41
    },
    {
        player:"John",
        score:32
    }
]
export {data}//this is how we export a data from a file to be used in another file, this is called named export since we are exporting a data with its name, so when we import it in another file we should use the same name as well

function selectItems(arr, keyword){
    return arr.filter(function(item){//here I can use any other name instead of item its just to indicate the varies parts or elemnts f the array
        return (item.score===keyword)
    })
}
export default selectItems//this is how we export a data from a file to be used in another file, this is called default export since we are exporting a data without its name, so when we import it in another file we can use any name we want, there can be only one export default in a file otherwise it will throw an error