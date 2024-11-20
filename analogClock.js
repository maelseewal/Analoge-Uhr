let totalSeconds = 0;

function updateClock() {
  // Get the current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate total time in seconds
  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Convert time to degrees
  const hourDeg = (totalSeconds / 3600) * 30;
  const minuteDeg = (totalSeconds / 60) * 6;
  const secondDeg = totalSeconds * 6;

  // Connect to the pointer elements
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  // Rotate the pointer
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1);
const clock = document.querySelector(".clock");

// Add hour marks(by Matteo)
for (let i = 0; i < 12; i++) {
  const hourMark = document.createElement("div");
  hourMark.classList.add("marking");
  hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
  clock.appendChild(hourMark);
}

// Add minute markings(by Matteo)
for (let i = 0; i < 60; i++) {
  if (i % 5 !== 0) {
    const minuteMark = document.createElement("div");
    minuteMark.classList.add("minute-marking");
    minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
    clock.appendChild(minuteMark);
  }
}
