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

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
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
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
