import { global, setTimelineActive } from '../script/script.js';
import { listImages } from './listImages.js';

export async function selectDateAndRoverSpec(rover) {
    // *** Variabler i detta scoop ***
    let pictureDate;
    let carosuelImageOne;
    let carosuelImageTwo;
    let carosuelImageThree;
    let carouselTextHeaderOne;
    let carouselTextOne;
    let carouselTextHeaderTwo;
    let carouselTextTwo;
    let carouselTextHeaderThree;
    let carouselTextThree;
    let newDate = new Date();
    let todayDateTime = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();

    // *** Texter till bilder -- en liten snabblösning ***
    if (rover === "Opportunity")
    {
        carouselTextHeaderOne = "October 01, 2002";
        carouselTextOne = "Artist&apos;s concept of controlling the rover from Earth, scientists drive the rover along Mars&apos; surface inspecting geological features."
        carouselTextHeaderTwo = "February 09, 2004";
        carouselTextTwo = "This false-color image taken by the panoramic camera onboard the Mars Exploration Rover Opportunity highlights the spherules that speckle the rock dubbed Stone Mountain. The colors in this picture were exaggerated or stretched to enhance the real difference in color between Stone Mountain and its collection of granular dots.";
        carouselTextHeaderThree = "August 02, 2004";
        carouselTextThree = "This self-portrait of NASA&apos;s Mars Exploration Rover Opportunity comes courtesy of the Sun and the rover&apos;s front hazard-avoidance camera. The dramatic snapshot of Opportunity&apos;s shadow was taken as the rover continues to move farther into &quot;Endurance Crater.&quot; The image was taken on sol 180 (July 26, 2004), a date that marks achievement of fully double the rover&apos;s primary 90-sol mission.";
        carosuelImageOne = "/img/opportunity_carousel_1024x461px_1.png";
        carosuelImageTwo = "/img/opportunity_carousel_1024x461px.png";
        carosuelImageThree = "/img/opportunity_carousel_1024x461px_2.png";
    }
    else if (rover === "Spirit")
    {
        carouselTextHeaderOne = "";
        carouselTextOne = ""
        carouselTextHeaderTwo = "The small spherules on the Martian surface in this close-up image are near Fram Crater, visited by NASA's Mars Exploration Rover Opportunity during April 2004. The area shown is 1.2 inches (3 centimeters) across. The view comes from the microscopic imager on Opportunity's robotic arm, with color information added from the rover's panoramic camera.";
        carouselTextTwo = "January 27, 2015";
        carouselTextHeaderThree = "November 21, 2005";
        carouselTextThree = "This synthetic image of the Spirit Mars Exploration Rover in the &quot;Columbia Hills&quot; was produced using &quot;Virtual Presence in Space&quot; technology. Developed at NASA's Jet Propulsion Laboratory, Pasadena, Calif., this technology combines visualization and image-processing tools with Hollywood-style special effects.";
        carosuelImageOne = "/img/spirit_carousel_1024x461px.png";
        carosuelImageTwo = "/img/spirit_carousel_1024x461px_1.png";
        carosuelImageThree = "/img/spirit_carousel_1024x461px_2.png";
    }
    else if (rover === "Curiosity")
    {
        carouselTextHeaderOne = "March 30, 2021";
        carouselTextOne = "NASA’s Curiosity Mars rover used two different cameras to create this selfie in front of Mont Mercou, a rock outcrop that stands 20 feet (6 meters) tall. The panorama is made up of 60 images taken by the Mars Hand Lens Imager (MAHLI) on the rover’s robotic arm on March 26, 2021, the 3,070th Martian day, or sol, of the mission. These were combined with 11 images taken by the Mastcam on the mast, or “head,” of the rover on March 16, 2021, the 3,060th Martian day of the mission."
        carouselTextHeaderTwo = "June 23, 2019";
        carouselTextTwo = "This image was taken by the left Navcam on NASA's Curiosity Mars rover on June 18, 2019, the 2,440th Martian day, or sol, of the mission. It shows part of &quot;Teal Ridge,&quot; which the rover has been studying within a region called the &quot;clay-bearing unit.&quot;";
        carouselTextHeaderThree = "November 23, 2021";
        carouselTextThree = "NASA’s Curiosity Mars rover used its black-and-white navigation cameras to capture panoramas of this scene at two times of day. Blue, orange, and green color was added to a combination of both panoramas for an artistic interpretation of the scene.";
        carosuelImageOne = "/img/curiosity_carousel_1024x461px.png";
        carosuelImageTwo = "/img/curiosity_carousel_1024x461px_1.png";
        carosuelImageThree = "/img/curiosity_carousel_1024x461px_2.png";
    }
    else if (rover === "Perseverance")
    {
        carouselTextHeaderOne = "June 15, 2020";
        carouselTextOne = "The Mars 2020 Perseverance rover's astrobiology mission will search for signs of ancient microbial life. It will also characterize the planet's climate and geology, collect samples for future return to Earth and pave the way for human exploration of the Red Planet."
        carouselTextHeaderTwo = "July 30, 2020";
        carouselTextTwo = "A United Launch Alliance (ULA) Atlas V rocket carrying the Mars 2020 mission with the Perseverance rover lifts off from Space Launch Complex-41 at 7:50 a.m. EDT on July 30, 2020.";
        carouselTextHeaderThree = "January 27, 2021 ";
        carouselTextThree = "This annotated mosaic depicts a possible route the Mars 2020 Perseverance rover could take across Jezero Crater as it investigates several ancient environments that may have once been habitable. The route begins at the cliffs defining the base of a delta produced by a river as it flowed into a lake that once filled the crater. The path then traverses up and across the delta toward possible ancient shoreline deposits, and then climbs the 2,000-foot-high (610-meter-high) crater rim to explore the surrounding plains.";
        carosuelImageOne = "/img/perseverance_carousel_1024x461px.png";
        carosuelImageTwo = "/img/perseverance_carousel_1024x461px_1.png";
        carosuelImageThree = "/img/perseverance_carousel_1024x461px_2.png";
    }

    setTimelineActive(global.stepTwo);

    // *** Fetch API Local **
    let response = await fetch('/api/Spacecrafts/rover?roverName='+rover+'&includePoem=true');
    let responseLocalApi = await response.json();

    // *** Fetch API NASA **
    let manifestResponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=XZ8Ryto558Nax2OqbPAJsYsSlx7J6qTqPOCcWusS`);
    let roverManifest = await manifestResponse.json();

    global.dynamic.innerHTML="";

    global.dynamic.insertAdjacentHTML('beforeend',` \
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"> \
            <ol class="carousel-indicators"> \
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> \
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> \
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> \
            </ol> \
            <div class="carousel-inner"> \
              <div class="carousel-item active"> \
                <img class="d-block w-100" src="${carosuelImageOne}" alt="First slide"> \
                <div class="carousel-caption d-none d-md-block"> \
                    <h5>${carouselTextHeaderOne}</h5> \
                    <p>${carouselTextOne}</p> \
                </div> \
              </div> \
              <div class="carousel-item"> \
                <img class="d-block w-100" src="${carosuelImageTwo}" alt="Second slide"> \
                <div class="carousel-caption d-none d-md-block"> \
                    <h5>${carouselTextHeaderTwo}</h5> \
                    <p>${carouselTextTwo}</p> \
            </div> \
              </div> \
              <div class="carousel-item"> \
                <img class="d-block w-100" src="${carosuelImageThree}" alt="Third slide"> \
                <div class="carousel-caption d-none d-md-block"> \
                    <h5>${carouselTextHeaderThree}</h5> \
                    <p>${carouselTextThree}</p> \
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
    `);

    global.dynamic.insertAdjacentHTML('beforeend',`
    <div class="row mt-3">
        <div id="poemContainer" class="col-md pb-3">
            <h5 class="pl-3">${rover}s diktsamling</h5>
            <p class="pl-3">Detta är dikter inskickade av människor som föjer ${rover}s ensamma uppdrag på planeten Mars. </p>
            <div id="overflowPoems" class="overflow-auto border">
                <div id="poemGroup" class="list-group">
                    
                </div>
            </div>
        </div>
        <div class="col-md">
        <h5 class="pl-3">Fakta om ${rover}</h5>
        <p class="pl-3">${responseLocalApi.description}</p>
        </div>
        <div id="choiseColumn" class="col-md">
                <h5>Välj datum för att hämta bilder</h5>
                <div class="col">
                    <div class="input-group date" id="datepicker">
                        <input type="text" class="form-control" id="date"/>
                        <span class="input-group-append">
                          <span class="input-group-text bg-light d-block">
                            <i class="fa fa-calendar"></i>
                          </span>
                        </span>
                    </div>
                    <div>För <strong>${rover}</strong> kan du välja att hämta bilder tagna under en dag, mellan datumen: ${roverManifest.photo_manifest.landing_date} och ${roverManifest.photo_manifest.max_date}.</div>
                    <button id="sendDate" onclick="" type="submit" class="btn btn-primary mt-3">Välj</button>
                </div>
        </div>
    </div>
    `);

    let date = document.getElementById('date');
    let poemGroup = document.getElementById('poemGroup');
    let choiseColumn = document.getElementById('choiseColumn');
    let selectDateBtn = document.getElementById('sendDate');

    //debugger;
    for (let i = 0; i < responseLocalApi.poems.length; i++)
    {
        let days = new Date(todayDateTime) - new Date(responseLocalApi.poems[i].createdDate);
        days = Math.round(days/86400000);
        console.log(days);

        poemGroup.insertAdjacentHTML('beforeend',`
            <div class="list-group-item list-group-item-action flex-column align-items-start active">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${responseLocalApi.poems[i].heading}</h5>
                    <small>${days} days ago</small>
                </div>
                <p class="mb-1">${responseLocalApi.poems[i].text}</p>
                <small>// ${responseLocalApi.poems[i].author}</small>
            </div>
        `);
    }

    selectDateBtn.addEventListener('click', async function() {
        pictureDate = date.value;
        //console.log(pictureDate);
        //console.log(rover);
        let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${pictureDate}&page=1&api_key=${global.nasa_api_key}`);
        let photoList = await response.json();

        if (photoList.photos.length === 0)
        {
            choiseColumn.insertAdjacentHTML('afterbegin','<div class="text-danger">Tyvärr finns det inga bilder detta datum. Välj ett annat datum och försök igen.</div>');
        }
        else {
        listImages(pictureDate, rover);
        }
    });

    $(function() {
        $('#datepicker')
        .datepicker({
            format: 'yyyy-mm-dd',
            //startDate: "2020-01-01", // Set min Date
            //endDate: "2020-01-10", // Set max Date
            startDate: `${roverManifest.photo_manifest.landing_date}`, // Set min Date
            endDate: `${roverManifest.photo_manifest.max_date}`, // Set max Date    
        });
    });
}