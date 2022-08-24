import { port, url } from "../../server";
import { saveToFile } from "../data/data.handler";

export async function initCatAPI() {
  let response = await fetch("https://api.thecatapi.com/v1/breeds");
  let dataResult = await response.json();

  await cleanUpData(dataResult);
  await saveToFile(dataResult);
}

async function cleanUpData(data) {
  let deletePropList = [
    "vetstreet_url",
    "vcahospitals_url",
    "country_codes",
    "country_code",
    "cfa_url",
    "reference_image_id",
    "wikipedia_url",
    "alt_names",
    "indoor",
    "child_friendly",
    "dog_friendly",
    "shedding_level",
    "social_needs",
    "stranger_friendly",
    "vocalisation",
    "experimental",
    "hairless",
    "natural",
    "rare",
    "rex",
    "suppressed_tail",
    "short_legs",
    "temperament",
    "lap",
    "hypoallergenic"
  ];


  for (let index = 0; index < data.length; index++) {
    let currentObj = data[index];

    if(currentObj.weight) currentObj.weight = currentObj.weight.metric;
    else currentObj.weight = "N/A";

    if(currentObj.image) currentObj.image = currentObj.image.url;
    else currentObj.image = `${url}${port}/img/default_cat.png`;

    for (let i = 0; i < deletePropList.length; i++) {
      delete currentObj[deletePropList[i]];
    }
    
    console.log(`${currentObj.name} has been cleaned!`);
  }
}
