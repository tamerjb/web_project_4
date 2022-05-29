import {
  profileForm,
  profile,
  cardList,
  profileEdit,
  placePopupForm,
  imgPreview,
  placeForm,
  fillProfileForm,
  openPopup,
  closePopup,
  handleProfileFormSubmit,
  addCard,
  renderCard,
  previewImage,
  profilePopup,
  openProfileForm
} from "./utils.js";

import {
  FormValidator
} from "./validate.js";


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
  errorClass: "form__input-errorline",
};

const profileFormValidator = new FormValidator(
  validateConfigs,
  profileForm
);
const addFormValidator = new FormValidator(validateConfigs, placeForm);

// profileFormValidator.enableValidation();
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

// //create card
// function createCard(card) {
//   const cardTemplateContent = cardTemplate.content;
//   // const cardElement = cardTemplateContent.querySelector(".card").cloneNode(true);
//   const cardTitle = cardElement.querySelector(".card__info-title");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const cardImage = cardElement.querySelector(".card__image");
//   const deleteButton = cardElement.querySelector(".card__image-trash");

//   cardTitle.textContent = card.name;
//   cardImage.src = card.link;
//   cardImage.alt = `place in ${card.name}`;

//   cardImage.addEventListener("click", () => previewImage(card));
//   deleteButton.addEventListener("click", () => cardElement.remove());
//   likeButton.addEventListener("click", () =>
//     toggleClass(likeButton, "card__like-button_active"));
//   return cardElement;
// }


/////////////////////////////////////////////