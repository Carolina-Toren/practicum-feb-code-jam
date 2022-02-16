import { music, playlistItemTemplate, playlistContainerOur, playlistContainerYour } from "./utls/constants.js";
// import Item from "./components/Item.js";

function playlistGenerator({ name, url }, buttonText) {
  const playlistItem = playlistItemTemplate.cloneNode(true);
  const playlistName = playlistItem.querySelector(".playlists__item-name");
  const playlistUrl = playlistItem.querySelector(".playlist__iframe");
  const playlistbutton = playlistItem.querySelector(".playlists__item-button");
  playlistName.textContent = name;
  playlistUrl.src = url;
  playlistUrl.alt = name;
  playlistbutton.textContent = buttonText;

  playlistbutton.addEventListener("click", () => {
    switchToYourPlatlist(playlistItem, { name, url });
  });
  return playlistItem;
}

music.forEach((musicData) => {
  playlistContainerOur.append(playlistGenerator(musicData, "Select"));
});

function switchToYourPlatlist(itemData, musicData) {
  if (itemData.parentNode === playlistContainerOur) {
    playlistContainerYour.append(playlistGenerator(musicData, "Delete"));
  } else {
    playlistContainerOur.prepend(playlistGenerator(musicData, "Select"));
  }
  itemData.remove();
}
