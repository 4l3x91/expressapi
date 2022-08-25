# 😼 <i>CAT Express</i> 🚄

## 🐱🐈😸🐱‍👓😹🐱‍🐉😺🐱‍🏍😻😼🐱‍💻😽😾🐱‍🚀😿🐱‍👤🙀

<br>Assuming you've got `npm`, `typescript` and `Node` installed on your machine:</br>

# Server

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

### `GET <host>/api/cats/endpoints`

Returns the endpoints, and their descriptions.

#

### `POST <host>/api/cats`

Post a new cat object using the template:

```json
    "weight": "3 - 5",
    "name": "Abyssinian",
    "origin": "Egypt",
    "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    "life_span": "14 - 15",
    "adaptability": 5,
    "affection_level": 5,
    "energy_level": 5,
    "grooming": 1,
    "health_issues": 2,
    "intelligence": 5,
    "image": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
```

#

### `PUT <host>/api/cats/<id>`

Modify an already existing cat breed.

#
# Client
## <i>TODO</i>

#

## Krav för godkänt

- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen
- [x] API'et ska svara med 404 om datan saknas.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil
- [ ] Uppgiften lämnas in i tid

## Krav för väl godkänt

- [ ] Alla punkter för godkänt är uppfyllda
- [x] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [ ] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
