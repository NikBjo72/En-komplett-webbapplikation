import { sendApiRequest } from './apiCall.mjs';
import { global, setTimelineActive } from '../script.js';
import { editImage } from './editImage.mjs'


export async function listImages(inputDate, inputRover ) {

    
        setTimelineActive(global.stepTwo);
        let photoList = await sendApiRequest(inputDate, inputRover);
        console.log(photoList)
        global.dynamic.innerHTML="";
        for (let i = 0; i < 25; i++){
            global.dynamic.insertAdjacentHTML('beforeend',' \
                <div id="photo'+i+'"class="card gx-0 mx-2 my-2" style="width: 18rem;"> \
                    <img class="card-img-top" src="'+photoList.photos[i].img_src+'" alt="Card image cap"> \
                    <div class="card-body"> \
                        <h5 class="card-title"> \
                            Rover: '+photoList.photos[i].rover.name+' \
                        </h5> \
                        <p class="card-text"> \
                            Denna rover är just nu <strong>'+photoList.photos[i].rover.status+'</strong>. Kameran som fotot är taget med är: <strong>'+photoList.photos[1].camera.full_name+'</strong> \
                        </p> \
                        <a onclick="editImage(&quot;'+photoList.photos[i].img_src+'&quot;)" class="btn btn-primary">Välj denna bilden</a> \
                    </div> \
                </div>');
        }

    
}
window.editImage = editImage
