//import { sendApiRequest } from './apiCall.js';
import { global, setTimelineActive } from '../script/script.js';

export function printImage(imageUrl) {

    setTimelineActive(global.stepFour);

    global.dynamic.innerHTML="";

    let readyCard = document.getElementById("demoCard");

    //console.log(readyCard);
    global.dynamic.insertAdjacentHTML('beforeend', readyCard.innerHTML);
}

