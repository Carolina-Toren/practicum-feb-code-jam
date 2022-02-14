const playlistItemTemplate = document.querySelector("#playlist-block").content.querySelector(".playlists__item");
const playlistContainerYour = document.querySelector("#your-playlist");
const playlistContainerOur = document.querySelector("#our-playlist");

let i = 0;

while (i < 10) {
  const playlistItemour = playlistItemTemplate.cloneNode(true);

  playlistContainerYour.append(playlistItemyour);
  playlistContainerOur.append(playlistItemour);

  i++;
}
