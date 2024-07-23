function updateTime() {
  //Mexico City
  let mexicoElement = document.querySelector("#mexico-city");

  let mexicoDateElement = mexicoElement.querySelector(".date");
  let mexicoTimeElement = mexicoElement.querySelector(".time");
  let mexicoTime = moment().tz("America/Mexico_City");

  mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
  mexicoTimeElement.innerHTML = mexicoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");

  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
