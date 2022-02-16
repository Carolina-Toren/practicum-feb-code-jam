// export default class Item {
//   constructor({ data, tamplate, handleAddClick, handleDeleteClick, buttonText }) {
//     this._name = data.name;
//     this._url = data._url;
//     this._element = tamplate.clonneNode(true);
//     this._button = buttonText;
//     this._handleAddClick = handleAddClick;
//     this._handleDeleteClick = handleDeleteClick;
//   }

//   createItem() {
//     this._iframe = this._element.querySelector(".playlist__iframe");
//     this._itemName = this._element.querySelector(".playlists__item-name");
//     this._iframe.src = this._url;
//     this._itemName.textContent = this._name;
//     this._setEventListeners();
//     return this._element;
//   }

//   _setEventListeners() {
//     const itemBtn = this._element.querySelector(".playlists__item-button");

//     itemBtn.addEventListener("click", () => {
//       if (this._button === "Select") {
//         this._handleAddClick();
//       } else {
//         this._handleDeleteClick();
//       }
//     });
//   }

//   removeItem() {
//     this._element.remove();
//     this._element = null;
//   }
// }

////didn't have enough time to implement
