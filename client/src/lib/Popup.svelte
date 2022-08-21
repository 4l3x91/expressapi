<script lang="ts">
  export let specificCat;
  console.log(specificCat);
  let countryFlag;
  function checkFlag() {
    if (specificCat.origin === "Russia") countryFlag = "rus";
    else if (specificCat.origin === "Iran (Persia)") countryFlag = "Iran";
    else if (specificCat.origin === "Burma") countryFlag = "Myanmar";
    else countryFlag = specificCat.origin;
    return countryFlag;
  }
  const mapCatStats = {
    0: 0,
    1: 20,
    2: 40,
    3: 60,
    4: 80,
    5: 100,
  };
</script>

<!-- <div class="img-container"><img src={specificCat.image} width="100%;" alt="" /></div> -->
<div class="modal-cat-container">
  <div class="modal-cat-container" style="display: flex;">
    <div class="modal-cat-container-left" style="width: 100%">
      <div style="padding: 10px; text-align: left;">
        The
        <div
          style="text-transform: uppercase; font-size: 32px; line-height: .9;"
        >
          {specificCat.name}
        </div>
        <div
          style="text-align: left;
          font-size: 14px;
          font-family: Arial;
          font-style: italic;
          width: 80%;"
        >
          "{specificCat.temperament}"
        </div>
        <img
          src="https://countryflagsapi.com/png/{checkFlag()}"
          alt=""
          style="width: 120px;margin-top: 10px;"
        />
      </div>
      <div class="breed-characteristics">
        <div
          style="padding: 10px;
        font-size: 24px;
        text-align: left;"
        >
          Characteristics
        </div>
        <!-- move to list and loop to create this part -->
        <div class="breed-trait-container">
          <div>Intelligence</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.intelligence]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Health Issues</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.health_issues]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Energy Level</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.energy_level]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Child Friendly</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.child_friendly]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Dog Friendly</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.dog_friendly]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Cat Friendly</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.cat_friendly]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Adaptability</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.adaptability]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Grooming</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.grooming]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Affection</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.affection_level]}%;"
              />
            </div>
          </div>
        </div>
        <!-- move to list and loop to create this part -->
      </div>
    </div>
    <div class="modal-cat-container-right" style="width: 100%">
      <div
        style="
    background: #0c0c0c;
    background-image: url('{specificCat.image}');
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: cover;
    background-origin: padding-box;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-origin: content-box;
  background-repeat: no-repeat;
  max-height: 400px;"
      />
      <div class="breed-details">
        <div style="padding: 10px;font-size: 24px;text-align: left;">
          Breed Details
        </div>
        <div
          style="display: flex;justify-content: space-between;text-align: right;padding: 10px;"
        >
          <div style="color: rgb(198, 198, 198);font-size: 14px;">WEIGHT</div>
          <div>{specificCat.weight}</div>
        </div>
        <div
          style="display: flex;justify-content: space-between;text-align: right;border-top: 1px solid #b5b5b5;border-bottom: 1px solid #b5b5b5;padding: 10px;"
        >
          <div style="font-size: 14px;color: rgb(198, 198, 198);">LIFESPAN</div>
          <div>{specificCat.life_span} years</div>
        </div>
        <div
          style="display: flex;justify-content: space-between;text-align: right;padding: 10px;"
        >
          <div style="color: rgb(198, 198, 198);font-size: 14px;">ORIGIN</div>
          <div>{specificCat.origin}</div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div
      style="padding: 10px;
    font-size: 24px;
    text-align: left;"
    >
      About
    </div>
    <div style="text-align: left; padding: 10px;">
      {specificCat.description}
    </div>
  </div>
</div>

<!-- <div>{specificCat.temperament}</div> -->
<!-- <div>{specificCat.description}</div> -->

<!-- 
<div>{specificCat.indoor}</div> 0/1
<div>{specificCat.lap}</div>
<div>{specificCat.adaptability}</div>
<div>{specificCat.affection_level}</div>
<div>{specificCat.child_friendly}</div>
<div>{specificCat.dog_friendly}</div>
<div>{specificCat.energy_level}</div>
<div>{specificCat.grooming}</div>
<div>{specificCat.health_issues}</div>
<div>{specificCat.intelligence}</div>
<div>{specificCat.shedding_level}</div>
<div>{specificCat.social_needs}</div>
<div>{specificCat.bidability}</div>
<div>{specificCat.stranger_friendly}</div>
<div>{specificCat.vocalisation}</div>
<div>{specificCat.experimental}</div> 0/1
<div>{specificCat.hairless}</div> 0/1
<div>{specificCat.natural}</div> 0/1
<div>{specificCat.rare}</div> 0/1
<div>{specificCat.rex}</div> 0/1
<div>{specificCat.suppressed_tail}</div> 0/1
<div>{specificCat.short_legs}</div> 0/1
<div>{specificCat.hypoallergenic}</div> 0/1-->
<style>
  .breed-trait-container {
    text-align: left;
    padding: 10px;
    padding-bottom: 0px;
  }

  .progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    /* padding: 3px; */
    border-radius: 0.3rem;
    /* box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); */
  }

  .progress-bar-fill {
    display: block;
    height: 16px;
    background-color: #697a88;
    border-radius: 0.3rem;

    transition: width 500ms ease-in-out;
  }
</style>
