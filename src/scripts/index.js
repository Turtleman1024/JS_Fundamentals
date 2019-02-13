import '../styles/index.scss';

//#region Document_Elements
let paraOne = document.getElementById('para-one');
let paraTwo = document.getElementById('para-two');
let paraThree = document.getElementById('para-three');
let paraFour = document.getElementById('para-four');
let paraFive = document.getElementById('para-five');
let paraSix = document.getElementById('para-six');
//#endregion

//#region Rest_Paramters
//Rest Paramaters Example
function sendCars(element, ...carInfo)
{
    carInfo.forEach(id => 
            element.innerHTML +=  " " + id
        );
}
//#endregion

sendCars(paraOne,'GMC', 100, 200, 555);

//#region Destructing_Arrays 
//Destructing Arrays
let carIds = [12, 32, 43];
let car1, remainingCars;
//This is just a way to assign values to multiple variables
[car1, ...remainingCars] = carIds;

sendCars(paraTwo, car1, remainingCars);

let carVins = [1, 2, 3];
let car, car2, remainingCars1;

//Will skip the first vin #
[, car2, ...remainingCars1] = carVins;

sendCars(paraThree, car2, remainingCars1);
//#endregion

//#region Destructing_Objects
let vehicle = { id: 5000, style: 'convertible' };
let {id, style } = vehicle;

paraFour.innerText = id + " " + style;

//#endregion

//#region IIFE_Pattern
//Immediately Invoked Function Expression
let app = (function(){
    let id = 123;
    sendCars(paraFive, id);
    return{};
})();
//#endregion

//#region Closure 
let app1 = (function(){
    let carId = 321;
    let getId = function(){
        return carId;
    };
    return{
        getId: getId
    };
})();
sendCars(paraSix, app1.getId());
//#endregion


//#region this keyword

//#endregion
