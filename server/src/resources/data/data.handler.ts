import fs from "fs";
import { Cat } from "../cats/cat.model";
import { initCatAPI } from "../cats/cat.scraper";

export let cats: Cat[] = [];

export const dbPath = "src/resources/data/catsDB.json";

if (!fs.existsSync(dbPath) || fs.readFileSync(dbPath).length === 0) initCatAPI();

export async function jsonReader(filePath: string) {

    fs.readFile(filePath, 'utf-8', (err, fileData) => {
    if(err) err;
    else {
        try{
            const parsedFile = JSON.parse(fileData);
            cats = parsedFile;
            return parsedFile;
        }
        catch(err) {
            return err;
        }
    }
});
};

export async function saveToFile(data) {
    await fs.writeFile(dbPath, JSON.stringify(data, null, "\t"), (err) => {
      if (err) console.log(err);
      else console.log("Save done.")
    });
  }