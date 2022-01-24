
import { sendApiRequest } from './modules/apiCall.mjs';

import { listImages } from './modules/listImages.mjs';
//import { editImage } from './modules/editImage.mjs'

const global = {
    dynamic: document.getElementById('dynamic'),
    button: document.getElementById('button'),
    stepOne: document.getElementById('stepOne'),
    stepTwo: document.getElementById('stepTwo'),
    stepThree: document.getElementById('stepThree'),
    stepFour: document.getElementById('stepFour'),
    stepFive: document.getElementById('stepFive')
}
export { global };

var getinputDate;
var getRoverInput;

function ShowElement(stepOne) {
    setTimelineActive(stepOne);
    let dynamic = document.getElementById('dynamic');
    let createSelect = document.createElement('select');
    createSelect.id = "selectInput";
    let roverArray = ["Curiosity", "Spirit", "Opportunity"];
    
    for (let i = 0; i < roverArray.length; i++)
    {
        let option = document.createElement('option');
        option.innerHTML = roverArray[i];
        createSelect.appendChild(option);
    }
    
    dynamic.appendChild(createSelect);

    let createInput = document.createElement('input');
    createInput.placeholder = "MM-DD";
    createInput.id = "createInput";
    dynamic.appendChild(createInput);

    let createButton = document.createElement('button');
    createButton.innerText = "Nästa";
    createButton.id = "showElementButton"
    dynamic.appendChild(createButton);
}

ShowElement(stepOne);

let getNextButton = document.getElementById('showElementButton');

getNextButton.addEventListener("click", function(){
    
    getinputDate = createInput.value;
    getRoverInput = document.getElementById('selectInput').value;
    console.log(getinputDate);
    console.log(getRoverInput);
    listImages(getinputDate, getRoverInput);

});

$(function(){
    $('#datepicker').datepicker();
  });
    
export function setTimelineActive(element){ //Sätter timlinen till active för varje del parameter att skicka med: stepOne/stepTwo/stepThree/stepFour
    global.stepOne.style.backgroundColor = "#3b82f6";
    global.stepTwo.style.backgroundColor = "#3b82f6";
    global.stepThree.style.backgroundColor = "#3b82f6";
    global.stepFour.style.backgroundColor = "#3b82f6";
    global.stepFive.style.backgroundColor = "#3b82f6";
    
    element.style.backgroundColor = "black";
}