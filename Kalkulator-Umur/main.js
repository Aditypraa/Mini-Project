function calculate() {
  setInterval(() => {
    let birthdate = new Date(document.getElementById("birthdate").value);
    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime();

    let ageIns = ageInMs / 1000;
    let ageInMins = ageIns / 60;
    let ageInHours = ageInMins / 60;
    let ageInDays = ageInHours / 24;
    let ageInMonth = ageInDays / 30.4375;
    let ageInYears = ageInMonth / 12;

    document.getElementById("years").innerHTML = Math.floor(ageInYears);
    document.getElementById("months").innerHTML = Math.floor(ageInMonth % 12);
    document.getElementById("days").innerHTML = Math.floor(ageInDays % 30.4375);
    document.getElementById("hours").innerHTML = Math.floor(ageInHours % 24);
    document.getElementById("minutes").innerHTML = Math.floor(ageInMins % 60);
    document.getElementById("seconds").innerHTML = Math.floor(ageIns % 60);
  }, 1000);
}

function reset() {
  window.location.reload();
}
