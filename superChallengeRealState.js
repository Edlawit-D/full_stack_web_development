import { propertyForSaleArr } from "./propertyForSale.js";
import {placeHolderPropertyObj} from "./placeHolderProperty.js";
function getPropertyHtml(propertyForSaleArray=propertyForSaleArr) {//to give default values we should give the parameters slightly different name from  the quantities we want to set as default, cause if not the variables for the quantities we want to use as default will already be declared in the scope of the function so that when we try to call the function with the default values which means with no values, it will throw"reference error" since we are trying to use the default values out of the function's scope
    if (propertyForSaleArray.length > 0){
        return propertyForSaleArray.map((property) =>//since there will be multiple numbers of divs created based on the number of the objects in the array, the identifier must be a class instead of an id 
            `<div class="properties">
                <div>
                    <img src="${property.image}" width=200px height=200px>
                </div>
                <div id="content">
                    <h1>${property.propertyLocation}</h1>
                    <p id="price">$${property.PriceGBP}</p>
                    <p id="comment">${property.comment}</p>
                    <p id="area">${(property.roomsM2).reduce((total, room)=>
                        total=total+room, 0)}m^2</p>
                </div>

            </div>`
    ).join("")}
    //here, the default value will be used when the fnction is called with no parameters, while the else statement is used when the function is called with empty parameter
    else {
        //const properties={propertyLocation, PriceGBP, comment, roomsM2, image } = placeHolderPropertyObj---this would return an error that says the given variables are undefined and thats because we are returning them as new variables instead we should not use a new variable and just use the list of the names inside the array or the object which makes tham get declared as constants so there will be no need of declaration
        const {propertyLocation, PriceGBP, comment, roomsM2, image } = placeHolderPropertyObj
        return `<div class="properties">
                <div>
                    <img src="${image}" width=200px height=200px>
                </div>
                <div id="content">
                    <h1>${propertyLocation}</h1>
                    <p id="price">$${PriceGBP}</p>
                    <p id="comment">${comment}</p>
                    <p id="area">${roomsM2.reduce((total, room)=>
                        total=total+room, 0)}m^2</p>
                </div>

            </div>`
    }
}
const array=[]
document.getElementById("container").innerHTML= getPropertyHtml(array)//here, since array.length=0, it will use the default value in place of array, but if there were not a default value it would do the else statemnt
document.getElementById("big-container1").innerHTML= getPropertyHtml()//with default values, we can call the function without any arguments and it will return the default values, but if we want to use the values from the array we can just call the function with the array as an argument like bellow
document.getElementById("big-container2").innerHTML= getPropertyHtml(propertyForSaleArr)
