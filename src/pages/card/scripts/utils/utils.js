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
function changeColour(evt, input) {
  input.style.color = evt.target.value;
}
function changeFont(evt, inputs) {
  inputs.forEach((input) => {
    input.style.fontFamily = `${evt.target.value}`;
  });
}
export { openPopup, closePopup, changeColour, changeFont };
