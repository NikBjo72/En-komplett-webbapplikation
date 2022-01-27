import { global, setTimelineActive } from '../script/script.js';
import { editImage } from './editImage.js'

export async function listImages(inputDate, inputRover ) {

    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${inputRover}/photos?earth_date=${inputDate}&page=1&api_key=${global.nasa_api_key}`);
    let photoList = await response.json();
 
    setTimelineActive(global.stepThree);
    //console.log(photoList)
    
    global.dynamic.innerHTML="";
    for (let i = 0; i < 25; i++){
        global.dynamic.insertAdjacentHTML('beforeend',' \
            <div id="photo'+i+'"class="card gx-0 mx-2 my-2" style="width: 18rem;"> \
                <img class="card-img-top" src="'+photoList.photos[i].img_src+'" alt="Card image cap"> \
                <div class="card-body"> \
                    <h5 class="card-title"> \
                        '+photoList.photos[i].rover.name+' \
                    </h5> \
                    <p class="card-text"> \
                    <strong>Fotodatum: </strong>'+photoList.photos[i].earth_date+'.</br><strong>Kamera: </strong>'+photoList.photos[1].camera.full_name+' \
                    </p> \
                    <a onclick="editImage(&quot;'+photoList.photos[i].img_src+'&quot;)" class="btn btn-primary">Välj denna bilden</a> \
                </div> \
            </div>');
    }
}
window.editImage = editImage
