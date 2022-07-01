///////////////////////////////////////////
//////// IMPORTS ////////////////
/////////////////////////////////////////
import {
  FormValidator
}
from "../components/FormValidator.js";

import {
  Card
} from "../components/Card.js";
import {
  Popup
}
from "../components/Popup.js";
import {
  PopupWithForm
}
from "../components/PopupWithForm.js";
import {
  Section
} from "../components/Section.js";

import {
  UserInfo
} from "../components/UserInfo.js";


import "../styles/index.css";
import {
  PopupWithImage
} from "../components/PopupWithImage.js";

import {
  profileForm,
  profile,
  profileName,
  profilePopup,
  profileTitle,
  inputName,
  inputTitle,
  cards,
  cardTemplate,
  cardList,
  profileEdit,
  placePopupForm,
  placeName,
  placeURL,
  imgPreview,
  popupPreviewImg,
  popupPreviewCaption,
  placeForm,
  cardTemplateSelector,
  editProfileButton,
  addCardPopup,
  closeButtons,
  initialCards

} from "../utils/constants"
import {
  api
} from "../components/Api"

///////////////////////////////////////////
//////// API //////////////////////////////
///////////////////////////////////////////
console.log(api)
api.getInitialCards()
  .then(res => {
    cardList.renderItems(res);
    console.log('res', res)
  });
api.getUserInfo().then(res => {
  userInfo.setUserInfo({
    name: res.name,
    job: res.about
  })

});



///////////////////////////////////////////
//////// EventListeners ///////////////////
///////////////////////////////////////////

editProfileButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputTitle.value = info.job;
  profileFormValidator.enableValidation();
  profileFormValidator.toggleButton();
  popupEditProfile.open();
});

addCardPopup.addEventListener("click", () => {
  popupAddCard.open();
  addFormValidator.resetValidation();

});

///////////////////////////////////////////
//////// Form Validtation ////////////////
/////////////////////////////////////////
const validateConfigs = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error",
};

const profileFormValidator = new FormValidator(
  validateConfigs,
  profilePopup
);
const addFormValidator = new FormValidator(validateConfigs, placeForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
});

///////////////////////////////////////////
//////// Popup creation ////////////////
/////////////////////////////////////////



const popupImage = new PopupWithImage(".popup-prev");
popupImage.setEventListeners();

const popupEditProfile = new PopupWithForm(".popup", (data) => {
  userInfo.setUserInfo(data.name, data.title);
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(".popup-place", (data) => {
  renderCard(data);
  addFormValidator.resetValidation();
});
popupAddCard.setEventListeners();

///////////////////////////////////////////
//////// card creation ////////////////
/////////////////////////////////////////
const placesSection = new Section({
    items: initialCards,
    renderer: (data) => renderCard(data),
  },
  ".cards__list"
);

placesSection.renderItems();

function generateCard(data) {
  const card = new Card(data, cardTemplateSelector, () => {
    popupImage.open(data.link, data.placename);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCard(data) {
  const element = generateCard(data);
  placesSection.addItem(element);
}