

import { listImages } from '../modules/listImages.js';
import { selectRover } from '../modules/selectRover.js';

const global = {
    dynamic: document.getElementById('dynamic'),
    button: document.getElementById('button'),
    stepOne: document.getElementById('stepOne'),
    stepTwo: document.getElementById('stepTwo'),
    stepThree: document.getElementById('stepThree'),
    stepFour: document.getElementById('stepFour'),
    stepFive: document.getElementById('stepFive'),
    nasa_api_key: "XZ8Ryto558Nax2OqbPAJsYsSlx7J6qTqPOCcWusS"
}
export { global };

selectRover();

export function setTimelineActive(element){ //Sätter timlinen till active för varje del parameter att skicka med: stepOne/stepTwo/stepThree/stepFour
    global.stepOne.style.backgroundColor = "#3b82f6";
    global.stepTwo.style.backgroundColor = "#3b82f6";
    global.stepThree.style.backgroundColor = "#3b82f6";
    global.stepFour.style.backgroundColor = "#3b82f6";
    global.stepFive.style.backgroundColor = "#3b82f6";
    
    element.style.backgroundColor = "black";
}