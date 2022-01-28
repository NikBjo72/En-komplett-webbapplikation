import { global, setTimelineActive } from '../script/script.js';
import { printImage } from './printImage.js';
import { makeTextResponsiveToContainer } from './makeTextResponsiveToContainer.js';

export function editImage(imageUrl) {
    global.selectedImageUrl = imageUrl;

    setTimelineActive(global.stepFour);

    global.dynamic.innerHTML="";

    // 

    global.dynamic.insertAdjacentHTML('beforeend', ' \
                <div id="demoCard" class="col-sm-6 mt-3"> \
                    <div id="card" style= "background-image: url(&apos;'+imageUrl+'&apos;)"> \
                        <div id="frameHolder" class=""> \
                        <img id="frameImage" class="" src="" alt=""></img> \
                        </div> \
                        <div id="headline" class="text-light">Lorem Cursus Malesuada</div> \
                        <div id="cardText" class="text-light">Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</div> \
                    </div> \
                </div> \
                <div class="form-group col-sm-6 mt-3"> \
                    <label for="cardHeadlineInput">Rubrik</label> \
                    <input type="text" class="form-control" id="cardHeadlineInput" placeholder="Rubriktext"> \
                    <label for="exampleFormControlTextarea1">Inbjudningstext</label> \
                    <textarea class="form-control" id="cardBodyTextInput" rows="3"></textarea> \
                    <button id="editBtn" type="submitCardTextBtn" class="btn btn-primary mt-3">Lägg texten på kortet</button> \
                    <button id="printCardBtn" onclick="printImage()" type="submitCardTextBtn" class="btn btn-primary mt-3 ml-3">Skriv ut kortet</button> \
                    <button id="removeFrameBtn" type="submitCardTextBtn" class="btn btn-primary mt-3 ml-3">Ta bort ram</button> \
                    \
                    <div class="row"> \
                        <div class="card mt-3 px-1 py-1 ml-3 mt-3" style="width: 12rem;"> \
                            <img class="card-img-top border bg-secondary" src="/img/planetFrame.png" alt="Card image cap"> \
                            <div class="card-body"> \
                                <h5 class="card-title">Planeter</h5> \
                                <a id="planetFrameBtn" class="btn btn-primary">Använd ram</a> \
                            </div> \
                        </div> \
                        <div class="card mt-3 px-1 py-1 ml-3 mt-3" style="width: 12rem;"> \
                            <img class="card-img-top border bg-secondary" src="/img/partyFrame.png" alt="Card image cap"> \
                            <div class="card-body"> \
                                <h5 class="card-title">Partyprylar</h5> \
                                <a id="partyFrameBtn" class="btn btn-primary">Använd ram</a> \
                            </div> \
                        </div> \
                        <div class="card mt-3 px-1 py-1 ml-3 mt-3" style="width: 12rem;"> \
                            <img class="card-img-top border bg-secondary" src="/img/modernFrame.png" alt="Card image cap"> \
                            <div class="card-body"> \
                                <h5 class="card-title">Partyprylar</h5> \
                                <a id="modernFrameBtn" class="btn btn-primary">Använd ram</a> \
                            </div> \
                        </div> \
                    </div> \
                </div>'
                );

    makeTextResponsiveToContainer("card", "headline");
    makeTextResponsiveToContainer("card", "cardText");

    let bodyText = document.getElementById("cardBodyTextInput");
    let inputHeader = document.getElementById("cardHeadlineInput");
    let frameImage = document.getElementById("frameImage");
    let editBtn = document.getElementById("editBtn");
    let removeFrameBtn = document.getElementById("removeFrameBtn");
    let planetFrameBtn = document.getElementById("planetFrameBtn");
    let partyFrameBtn = document.getElementById("partyFrameBtn");
    let modernFrameBtn = document.getElementById("modernFrameBtn");
    let headline = document.getElementById("headline");
    let cardText = document.getElementById("cardText");

    planetFrameBtn.addEventListener("click", async () => {
        frameImage.src="/img/planetFrame.png";
    });
    partyFrameBtn.addEventListener("click", async () => {
        frameImage.src="/img/partyFrame.png";
    });
    modernFrameBtn.addEventListener("click", async () => {
        frameImage.src="/img/modernFrame.png";
    });
    removeFrameBtn.addEventListener("click", async () => {
        frameImage.src="";
    });
    editBtn.addEventListener("click", async () => {
        headline.innerText = inputHeader.value;
        cardText.innerText = bodyText.value;
    });
}
window.printImage = printImage