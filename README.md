# ð¼ <i>CAT Express</i> ð

## With CatExpress you can Create, Read, Update and Delete cat breeds

## Features
### ð½Add breed 
- Add a breed by clicking on the big plus button which says "Add Breed".
- Fill out the information.
- If you leave the image field blank, a default cat image will be used.
- Click Submit.
- A toast message will tell you the breed has been added.

### ð Edit breed 
- Edit a breed by clicking on the cat breed you want to edit, in the grid.
- Click the edit button (ð) on the top left.
- Edit the form to your needs.
- Click submit.
- A toast message will tell you the breed has been updated.

### ð¿ Delete breed 
- Delete a breed by clicking on the breed you want to delete, in the grid.
- Click the delete button (ðï¸) on the top left.
- A toast message will tell you the breed has been deleted.

### ð» Search breed 
- Click the search bar on the top left to find a specific cat breed.
- Search filters out breeds based on breed names.

### ð±â CatExpress data 
- The origin flags shown in CatExpress come from https://www.countryflagsapi.com/
- The breeds that are fetched if `catsDB.json` does not exist, come from https://api.thecatapi.com/v1/breeds

### CatExpress consists of a server side and a client side
- The server side is built on TypeScript using Express.
- The client side is built on Svelte using Vite. 
- By default the CatExpress server runs on `localhost` and port `3000`


#
## Requirements
```
Node.js
npm
```
# Project
## Set up
```
git clone https://github.com/4l3x91/expressapi.git
```
# Server
## Set up
```
cd server
npm install
```
## Build and run
```
tsc
npm run start
```

## Run dev (nodemon)
```
npm run dev
```

## Endpoints

| Method   | URL                    | Description                       |
| -------- | -----------------------| ----------------------------------|
| `GET`    | `/api/cats/`           | Retrieve all cat breeds.          |
| `GET`    | `/api/cats/id/abys`    | Retrieve breed with id "abys".    |
| `PUT`    | `/api/cats/abys`       | Update breed with id "abys".      |
| `POST`   | `/api/cats/`           | Add a new breed.                  |
| `DELETE` | `/api/cats/id/abys`    | Delete breed with id "abys".      |
#

# Client
## Set up
```
cd client
npm install
```
## Build (vite build)
```
npm run build
```
## Run (vite)
```
npm run dev
```
#

## Krav fÃ¶r godkÃ¤nt

- [x] Projektet innehÃ¥ller minst 4 st. endpoints (GET, POST, PUT & DELETE fÃ¶r en resurs)
- [x] Samtliga endpoints skall kunna nÃ¥s via en REST Client fil (.rest|.http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen
- [x] API'et ska svara med 404 om datan saknas.
- [x] Git & GitHub har anvÃ¤nts
- [x] Projektmappen innehÃ¥ller en README.md fil
- [x] Uppgiften lÃ¤mnas in i tid

## Krav fÃ¶r vÃ¤l godkÃ¤nt

- [x] Alla punkter fÃ¶r godkÃ¤nt Ã¤r uppfyllda
- [x] All data skall vara sparad i en JSON-fil istÃ¤llet fÃ¶r i serverfilen
- [x] Datan i JSON-filen skall uppdateras dÃ¥ nÃ¥got lÃ¤ggs till, uppdateras eller tas bort
- [x] Ett klient-grÃ¤nssnitt skall byggas fÃ¶r att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulÃ¤r skall fyllas i med befintlig information.
- [x] Ytterligare en GET endpoint skall lÃ¤ggas till dÃ¤r det gÃ¥r att hÃ¤mta ett specifikt objekt
