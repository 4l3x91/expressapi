# 😼 <i>CAT Express</i> 🚄

## With CatExpress you can Create, Read, Update and Delete cat breeds

## Features
### 😽Add breed 
- Add a breed by clicking on the big plus button which says "Add Breed".
- Fill out the information.
- If you leave the image field blank, a default cat image will be used.
- Click Submit.
- A toast message will tell you the breed has been added.

### 🙀 Edit breed 
- Edit a breed by clicking on the cat breed you want to edit, in the grid.
- Click the edit button (📝) on the top left.
- Edit the form to your needs.
- Click submit.
- A toast message will tell you the breed has been updated.

### 😿 Delete breed 
- Delete a breed by clicking on the breed you want to delete, in the grid.
- Click the delete button (🗑️) on the top left.
- A toast message will tell you the breed has been deleted.

### 😻 Search breed 
- Click the search bar on the top left to find a specific cat breed.
- Search filters out breeds based on breed names.

### 🐱‍ CatExpress data 
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

## Krav för godkänt

- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen
- [x] API'et ska svara med 404 om datan saknas.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil
- [x] Uppgiften lämnas in i tid

## Krav för väl godkänt

- [x] Alla punkter för godkänt är uppfyllda
- [x] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
