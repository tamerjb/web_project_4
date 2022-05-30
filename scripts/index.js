import {

  openPopup,
  closePopup,

} from "./utils.js";

import {
  FormValidator
} from "./FormValidator.js";
import {
  Card
} from "./Card.js";
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

const profilePopupCloseButton = profilePopup.querySelector(".popup__button-close");
const imgPreviewCloseButton = imgPreview.querySelector(
  ".popup__close-button"
);
const placeClose = placeForm.querySelector(".popup__button-close-type-place");

const editProfileButton = profile.querySelector(".profile__edit-button");
const addCardPopup = profile.querySelector(".profile__add-button");


///////////////////////////////////////////
//////// EventListeners ///////////////////
///////////////////////////////////////////

editProfileButton.addEventListener("click", () => openProfileForm()); // edit profile open popup
profilePopupCloseButton.addEventListener("click", () => closePopup(profilePopup)); // closes the poup when click on X.
addCardPopup.addEventListener("click", () => openPopup(placeForm)); //open the add photo form.
placeClose.addEventListener("click", () => closePopup(placeForm)); // close add form
imgPreview.addEventListener("click", () => closePopup(imgPreview)); // closes the image preview
profileEdit.addEventListener("submit", () => handleProfileFormSubmit(event)); // saves the profile info + prevents the site submit .
placePopupForm.addEventListener("submit", () => addCard(event)) //this listining to event submit (save)

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

initialCards.forEach((card) => renderCard(card, cardList));

function openProfileForm() { //opens the edit name form
  fillProfileForm();
  openPopup(profilePopup);
  this._toggleButton();

}

function fillProfileForm() { //this function set the input fields value.
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
}

function saveProfileForm() {
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  closePopup(profilePopup);

}
// function togglePopupSubmitButton(popup) {

//   const inputList = Array.from(popup.querySelectorAll(settings.inputSelector));

//   const submitButton = popup.querySelector(settings.submitButtonSelector);

//   toggleButton(inputList, submitButton, settings);

// }


function toggleClass(item, className) { //function toggles(add/remove) a specifc class, *item* is selcetor name / x is the class that want to add/remove .
  item.classList.toggle(className);
}

function handleProfileFormSubmit(event) { //saves the name after editing
  event.preventDefault();
  saveProfileForm();
}

function addCard(event) { //this function to add the card manullay
  event.preventDefault();
  renderCard({
    name: placeName.value,
    link: placeURL.value
  }, cardList);

  // toggleClass(placeForm, "popup_opened");
  closePopup(placeForm);
  placePopupForm.reset();
  this._toggleButton();
}

function renderCard(card, list) { // adds the card to the first place
  const cardToRender = new Card(card, cardTemplateSelector).generateCard();
  list.prepend(cardToRender);
}

export function previewImage(thisLink, thisName) {

  popupPreviewImg.src = thisLink;
  popupPreviewImg.alt = `A beautiful place in ${thisName}`;
  popupPreviewCaption.textContent = thisName;
  openPopup(imgPreview);
}