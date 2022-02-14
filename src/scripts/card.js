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
const initialCards = [
  {
    background: "url(../images/card-backround-16.jpeg)",
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
    background: "url(../images/card-backround-3.jpeg)",
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
const backgroundButton = document.querySelector(".card__background-button");
const popupCardGrid = document.querySelector(".card-popup__backgrounds-grid");
const backgroundPopup = document.querySelector(".card-popup");
const closeButton = document.querySelector(".card-item__button_type_close");
const cardPrototype = document.querySelector(".card__form_type_text-fields");
const inputAll = document.querySelectorAll(".card__text-input");
const inputTo = document.querySelector(".card__text-input_type_to");
const inputFrom = document.querySelector(".card__text-input_type_from");
const inputMessage = document.querySelector(".card__text-input_type_textarea");
const colourToPicker = document.querySelector("#to-picker");
const colourFromPicker = document.querySelector("#from-picker");
const colourMessagePicker = document.querySelector("#text-picker");
const fontSelector = document.querySelector("#fonts");
const cardGrid = document.querySelector(".card__card-grid");

const addCardFormElement = document.querySelector(".card__form");
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
  popupCardGrid.append(backgroundItem);
});
function changeColour(evt, input) {
  input.style.color = evt.target.value;
}
function changeFont(evt, inputs) {
  inputs.forEach((input) => {
    input.style.fontFamily = `${evt.target.value}`;
  });
}
function handleDeleteButton() {}
function handleEditButton() {}
function handleDownloadButton() {}

const addCard = (card) => {
  const cardTemplate = document.querySelector("#card-item").content;
  const cardElement = cardTemplate.querySelector(".card-item").cloneNode(true);
  const to = cardElement.querySelector(".card-item__text_type__to");
  const message = cardElement.querySelector(".card-item__text_type__message");
  const from = cardElement.querySelector(".card-item__text_type__from");
  const editButton = cardElement.querySelector(".card-item__button_type_edit");
  const deleteButton = cardElement.querySelector(
    ".card-item__button_type_delete"
  );
  const downloadButton = cardElement.querySelector(
    ".card-item__button_type_download"
  );
  cardElement.style.backgroundImage = card.background;
  cardElement.style.fontFamily = `${card.font}`;
  to.textContent = card.toText;
  to.style.color = card.toColour;
  message.textContent = card.messageText;
  message.style.color = card.messageColour;
  from.textContent = card.fromText;
  from.style.color = card.fromColour;

  deleteButton.addEventListener("click", handleDeleteButton);

  editButton.addEventListener("click", handleEditButton);
  downloadButton.addEventListener("click", handleDownloadButton);

  return cardElement;
};

const attachCard = (card) => {
  cardGrid.prepend(addCard(card));
};

initialCards.forEach(attachCard);

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    background:
      backgroundButton.style.backgroundImage ||
      "url(../images/card-backround-19.jpeg)",
    toText: inputTo.value,
    messageText: inputMessage.value,
    fromText: inputFrom.value,
    toColour: colourToPicker.value,
    messageColour: colourMessagePicker.value,
    fromColour: colourFromPicker.value,
    font: fontSelector.value,
  };

  attachCard(card);

  addCardFormElement.reset();
}

backgroundButton.addEventListener("click", () => openPopup(backgroundPopup));
closeButton.addEventListener("click", () => closePopup(backgroundPopup));
colourToPicker.addEventListener("change", (evt) => changeColour(evt, inputTo));
colourFromPicker.addEventListener("change", (evt) =>
  changeColour(evt, inputFrom)
);
colourMessagePicker.addEventListener("change", (evt) =>
  changeColour(evt, inputMessage)
);
fontSelector.addEventListener("change", (evt) => changeFont(evt, inputAll));
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
