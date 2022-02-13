const backgroundOptions = [
  { url: "../images/card-backround-1.jpeg" },
  { url: "../images/card-backround-2.jpeg" },
  { url: "../images/card-backround-3.jpeg" },
  { url: "../images/card-backround-4.jpeg" },
  { url: "../images/card-backround-5.jpeg" },
  { url: "../images/card-backround-6.jpeg" },
  { url: "../images/card-backround-7.jpeg" },
  { url: "../images/card-backround-8.jpeg" },
  { url: "../images/card-backround-9.jpeg" },
  { url: "../images/card-backround-10.jpeg" },
  { url: "../images/card-backround-11.jpeg" },
  { url: "../images/card-backround-12.jpeg" },
  { url: "../images/card-backround-13.jpeg" },
  { url: "../images/card-backround-14.jpeg" },
  { url: "../images/card-backround-15.jpeg" },
  { url: "../images/card-backround-16.jpeg" },
  { url: "../images/card-backround-17.jpeg" },
  { url: "../images/card-backround-18.jpeg" },
  { url: "../images/card-backround-19.jpeg" },
  { url: "../images/card-backround-20.jpeg" },
];
const backgroundButton = document.querySelector(".card__background-button");
const cardGrid = document.querySelector(".card-popup__backgrounds-grid");
const backgroundPopup = document.querySelector(".card-popup");
const closeButton = document.querySelector(".card-item__button_type_close");
const cardPrototype = document.querySelector(".card__form_type_text-fields");
const inputAll = document.querySelectorAll(".card__text-input");
const inputColourTo = document.querySelector(".card__text-input_type_to");
const inputColourFrom = document.querySelector(".card__text-input_type_from");
const iputColourMessage = document.querySelector(
  ".card__text-input_type_textarea"
);
const colourToPicker = document.querySelector("#to-picker");
const colourFromPicker = document.querySelector("#from-picker");
const colourMessagePicker = document.querySelector("#text-picker");
const fontSelector = document.querySelector("#fonts");
function openPopup(popup) {
  popup.classList.add("card-popup_opened");
  document.addEventListener("keydown", closeByEscape);
}
function closePopup(popup) {
  popup.classList.remove("card-popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopUp = document.querySelector(".card-popup_opened");
    closePopup(openedPopUp);
  }
}
backgroundPopup.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("card-popup_opened")) {
    closePopup(backgroundPopup);
  }
});
function setBackground() {}
backgroundOptions.forEach((option) => {
  const backgroundItem = document.createElement("li");
  backgroundItem.classList.add("card-popup__background-item");
  backgroundItem.style.backgroundImage = `url("${option.url}")`;
  backgroundItem.addEventListener("click", (evt) => {
    backgroundButton.style.backgroundImage = evt.target.style.backgroundImage;
    cardPrototype.style.backgroundImage = evt.target.style.backgroundImage;
  });
  cardGrid.append(backgroundItem);
});
function changeColour(evt, input) {
  input.style.color = evt.target.value;
}
function changeFont(evt, inputs) {
  inputs.forEach((input) => {
    input.style.fontFamily = `${evt.target.value}`;
  });
}

backgroundButton.addEventListener("click", () => openPopup(backgroundPopup));
closeButton.addEventListener("click", () => closePopup(backgroundPopup));
colourToPicker.addEventListener("change", (evt) =>
  changeColour(evt, inputColourTo)
);
colourFromPicker.addEventListener("change", (evt) =>
  changeColour(evt, inputColourFrom)
);
colourMessagePicker.addEventListener("change", (evt) =>
  changeColour(evt, iputColourMessage)
);
fontSelector.addEventListener("change", (evt) => changeFont(evt, inputAll));
