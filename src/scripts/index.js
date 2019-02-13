import '../styles/index.scss';

//#region Document_Elements
let paraOne = document.getElementById('para-one');
let paraTwo = document.getElementById('para-two');
let paraThree = document.getElementById('para-three');
let paraFour = document.getElementById('para-four');
let paraFive = document.getElementById('para-five');
let paraSix = document.getElementById('para-six');
let paraSeven = document.getElementById('para-seven');
let paraEight = document.getElementById('para-eight');
let paraNine = document.getElementById('para-nine');
let paraTen = document.getElementById('para-ten');
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
let app2 = {
    carId: 456,
    getId: function() {
        return this.carId;
    }
};
sendCars(paraSeven, app2.getId());
//#endregion

//#region Call and Apply
//Call
let app3 = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};

let newCar = {carId: 987};
sendCars(paraEight, app3.getId.call(newCar)); //987

//Apply
let app4 = {
    carId: 123,
    getId: function(prefix){
        return prefix + this.carId;
    }
};

let newCar1 = {carId: 678};
sendCars(paraNine, app4.getId.apply(newCar1, ['ID: '])); // ID: 678
//#endregion

//#region Bind
let app5 = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};

let newCar2 = {carId: 456};
//Make a copy of the getId function
let newFn = app5.getId.bind(newCar2);
sendCars(paraTen, newFn());
//#endregion 
