import "./styles.css";
import { greeting } from "./greeting.js";
import image from "./images/image.png"

let imEl = document.createElement("img");
imEl.src = image;

document.body.appendChild(imEl);
console.log(greeting);

