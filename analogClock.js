//function for the time
function updateClock() {
  // take the time
  const now = new Date();

  // Variables for seconds minutes and hours
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  //time in degres
  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 360 Grad / 12 Stunden = 30 Grad pro Stunde
  const minuteDeg = minutes * 6 + (seconds / 60) * 6; // 360 Grad / 60 Minuten = 6 Grad pro Minute
  const secondDeg = seconds * 6; // 360 Grad / 60 Sekunden = 6 Grad pro Sekunde

  // Connect with pointer elements
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  // Rotation of the pointer
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Funktion aufrufen, um die Uhr zu starten
setInterval(updateClock, 1);
const clock = document.querySelector(".clock");

// Add hour markings
for (let i = 0; i < 12; i++) {
  const hourMark = document.createElement("div");
  hourMark.classList.add("marking");
  hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
  clock.appendChild(hourMark);
}

// Adjust the hour markings
for (let i = 0; i < 12; i++) {
  const hourMark = document.createElement("div");
  hourMark.classList.add("adjustMarking");
  hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
  clock.appendChild(hourMark);
}

// Add minute markings
for (let i = 0; i < 60; i++) {
  if (i % 5 !== 0) {
    const minuteMark = document.createElement("div");
    minuteMark.classList.add("minute-marking");
    minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
    clock.appendChild(minuteMark);
  }
}

// Adjust the minute markings
for (let i = 0; i < 60; i++) {
  if (i % 5 !== 0) {
    const minuteMark = document.createElement("div");
    minuteMark.classList.add("adjustMinuteMarking");
    minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
    clock.appendChild(minuteMark);
  }
}
