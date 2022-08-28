import { AppError } from "./src/utils/AppError.js";
const generateAdvice = document.querySelector("#generate_advice");
const advice_id = document.querySelector("#advice_id");
const advice = document.querySelector("#advice");

function fetchApiData() {
  fetch(`https://api.adviceslip.com/advice`,{cache: "no-cache"})
    .then((response) => response.json())
    .then(({ slip }) => {
      advice_id.innerHTML = slip.id;
      advice.innerHTML = slip.advice;
    })
    .catch((error) => {
      throw new AppError(error.message);
    });
}

generateAdvice.addEventListener("click", fetchApiData);
