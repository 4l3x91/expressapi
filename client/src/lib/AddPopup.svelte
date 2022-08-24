<script lang="ts">
  import Slider from "@bulatdashiev/svelte-slider";
  let breedName;
  let breedOrigin;

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
      weight: "15 - 20",
      name: breedName,
      origin: breedOrigin,
      description: "The awesome cat is an awesome cat",
      life_span: "20 - 30",
      adaptability: traitsArray[3].value[0] + 1,
      affection_level: traitsArray[5].value[0] + 1,
      energy_level: traitsArray[2].value[0] + 1,
      grooming: traitsArray[4].value[0] + 1,
      health_issues: traitsArray[1].value[0] + 1,
      intelligence: traitsArray[0].value[0] + 1,
      social_needs: traitsArray[0].value[0] + 1,
      image:
        "https://seniordeal.se/app/uploads/articleimages/katter-383607-unsplash.jpg",
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
  <div class="modal-cat-container" style="display: flex;">
    <div class="modal-cat-container-left" style="width: 100%">
      <form on:submit|preventDefault={(e) => postKitty()}>
        <div style="padding: 10px; text-align: left;">
          The
          <div>
            <input
              style="font-size: 32px; line-height: .9;"
              bind:value={breedName}
            />
          </div>
          <select bind:value={breedOrigin}>
            {#each flags as flag}
              <option placeholder={flag} value={flag}>{flag}</option>
            {/each}
          </select>
          <img
            src="https://countryflagsapi.com/png/{breedOrigin}"
            alt=""
            style="width: 60px;margin-top: 10px;"
          />
        </div>

        {#each traitsArray as item}
          <div class="trait-container">
            <div style="text-align: left;">
              <div>
                {item.name}
              </div>
              <Slider
                bind:value={item.value}
                min="0"
                max="4"
                step="1"
                name={item.propName}
              >
                <span style="font-size: 1.5rem">{grabRandomCatMoji()}</span>
              </Slider>
            </div>
            <div class="trait-value-container" style="display:flex;">
              <div class="trait-value-box">
                {item.value[0] + 1}
              </div>
            </div>
          </div>
        {/each}
        <button>Submit</button>
      </form>
    </div>
  </div>
</div>

<style>
  .trait-value-box {
    align-self: center;
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    border-radius: 0.3rem;
    font-size: 24px;
    width: 30px;
    border: 1px solid #0c0c0c;
    box-shadow: 1px 1px black;
    background: #2b2a33;
  }

  .trait-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
</style>
