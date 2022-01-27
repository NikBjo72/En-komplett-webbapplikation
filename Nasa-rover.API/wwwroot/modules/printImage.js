import { sendApiRequest } from './apiCall.js';
import { global, setTimelineActive } from '../script/script.js';

export function printImage(imageUrl) {
    let readyCard = document.getElementById("demoCard");
    global.dynamic.innerHTML="";
    console.log(readyCard);
    global.dynamic.insertAdjacentHTML('beforeend', readyCard.innerHTML);
    setTimelineActive(global.stepFour);
}

