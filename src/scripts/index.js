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
let paraEleven = document.getElementById('para-eleven');
let paraTwelve = document.getElementById('para-twelve');
let paraThirteen = document.getElementById('para-thirteen');
let paraFourteen = document.getElementById('para-fourteen');
let paraFifteen = document.getElementById('para-fifteen');
let paraSixteen = document.getElementById('para-sixteen');
let paraSeventeen = document.getElementById('para-seventeen');
let paraEighteen = document.getElementById('para-eighteen');
let paraNineteen = document.getElementById('para-nineteen');
let paraTwenty = document.getElementById('para-twenty');
let paraTwentyOne = document.getElementById('para-twentyone');
let paraTwentyTwo = document.getElementById('para-twentytwo');
let paraTwentyThree = document.getElementById('para-twentythree');
//#endregion

//#region Rest_Paramters
//Rest Paramaters Example
function updateTag(element, ...carInfo)
{
    carInfo.forEach(id => 
            element.innerHTML +=  " " + id
        );
}
//#endregion

updateTag(paraOne,'GMC', 100, 200, 555);

//#region Destructing_Arrays 
//Destructing Arrays
let carIds = [12, 32, 43];
let car1, remainingCars;
//This is just a way to assign values to multiple variables
[car1, ...remainingCars] = carIds;

updateTag(paraTwo, car1, remainingCars);

let carVins = [1, 2, 3];
let car, car2, remainingCars1;

//Will skip the first vin #
[, car2, ...remainingCars1] = carVins;

updateTag(paraThree, car2, remainingCars1);
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
    updateTag(paraFive, id);
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
updateTag(paraSix, app1.getId());
//#endregion

//#region this keyword
let app2 = {
    carId: 456,
    getId: function() {
        return this.carId;
    }
};
updateTag(paraSeven, app2.getId());
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
updateTag(paraEight, app3.getId.call(newCar)); //987

//Apply
let app4 = {
    carId: 123,
    getId: function(prefix){
        return prefix + this.carId;
    }
};

let newCar1 = {carId: 678};
updateTag(paraNine, app4.getId.apply(newCar1, ['ID: '])); // ID: 678
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
updateTag(paraTen, newFn());
//#endregion 

//#region Arrow Functions
//No parameters
let getId = () => 123;
updateTag(paraEleven, getId());
//One parameter
let getId2 = prefix => prefix + 123;
updateTag(paraTwelve, getId2('ID: ')); //ID: 123
//Multiple parameters
let getId3 = (prefix, suffix) => prefix + 123 + suffix;
updateTag(paraThirteen, getId3('ID: ', '!'));
//Can specify more by using {}
let getId4 = (prefix, suffix) => {
    //Will need a return value
    return prefix + 123 + suffix;
};
updateTag(paraFourteen, getId4('Car ID: ', '!'));
//#endregion

//#region Default Parameters
let trackCar = function(element, carId, city='NY'){
    updateTag(element, `Tracking ${carId} in ${city}.`);
};

trackCar(paraFifteen, 62);
trackCar(paraSixteen, 64,'Chicago');
//#endregion

//#region Objects and Arrays
//Constructor Functions Without Prototypes
function SportCar(id){
    this.carId = id;
    this.start = function(){
        updateTag(paraEighteen, `Start Car: ${this.carId}`);
    };
}

let sportCar = new SportCar(999);
updateTag(paraSeventeen, sportCar.carId);
sportCar.start();

//Using a prototype 
function SUVCar(id){
    this.carId = id;
}

SUVCar.prototype.start= function(){
    updateTag(paraNineteen, `Start Car: ${this.carId}`);
};

let suvCar = new SUVCar(888);
suvCar.start();

//Expanding Objects Using Prototypes
String.prototype.hello = function(){
    return this.toString() + ' Hello';
};

updateTag(paraTwenty, 'Turtleman'.hello());

//JSON - JavaScript Object Notation Convert to JSON
//JavaScript literal example
let thisCar = {
    id: 123,
    style: 'convertible'
};

updateTag(paraTwentyOne, JSON.stringify(thisCar));

let moreCarIds = [
    {carId: 123},
    {carId: 456},
    {carId: 789}
];

updateTag(paraTwentyTwo, JSON.stringify(moreCarIds));

//Parsing JSON
let jsonIn =
`
    [
        {"carId" : 987},
        {"carId" : 654},
        {"carId" : 321}
    ]
`;
let evenMoreCarIds = JSON.parse(jsonIn);
updateTag(paraTwentyThree, JSON.stringify(evenMoreCarIds));
//#endregion

