// Funktion, um die aktuelle Zeit zu erhalten und die Zeiger zu drehen
function updateClock() {
  // Aktuelle Zeit holen
  const now = new Date();

  // Stunde, Minute und Sekunde ermitteln
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Umrechnung der Zeit auf Grad
  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 360 Grad / 12 Stunden = 30 Grad pro Stunde
  const minuteDeg = minutes * 6 + (seconds / 60) * 6; // 360 Grad / 60 Minuten = 6 Grad pro Minute
  const secondDeg = seconds * 6; // 360 Grad / 60 Sekunden = 6 Grad pro Sekunde

  // Zeiger-Elemente holen
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  // Drehung der Zeiger anwenden
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Funktion aufrufen, um die Uhr zu starten
setInterval(updateClock, 1000);
const clock = document.querySelector(".clock");

//? Add hour markings
for (let i = 0; i < 12; i++) {
  const hourMark = document.createElement("div");
  hourMark.classList.add("marking");
  hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
  clock.appendChild(hourMark);
}

//? Adjust the hour markings
for (let i = 0; i < 12; i++) {
  const hourMark = document.createElement("div");
  hourMark.classList.add("adjustMarking");
  hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
  clock.appendChild(hourMark);
}

//? Add minute markings
for (let i = 0; i < 60; i++) {
  if (i % 5 !== 0) {
    const minuteMark = document.createElement("div");
    minuteMark.classList.add("minute-marking");
    minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
    clock.appendChild(minuteMark);
  }
}

//? Adjust the minute markings
for (let i = 0; i < 60; i++) {
  if (i % 5 !== 0) {
    const minuteMark = document.createElement("div");
    minuteMark.classList.add("adjustMinuteMarking");
    minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
    clock.appendChild(minuteMark);
  }
}
