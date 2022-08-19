# 😼 <i>CAT Express</i> 🚄

## 🐱🐈😸🐱‍👓😹🐱‍🐉😺🐱‍🏍😻😼🐱‍💻😽😾🐱‍🚀😿🐱‍👤🙀

<br>Assuming you've got `npm`, `typescript` and `Node` installed on your machine:</br>

## Set up

```
git clone https://github.com/4l3x91/expressapi.git
cd expressapi
npm install
```

## Build and run

```
tsc
npm run start
```

## Run dev

```
npm run dev
```

By default <i>`CatExpress`</i> runs on `localhost` and port `3000`
#
### `GET <host>/api/cats`
Returns all entries in `catsDB.json`
#
### `GET <host>/api/cats/id/abys`
Returns the cat object which has the id `abys`
#
### `GET <host>/api/cats/random`
Returns a random cat breed entry
#
### `GET <host>/api/cats/endpoints`
Returns the endpoints, and their descriptions.
#
### `POST <host>/api/cats`
Post a new cat object using the template:

```json
  "weight": {
    "imperial": "string",
    "metric": "string",
  },
  "id": "excb",
  "name": "Example cat breed",
  "temperament": "Confident, Playful",
  "origin": "Sweden",
  "description": "The most awesome cat breed. Ever.",
  "life_span": "20 - 30",
  "indoor": 4,
  "lap": 5,
  "adaptability": 5,
  "affection_level": 5,
  "child_friendly": 4,
  "cat_friendly": 4,
  "dog_friendly": 2,
  "energy_level": 4,
  "grooming": 2,
  "health_issues": 1,
  "intelligence": 5,
  "shedding_level": 1,
  "social_needs": 3,
  "stranger_friendly": 2,
  "vocalisation": 2,
  "experimental": 1,
  "hairless": 1,
  "natural": 1,
  "rare": 1,
  "rex": 1,
  "suppressed_tail": 1,
  "short_legs": 0,
  "hypoallergenic": 0,
  "image": "string",
```
#
### `PUT <host>/api/cats/<id>`
Modify a specific cat object's property values:

From

```json
  "energy_level": 1
```

To

```json
  "energy_level": 3
```
#
## Krav för godkänt
- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [ ] Datan som API:et hanterar sparas lokalt i serverfilen
- [ ] API'et ska svara med 404 om datan saknas.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil
- [ ] Uppgiften lämnas in i tid

## Krav för väl godkänt

- [ ] Alla punkter för godkänt är uppfyllda
- [ ] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [ ] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [ ] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
