// import {

//   openPopup,
//   closePopup,
//   closeOnEscape,
//   closeOnClickOutside,

// }
// from "../scripts/utils.js";

import {
  FormValidator
}
from "../scripts/FormValidator.js";

import {
  Card
} from "../scripts/Card.js";
import {
  Popup
}
from "../scripts/Popup.js";
import {
  PopupWithForm
}
from "../scripts/PopupWithForm.js";
import {
  Section
} from "../scripts/Section.js";

import {
  UserInfo
} from "../scripts/UserInfo.js";


import "../styles/index.css";
import {
  PopupWithImage
} from "../scripts/PopupWithImage.js";

///////////////////////////////////////////
//////// Selectors ///////////
///////////////////////////////////////////
const profileForm = document.querySelector(".form");
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profilePopup = document.querySelector(".popup");
const profileTitle = profile.querySelector(".profile__title");
const inputName = form.querySelector(".form__input[name='name']");
const inputTitle = form.querySelector(".form__input[name='title']");
const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template");
const cardList = cards.querySelector(".cards__list");
const profileEdit = document.querySelector(".popup-edit-profile");
const placePopupForm = document.querySelector(".popup__form-type-add-place");
const placeName = placePopupForm.querySelector(".form__input-type-place-name");
const placeURL = placePopupForm.querySelector(".form__input-type-place-url");
const imgPreview = document.querySelector(".popup-prev");
const popupPreviewImg = imgPreview.querySelector(".popup__image");
const popupPreviewCaption = imgPreview.querySelector(".popup__caption");


const placeForm = document.querySelector(".popup-place");
const cardTemplateSelector = "#card-template";


const editProfileButton = profile.querySelector(".profile__edit-button");
const addCardPopup = profile.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll('.popup__close-button');




///////////////////////////////////////////
//////// EventListeners ///////////////////
///////////////////////////////////////////
// closeButtons.forEach((button) => { //close popups by pressing on X
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// editProfileButton.addEventListener("click", () => openProfileForm()); // edit profile open popup
// addCardPopup.addEventListener("click", () => openPopup(placeForm)); //open the add photo form.


// profileEdit.addEventListener("submit", handleProfileFormSubmit);
// // saves the profile info + prevents the site submit .
// placePopupForm.addEventListener("submit", addCard);
// //this listining to event submit (save)
editProfileButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputTitle.value = info.job;
  profileFormValidator.hideErrors();
  profileFormValidator._toggleButton();
  editPopup.open();
});

addCardPopup.addEventListener("click", () => {
  addPopup.open();
  addFormValidator.hideErrors();
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
  profileForm
);
const addFormValidator = new FormValidator(validateConfigs, placeForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
});





const initialCards = [{
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
/** This line adds the array to the page */

// initialCards.forEach((card) => renderCard(card, cardList));

// function openProfileForm() { //opens the edit name form
//   fillProfileForm();
//   openPopup(profilePopup);

// }

// function fillProfileForm() { //this function set the input fields value.
//   inputName.value = profileName.textContent;
//   inputTitle.value = profileTitle.textContent;
// }

// function saveProfileForm() {
//   profileName.textContent = inputName.value;
//   profileTitle.textContent = inputTitle.value;
//   closePopup(profilePopup);

// }


// function toggleClass(item, className) { //function toggles(add/remove) a specifc class, *item* is selcetor name / x is the class that want to add/remove .
//   item.classList.toggle(className);
// }

// function handleProfileFormSubmit(event) { //saves the name after editing
//   event.preventDefault();
//   saveProfileForm();
// }

// function addCard(event) { //this function to add the card manullay
//   event.preventDefault();
//   renderCard({
//     name: placeName.value,
//     link: placeURL.value
//   }, cardList);

//   // toggleClass(placeForm, "popup_opened");
//   closePopup(placeForm);
//   placePopupForm.reset();
//   addFormValidator.resetValidation();


// }


const imagePopup = new PopupWithImage(".popup-prev");
imagePopup.setEventListeners();

const editPopup = new PopupWithForm(".popup", (data) => {
  userInfo.setUserInfo(data.name, data.job);
});
editPopup.setEventListeners();

const addPopup = new PopupWithForm(".popup-place", (data) => {
  renderCard(data);
  addFormValidator.resetValidation();
});
addPopup.setEventListeners();

// function renderCard(card, list) { // adds the card to the first place
//   const cardToRender = new Card(card, cardTemplateSelector).generateCard();
//   list.prepend(cardToRender);
// }

// export function previewImage(thisLink, thisName) {

//   popupPreviewImg.src = thisLink;
//   popupPreviewImg.alt = `A beautiful place in ${thisName}`;
//   popupPreviewCaption.textContent = thisName;
//   openPopup(imgPreview);
// }
const placesSection = new Section({
    items: initialCards,
    renderer: (data) => renderCard(data),
  },
  ".cards__list"
);

placesSection.render();

function generateCard(data) {
  const card = new Card(data, cardTemplateSelector, () => {
    imagePopup.open(data.link, data.name);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCard(data) {
  const element = generateCard(data);
  placesSection.addItem(element);
}