const backgroundOptions = [
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
const initialCards = [
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
const backgroundButton = document.querySelector(".card__background-button");
const popupCardGrid = document.querySelector(".card-popup__backgrounds-grid");
const backgroundPopup = document.querySelector(
  ".card-popup_type_background-options"
);
const popups = document.querySelectorAll(".card-popup");
const cardPreviewPopup = document.querySelector(
  ".card-popup_type_card-preview"
);
const downloadCardPopup = document.querySelector(
  ".card-popup_type_card-download"
);
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

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("card-popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("card-item__button_type_close")) {
      closePopup(popup);
    }
  });
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
function handleDeleteButton(evt) {
  evt.target.closest(".card-item").remove();
}
function handleEditButton(evt) {
  const editCard = evt.target.closest(".card-item");
  const editTo = editCard.querySelector(".card-item__text_type__to");
  const editMessage = editCard.querySelector(".card-item__text_type__message");
  const editFrom = editCard.querySelector(".card-item__text_type__from");
  cardPrototype.style.backgroundImage = editCard.style.backgroundImage;
  backgroundButton.style.backgroundImage = editCard.style.backgroundImage;
  cardPrototype.style.fontFamily = editCard.style.fontFamily;
  inputTo.value = editTo.textContent;
  inputMessage.value = editMessage.textContent;
  inputFrom.value = editFrom.textContent;
  inputTo.style.color = editTo.style.color;
  inputMessage.style.color = editMessage.style.color;
  inputFrom.style.color = editFrom.style.color;

  editCard.remove();
}
function handleDownloadButton(evt) {}

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
  const zoomButton = cardElement.querySelector(".card-item__button_type_zoom");
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
  zoomButton.addEventListener("click", openPreviewCardPopup);
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
      "url(../../images/backgrounds/card-backround-1.jpg)",
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

function openPreviewCardPopup(evt) {
  openPopup(cardPreviewPopup);
  const currentCard = evt.target.closest(".card-item");
  const currentTo = currentCard.querySelector(".card-item__text_type__to");
  const currentMessage = currentCard.querySelector(
    ".card-item__text_type__message"
  );
  const currentFrom = currentCard.querySelector(".card-item__text_type__from");
  const popupCard = document.querySelector(".card-item_location_popup");
  const popupTo = popupCard.querySelector(".card-item__text_type__to");
  const popupMessage = popupCard.querySelector(
    ".card-item__text_type__message"
  );
  const popupFrom = popupCard.querySelector(".card-item__text_type__from");
  popupCard.style.backgroundImage = currentCard.style.backgroundImage;
  popupCard.style.fontFamily = currentCard.style.fontFamily;
  popupTo.textContent = currentTo.textContent;
  popupMessage.textContent = currentMessage.textContent;
  popupFrom.textContent = currentFrom.textContent;
  popupTo.style.color = currentTo.style.color;
  popupMessage.style.color = currentMessage.style.color;
  popupFrom.style.color = currentFrom.style.color;
}

backgroundButton.addEventListener("click", () => openPopup(backgroundPopup));
colourToPicker.addEventListener("change", (evt) => changeColour(evt, inputTo));
colourFromPicker.addEventListener("change", (evt) =>
  changeColour(evt, inputFrom)
);
colourMessagePicker.addEventListener("change", (evt) =>
  changeColour(evt, inputMessage)
);
fontSelector.addEventListener("change", (evt) => changeFont(evt, inputAll));
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

// const Btn = document.querySelector("#button");
// Btn.addEventListener("click", function (evt) {
//   openPopup(downloadCardPopup);
//   (function takeshot() {
//     const downloadable = evt.target.closest(".card-popup_type_card-preview");
//     console.log(downloadable);
//     const downloadableCard = downloadable.querySelector(
//       ".card-item_location_popup"
//     );
//     console.log(downloadableCard);
//     const popupContainer = document.getElementById("popup-download");
//     html2canvas(downloadableCard).then(function (canvas) {
//       popupContainer.append(canvas);
//     });
//   })();
// });
