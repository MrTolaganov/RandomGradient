const body = document.querySelector("body");
const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");
const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

container.addEventListener("click", setGradient);

function getGradient() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    const randomNum = Math.trunc(Math.random() * values.length);
    color += values[randomNum];
  }
  return color;
}

function setGradient() {
  const randomNum = Math.trunc(Math.random() * 360);
  const color1 = getGradient();
  const color2 = getGradient();
  const bgColor = `linear-gradient(
    ${randomNum}deg,
    ${color1},
    ${color2}
  )
  `;
  body.style.background = bgColor;
  colorText.textContent = bgColor;
}
