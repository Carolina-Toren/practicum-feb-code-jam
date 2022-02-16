export const backgroundOptions = [
  { url: "../../images/backgrounds/card-backround-1.jpg" },
  { url: "../../images/backgrounds/card-backround-2.jpg" },
  { url: "../../images/backgrounds/card-backround-3.jpg" },
  { url: "../../images/backgrounds/card-backround-4.jpg" },
  { url: "../../images/backgrounds/card-backround-5.jpg" },
  { url: "../../images/backgrounds/card-backround-6.jpg" },
  { url: "../../images/backgrounds/card-backround-7.jpg" },
  { url: "../../images/backgrounds/card-backround-8.jpg" },
  { url: "../../images/backgrounds/card-backround-9.jpg" },
  { url: "../../images/backgrounds/card-backround-10.jpg" },
  { url: "../../images/backgrounds/card-backround-11.jpg" },
  { url: "../../images/backgrounds/card-backround-12.jpg" },
  { url: "../../images/backgrounds/card-backround-13.jpg" },
  { url: "../../images/backgrounds/card-backround-14.jpg" },
  { url: "../../images/backgrounds/card-backround-15.jpg" },
  { url: "../../images/backgrounds/card-backround-16.jpg" },
  { url: "../../images/backgrounds/card-backround-17.jpg" },
  { url: "../../images/backgrounds/card-backround-18.jpg" },
  { url: "../../images/backgrounds/card-backround-19.jpg" },
  { url: "../../images/backgrounds/card-backround-20.jpeg" },
];
export const initialCards = [
  {
    background: "url(../../images/backgrounds/card-backround-11.jpg)",
    toText: "Dear Friend,",
    messageText:
      "Here’s to a Valentine’s Day filled with good wine, good food and especially good friends like you.",
    fromText: "Yours, Val.",
    toColour: "#DF1E6F",
    messageColour: "#000000",
    fromColour: "#DF1E6F",
    font: "Indie Flower",
  },
  {
    background: "url(../../images/backgrounds/card-backround-3.jpg)",
    toText: "Dear Friend,",
    messageText:
      "Here’s to a Valentine’s Day filled with good wine, good food and especially good friends like you.",
    fromText: "Yours, Val.",
    toColour: "#DF1E6F",
    messageColour: "#FFFFFF",
    fromColour: "#DF1E6F",
    font: "Manrope",
  },
];

export const config = {
  formSelector: ".card__form",
  inputSelector: ".card__text-input",
  submitButtonSelector: ".card__submit-button",
  inactiveButtonClass: "card__submit-button_disabled",
  inputErrorClass: "card__text-input_type_error",
  errorClass: "card__error_visible",
};

export const backgroundButton = document.querySelector(
  ".card__background-button"
);
export const popupCardGrid = document.querySelector(
  ".card-popup__backgrounds-grid"
);
export const backgroundPopup = document.querySelector(
  ".card-popup_type_background-options"
);
export const popups = document.querySelectorAll(".card-popup");
export const cardPreviewPopup = document.querySelector(
  ".card-popup_type_card-preview"
);

export const cardPrototype = document.querySelector(
  ".card__form_type_text-fields"
);
export const inputAll = document.querySelectorAll(".card__text-input");
export const inputTo = document.querySelector(".card__text-input_type_to");
export const inputFrom = document.querySelector(".card__text-input_type_from");
export const inputMessage = document.querySelector(
  ".card__text-input_type_textarea"
);
export const colourToPicker = document.querySelector("#to-picker");
export const colourFromPicker = document.querySelector("#from-picker");
export const colourMessagePicker = document.querySelector("#text-picker");
export const fontSelector = document.querySelector("#fonts");
export const cardGrid = document.querySelector(".card__card-grid");
export const cardConstructor = document.querySelector(".card__constructor");
export const addCardFormElement = document.querySelector(".card__form");
export const downloadCardButton = document.querySelector(
  ".card-popup__button_type_download"
);
