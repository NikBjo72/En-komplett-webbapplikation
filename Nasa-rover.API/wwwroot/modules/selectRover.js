import { global, setTimelineActive } from '../script/script.js';
import { selectDateAndRoverSpec } from './selectDateAndRoverSpec.js'

export async function selectRover() {
    setTimelineActive(stepOne);

    let response = await fetch('/api/Spacecrafts/');
    let roverInfo = await response.json();
    //console.log(roverInfo);

    global.dynamic.innerHTML="";
    for (let i = 0; i < roverInfo.length; i++)
    {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverInfo[i].name}?&api_key=XZ8Ryto558Nax2OqbPAJsYsSlx7J6qTqPOCcWusS`)
        .then(response => response.json())
        .then(roverManifest => {
            //console.log(roverManifest);

            global.dynamic.insertAdjacentHTML('beforeend',' \
            <div id="photo'+i+'"class="card gx-0 mx-2 my-2" style="width: 18rem;"> \
                <img class="card-img-top" src="'+roverInfo[i].smallImageUrl+'" alt="Bild '+roverInfo[i].name+'"> \
                <div class="card-body"> \
                    <h5 class="card-title"> \
                        '+roverInfo[i].name+' \
                    </h5> \
                    <p class="card-text"> \
                    '+roverInfo[i].shortDescription+' \
                    </br><strong>Landningsdaum: </strong>'+roverManifest.photo_manifest.landing_date+' \
                    </br><strong>Senaste fotot taget: </strong>'+roverManifest.photo_manifest.max_date+' \
                    </br><strong>Status: </strong>'+roverManifest.photo_manifest.status+' \
                    </br><strong>Antal tagna bilder: </strong>'+roverManifest.photo_manifest.total_photos+' st \
                    </p> \
                    <a onclick="selectDateAndRoverSpec(&quot;'+roverInfo[i].name+'&quot;)" class="btn btn-primary">Välj</a> \
                </div> \
            </div>');
        })
    }
}
window.selectDateAndRoverSpec = selectDateAndRoverSpec