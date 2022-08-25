<script lang="ts">
  import Slider from "@bulatdashiev/svelte-slider";
  let life_span = [5, 40];
  let weight = [3, 35];
  let breedName;
  let breedOrigin;

  let breedDescription;
  let breedImage;

  function grabRandomCatMoji() {
    let catArray = ["🐱", "😻", "😽", "😿", "😸", "😾", "🙀", "😹", "😼", "😺"];
    let randomCatIndex = Math.floor(Math.random() * catArray.length);
    var randomCat = catArray[randomCatIndex];
    return randomCat;
  }

  let traitsArray = [
    { name: "Intelligence", propName: "intelligence", value: [1, 5] },
    { name: "Health Issues", propName: "health_issues", value: [1, 5] },
    { name: "Energy Level", propName: "energy_level", value: [1, 5] },
    { name: "Adaptability", propName: "adaptability", value: [1, 5] },
    { name: "Grooming", propName: "grooming", value: [1, 5] },
    { name: "Affection", propName: "affection_level", value: [1, 5] },
  ];

  function setValues() {
    const cat = {
      weight: `${weight[0] + 5}-${weight[1] + 5}`,
      name: breedName,
      origin: breedOrigin,
      description: breedDescription,
      life_span: `${life_span[0] + 5}-${life_span[1] + 5}`,
      adaptability: traitsArray[3].value[0] + 1,
      affection_level: traitsArray[5].value[0] + 1,
      energy_level: traitsArray[2].value[0] + 1,
      grooming: traitsArray[4].value[0] + 1,
      health_issues: traitsArray[1].value[0] + 1,
      intelligence: traitsArray[0].value[0] + 1,
      image: breedImage,
    };
    return cat;
  }

  async function postKitty() {
    await fetch(`http://localhost:3000/api/cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setValues()),
    })
      .then((result) => {
        console.log("Completed with result:", result);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  let flags = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "The Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "The Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "Southe Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic Of North Macedonia ",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "South Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic ",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "The Holy See ",
    "The Marshall Islands",
    "Timor-Leste ",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
</script>

<div class="modal-cat-container">
  <div class="modal-cat-container d-flex">
    <div class="modal-cat-container-left w-100">
      <form on:submit|preventDefault={(e) => postKitty()}>
        <div class="breed-name-container">
          <div class="breed-name-text">Breed name</div>
          <div class="breed-input-container">
            <input
              class="breed-input"
              placeholder="Enter breed name"
              bind:value={breedName}
            />
          </div>
        </div>

        <div class="breed-origin-container">
          <div class="breed-origin-text">Breed origin</div>
          <div class="breed-origin-flag-container">
            <div class="breed-origin-flag-box">
              <img
                class="breed-origin-flag"
                src="https://countryflagsapi.com/png/{breedOrigin}"
                alt={breedOrigin}
              />
            </div>
            <div>
              <div>Select a country</div>
              <select bind:value={breedOrigin}>
                {#each flags as flag}
                  <option placeholder={flag} value={flag}>{flag}</option>
                {/each}
              </select>
            </div>
          </div>
        </div>

        <div class="breed-traits-text">Breed traits</div>
        <div class="traits-container">
          {#each traitsArray as item}
            <div class="trait-container">
              <div class="trait-box">
                <div class="trait-text">
                  {item.name}
                </div>
                <Slider
                  bind:value={item.value}
                  min="0"
                  max="4"
                  step="1"
                  name={item.propName}
                >
                  <span>{grabRandomCatMoji()}</span>
                  <div class="slider-text">
                    {item.value[0] + 1}
                  </div>
                </Slider>
              </div>
            </div>
          {/each}
        </div>

        <div class="weight-container">
          <div class="breed-title">Weight</div>
          <div>
            <Slider
              bind:value={weight}
              max="40"
              range
              on:input={(e) => {
                if (weight[0] > weight[1]) weight.sort();
                if (weight[1] < weight[0]) weight.sort();
                console.log(e.detail);
              }}
            >
              <div slot="left">
                <span>{grabRandomCatMoji()}</span>
                <div class="slider-text">
                  {weight[0] + 5}
                </div>
              </div>
              <div slot="right">
                <span>{grabRandomCatMoji()}</span>
                <div class="slider-text">
                  {weight[1] + 5}
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div class="life-span-container">
          <div class="breed-title">Life Span</div>
          <div>
            <Slider
              bind:value={life_span}
              max="40"
              range
              on:input={(e) => {
                if (life_span[0] > life_span[1]) life_span.sort();
                if (life_span[1] < life_span[0]) life_span.sort();
                console.log(e.detail);
              }}
            >
              <div slot="left">
                <span>{grabRandomCatMoji()}</span>
                <div class="slider-text">
                  {life_span[0] + 5}
                </div>
              </div>
              <div slot="right">
                <span>{grabRandomCatMoji()}</span>
                <div class="slider-text">
                  {life_span[1] + 5}
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div class="breed-image-container">
          <div class="breed-image-text">Image link</div>
          <div class="breed-input-container">
            <input
              class="image-input w-100"
              placeholder="Enter breed name"
              bind:value={breedImage}
            />
          </div>
        </div>

        <div class="breed-description-container">
          <div class="breed-description-text">Breed description</div>
          <div class="breed-input-container">
            <textarea
              class="breed-input breed-description-input"
              placeholder="Enter breed description"
              bind:value={breedDescription}
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  </div>
</div>

<style>
  button {
  }
  .breed-image-container {
    padding: 20px 0;
  }
  form {
    padding: 10px;
    margin-bottom: 10px;
  }
  .weight-container,
  .life-span-container {
    padding: 10px 0;
  }
  .slider-text {
    position: absolute;
    left: 0;
    right: 0;
  }
  .d-flex {
    display: flex;
  }

  .w-100 {
    width: 100%;
  }

  .breed-description-input {
    resize: none;
    height: 200px;
    width: 100%;
  }

  .breed-name-container,
  .breed-origin-container,
  .breed-description-container,
  .breed-traits-text,
  .breed-image-text {
    text-align: left;
  }

  .breed-description-container textarea {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .breed-description-container textarea,
  .breed-input,
  .image-input {
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid #8f8f9d;
    padding: 10px;
  }

  .breed-name-text,
  .breed-origin-text,
  .breed-traits-text,
  .breed-description-text,
  .breed-image-text {
    padding: 10px 0;
    font-size: 22px;
  }

  .breed-origin-container {
    padding: 10px 0;
  }

  .breed-input {
    font-size: 20px;
  }

  .breed-origin-text {
    padding: 10px 0;
  }

  .breed-origin-flag-container {
    display: flex;
    gap: 1rem;
    height: 85px;
    align-items: center;
  }

  .breed-origin-flag-box {
    display: flex;
    align-items: center;
  }

  .breed-origin-flag {
    width: 80px;
    align-content: center;
    display: flex;
  }

  .traits-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .trait-container {
    display: flex;
    justify-content: space-around;
  }

  .trait-box {
    text-align: center;
    width: 100%;
  }

  .trait-text,
  .breed-title {
    font-size: 18px;
  }

  .traits-container {
    cursor: default;
    user-select: none;
  }

  span {
    cursor: pointer;
    font-size: 1.75rem;
  }
</style>
