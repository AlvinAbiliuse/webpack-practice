import "./styles.css";
import { greeting } from "./greeting.js";
import image from "./images/image.png"

const imEl = document.createElement("img");
imEl.src = image;

document.body.appendChild(image);
console.log(greeting);

