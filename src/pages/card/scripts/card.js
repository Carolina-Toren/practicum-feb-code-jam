import {
  backgroundOptions,
  initialCards,
  backgroundButton,
  popupCardGrid,
  backgroundPopup,
  popups,
  cardPreviewPopup,
  cardPrototype,
  inputAll,
  inputTo,
  inputFrom,
  inputMessage,
  colourToPicker,
  colourFromPicker,
  colourMessagePicker,
  fontSelector,
  cardGrid,
  cardConstructor,
  addCardFormElement,
  downloadCardButton,
  config,
} from "./utils/constants.js";

import * as utils from "./utils/utils.js";
import FormValidator from "./components/FormValidator.js";

// each of the popups gets an event listener that closes any opened popup and enables the close button to trigger the same event

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("card-popup_opened")) {
      utils.closePopup(popup);
    }
    if (evt.target.classList.contains("card-popup__button_type_close")) {
      utils.closePopup(popup);
    }
  });
});

// each option from the array of images gets appended to the popup and once in the popup it gets an event listener that triggers the card and button in the constructor to take the same background image as the one clicked on in the popup

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

// remove the parent element of the clicked delete button

function handleDeleteButton(evt) {
  evt.target.closest(".card-item").remove();
}

// on clicking the edit button all the information (text content, colours, fonts) of the card item gets transferred to the card constructor to be edited ano/or saved

function handleEditButton(evt) {
  addCardFormValidator.resetFormOnEdit();

  cardConstructor.scrollIntoView();

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

// on clicking the download the external library capabilities are invoked

function handleDownloadButton() {
  domtoimage
    .toPng(document.getElementById("my-node"), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "area-chart.png";
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

// a function returns a card element that takes all the information from the form inputs (card constructor) and displays it using the cloned markup element

const addCard = ({
  background,
  toText,
  messageText,
  fromText,
  toColour,
  messageColour,
  fromColour,
  font,
}) => {
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
  cardElement.style.backgroundImage = background;
  cardElement.style.fontFamily = `${font}`;
  to.textContent = toText;
  to.style.color = toColour;
  message.textContent = messageText;
  message.style.color = messageColour;
  from.textContent = fromText;
  from.style.color = fromColour;

  deleteButton.addEventListener("click", handleDeleteButton);
  editButton.addEventListener("click", handleEditButton);
  downloadButton.addEventListener("click", openPreviewCardPopup);

  return cardElement;
};

// the card element gets prepended to the designated grid display

const attachCard = (card) => {
  cardGrid.prepend(addCard(card));
};

// the two initial card samples are prepended to the designated grid display to give the user an idea of the constructor capabilities

initialCards.forEach(attachCard);

// all the data from form inputs gets stored in card const that then is passed to addCard function that creates the card using template cloning

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

  addCardFormValidator.resetFormOnSubmit();
}

// the form gets validated by creating a new instance of class and then applying the public method of the class

const addCardFormValidator = new FormValidator(config, addCardFormElement);
addCardFormValidator.enableValidation();

// on clicking any card's preview/download button the information from the card item is dispalyed in the  popup card and shows tha card as it will look for download

function openPreviewCardPopup(evt) {
  utils.openPopup(cardPreviewPopup);

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

// add event listeners

backgroundButton.addEventListener("click", () =>
  utils.openPopup(backgroundPopup)
);
colourToPicker.addEventListener("change", (evt) =>
  utils.changeColour(evt, inputTo)
);
colourFromPicker.addEventListener("change", (evt) =>
  utils.changeColour(evt, inputFrom)
);
colourMessagePicker.addEventListener("change", (evt) =>
  utils.changeColour(evt, inputMessage)
);
fontSelector.addEventListener("change", (evt) =>
  utils.changeFont(evt, inputAll)
);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
downloadCardButton.addEventListener("click", handleDownloadButton);
