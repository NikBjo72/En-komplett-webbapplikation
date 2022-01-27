import { global, setTimelineActive } from '../script/script.js';

export async function selectDateAndRoverSpec(rover) {

    setTimelineActive(global.stepTwo);

    let response = await fetch('/api/Spacecrafts/rover?roverName='+rover+'');
    let data = await response.json();
    console.log(data);

    global.dynamic.innerHTML="";

    global.dynamic.insertAdjacentHTML('beforeend',' \
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"> \
            <ol class="carousel-indicators"> \
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> \
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> \
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> \
            </ol> \
            <div class="carousel-inner"> \
              <div class="carousel-item active"> \
                <img class="d-block w-100" src="/img/opportunity_carousel_1024x461px_1.png" alt="First slide"> \
                <div class="carousel-caption d-none d-md-block"> \
                    <h5>October 01, 2002</h5> \
                    <p>Artist&apos;s concept of controlling the rover from Earth, scientists drive the rover along Mars&apos; surface inspecting geological features.</p> \
                </div> \
              </div> \
              <div class="carousel-item"> \
                <img class="d-block w-100" src="/img/opportunity_carousel_1024x461px.png" alt="Second slide"> \
                <div class="carousel-caption d-none d-md-block"> \
                    <h5>February 09, 2004</h5> \
                    <p>This false-color image taken by the panoramic camera onboard the Mars Exploration Rover Opportunity highlights the spherules that speckle the rock dubbed Stone Mountain. The colors in this picture were exaggerated or stretched to enhance the real difference in color between Stone Mountain and its collection of granular dots.</p> \
                </div> \
              </div> \
              <div class="carousel-item"> \
                <img class="d-block w-100" src="/img/opportunity_carousel_1024x461px_2.png" alt="Third slide"> \
                <div class="carousel-caption d-none d-md-block"> \
                    <h5>August 02, 2004</h5> \
                    <p>This self-portrait of NASA&apos;s Mars Exploration Rover Opportunity comes courtesy of the Sun and the rover&apos;s front hazard-avoidance camera. The dramatic snapshot of Opportunity&apos;s shadow was taken as the rover continues to move farther into "Endurance Crater." The image was taken on sol 180 (July 26, 2004), a date that marks achievement of fully double the rover&apos;s primary 90-sol mission.</p> \
                </div> \
              </div> \
            </div> \
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> \
              <span class="carousel-control-prev-icon" aria-hidden="true"></span> \
              <span class="sr-only">Previous</span> \
            </a> \
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> \
              <span class="carousel-control-next-icon" aria-hidden="true"></span> \
              <span class="sr-only">Next</span> \
            </a> \
        </div> \
    ');

    global.dynamic.insertAdjacentHTML('beforeend',' \
    <div class="row"> \
    <div class="col-4 bg-primary" style="height: 100px"> </div> \
    <div class="col-4 bg-secondary" style="height: 100px"> </div> \
    <div class="col-4 bg-danger" style="height: 500px"> \
        <label for="date">Välj datum för att hämta bilder</label> \
            <div class="col"> \
                <div class="input-group date" id="datepicker"> \
                    <input type="text" class="form-control" id="date"/> \
                    <span class="input-group-append"> \
                      <span class="input-group-text bg-light d-block"> \
                        <i class="fa fa-calendar"></i> \
                      </span> \
                    </span> \
                </div> \
                <button id="sendDate" onclick="" type="submit" class="btn btn-primary mt-3">Välj</button> \
            </div> \
        </div> \
    </div> \
    ');

    $(function() {
        $('#datepicker')
        .datepicker({
            todayHighlight: true,
            disable: [
            { from: [2022,1,1], to: [2022,1,10] }
            ]  
        });
    });
}