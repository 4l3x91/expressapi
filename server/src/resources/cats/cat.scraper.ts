import { saveToFile } from "../data/data.handler";

const fs = require("fs");

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
    "alt_names"
  ];

  for (let index = 0; index < data.length; index++) {
    let currentObj = data[index];

    if(currentObj.weight) currentObj.weight = currentObj.weight.metric + "kg";
    else currentObj.weight = "N/A";

    if(currentObj.image) currentObj.image = currentObj.image.url;
    else currentObj.image = './src/resources/assets/img/default_cat.png';

    for (let i = 0; i < deletePropList.length; i++) {
      delete currentObj[deletePropList[i]];
    }
    
    console.log(`${currentObj.name} has been cleaned!`);
  }
}
