import { global, setTimelineActive } from '../script.js';
import { printImage } from './printImage.mjs';
import { makeTextResponsiveToContainer } from './makeTextResponsiveToContainer.mjs';

export function editImage(imageUrl) {
    global.dynamic.innerHTML="";
    global.dynamic.insertAdjacentHTML('beforeend', ' \
                <div id="demoCard" class="col-sm-6 mt-3"> \
                    <div id="card" style= "background-image: url(&apos;'+imageUrl+'&apos;)"> \
                        <div id="headline" class="text-light">Lorem Cursus Malesuada</div> \
                        <div id="cardText" class="text-light">Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</div> \
                    </div> \
                </div> \
                <div class="form-group col-sm-6 mt-3"> \
                    <label for="cardHeadlineInput">Rubrik</label> \
                    <input type="text" class="form-control" id="cardHeadlineInput" placeholder="Rubriktext"> \
                    <label for="exampleFormControlTextarea1">Inbjudningstext</label> \
                    <textarea class="form-control" id="cardBodyTextInput" rows="3"></textarea> \
                    <button id="editBtn" type="submitCardTextBtn" class="btn btn-primary mt-3">Skicka texten till kortet</button> \
                    <button id="printCardBtn" onclick="printImage()"type="submitCardTextBtn" class="btn btn-primary mt-3">Skriv ut kortet</button> \
                </div>');
    setTimelineActive(global.stepThree);
    makeTextResponsiveToContainer("card", "headline");
    makeTextResponsiveToContainer("card", "cardText");

    let bodyText = document.getElementById("cardBodyTextInput");
    let inputHeader = document.getElementById("cardHeadlineInput");
    let editBtn = document.getElementById("editBtn");
    let headline = document.getElementById("headline");
    let cardText = document.getElementById("cardText");

    editBtn.addEventListener("click", async () => {
        headline.innerText = inputHeader.value;
        cardText.innerText = bodyText.value;
    });

    window.printImage = printImage
}

