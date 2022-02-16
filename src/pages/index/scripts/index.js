import getIdea from "./utils/utils.js";
import {
  selfcareIdeas,
  friendsIdeas,
  othersIdeas,
  selfcareButton,
  selfcare,
  friendsButton,
  friends,
  othersButton,
  others,
} from "./utils/constants.js";
selfcareButton.addEventListener("click", () =>
  getIdea(selfcareIdeas, selfcare)
);
friendsButton.addEventListener("click", () => getIdea(friendsIdeas, friends));
othersButton.addEventListener("click", () => getIdea(othersIdeas, others));
