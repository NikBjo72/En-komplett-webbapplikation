//import { sendApiRequest } from './apiCall.js';
import { global, setTimelineActive } from '../script/script.js';

export function printImage(readyCard) {

    setTimelineActive(global.stepFive);

    global.dynamic.innerHTML="";

    global.dynamic.insertAdjacentHTML('beforeend', readyCard.innerHTML);

    let header = document.getElementById("headline");
    let text = document.getElementById("cardText");

    header.style.fontSize = '5.2vw';
    text.style.fontSize = '2vw';
    header.style.padding = "2rem 4rem 2rem 4rem";
    text.style.padding = "2rem 40px 2rem 40px";

    makeTextResponsiveToContainer("card", "headline");
    makeTextResponsiveToContainer("card", "cardText");

}

