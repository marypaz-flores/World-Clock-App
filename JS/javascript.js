let mexicoCityHtml = `
  <div class="city" id="mexico-city">
    <div>
    <h2>Mexico City</h2>
    <div class="date"></div>
    </div>
    <div class="time"></div>
  </div>
`;

let parisCityHtml = `
  <div class="city" id="paris">
    <div>
    <h2>Paris</h2>
    <div class="date"></div>
    </div>
    <div class="time"></div>
 </div>
`;

function updateTime() {
  //Mexico City
  let mexicoElement = document.querySelector("#mexico-city");

  if (mexicoElement) {
    let mexicoDateElement = mexicoElement.querySelector(".date");
    let mexicoTimeElement = mexicoElement.querySelector(".time");
    let mexicoTime = moment().tz("America/Mexico_City");

    mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
    mexicoTimeElement.innerHTML = mexicoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");

  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone;
  if (event && event.target) {
    cityTimeZone = event.target.value;
  } else {
    cityTimeZone = document.querySelector("#city").value;
  }

  if (!cityTimeZone) return;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <div class="all-cities" id="all-cities">All cities</div>`;

  let allCitiesElement = document.querySelector("#all-cities");
  if (allCitiesElement) {
    allCitiesElement.addEventListener("click", function () {
      let citiesElement = document.querySelector("#cities");
      citiesElement.innerHTML = mexicoCityHtml + parisCityHtml;
      updateTime();

      let citiesSelectElement = document.querySelector("#city");
      if (citiesSelectElement) {
        citiesSelectElement.value = ""; // Establece el valor a la opción predeterminada
      }
    });
  }
}

function setupEventListeners() {
  let citiesSelectElement = document.querySelector("#city");
  if (citiesSelectElement) {
    citiesSelectElement.addEventListener("change", updateCity);
  }
}

function initializeView() {
  let citiesElement = document.querySelector("#cities");
  if (citiesElement) {
    citiesElement.innerHTML = mexicoCityHtml + parisCityHtml;
  }
  updateTime();
}

function updateAll() {
  updateTime();
  updateCity();
}

setupEventListeners();
initializeView();
updateAll();
setInterval(updateAll, 1000);
