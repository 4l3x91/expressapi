import fs from "fs";
import { Cat } from "../cats/cat.model";
import { initCatAPI } from "../cats/cat.scraper";

export let cats: Cat[] = [];

const dbPath = "src/resources/data/catsDB.json";

// Move this
jsonReader(dbPath);

// Also move this?
if (!fs.existsSync(dbPath) || fs.readFileSync(dbPath).length === 0) initCatAPI();

export function jsonReader(filePath: string) {

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

// TODO: Move saveFile() here