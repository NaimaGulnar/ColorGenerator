let btn = document.querySelector(".btn");
let clrRgb = document.querySelector(".clrRgb");
let clrHex = document.querySelector(".clrHex");
let body = document.querySelector("body");
btn.addEventListener("click", clickEvent);

function clickEvent() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  clrRgb.innerText = rgb;
  clrHex.innerText = hex;

  body.style.backgroundColor = hex;
  clrRgb.style.color = hex;
  clrHex.style.color = hex;
}
