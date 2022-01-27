import { global } from '../script/script.js';

 export async function sendApiRequest(dateAPI, rover) {
        

        let dateYear = "";

        if (rover === "Curiosity") {
            dateYear = "2021-";
        } else if (rover === "Spirit") {
            dateYear = "2005-";
        } else if (rover === "Opportunity") {
            dateYear = "2007-";
        }

        let apiDate = dateYear + dateAPI;
        let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${apiDate}&page=1&api_key=${global.nasa_api_key}`);
        let data = await response.json();
        console.log(data);

        return data;
    }
