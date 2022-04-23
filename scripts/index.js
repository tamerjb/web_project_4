///////////////////////////////////////////
//////// Selectors ///////////
///////////////////////////////////////////
const profileForm = document.querySelector(".form");
const profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name");
const editProfileButton = profile.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__button-close");
let profileTitle = profile.querySelector(".profile__title");
let inputName = form.querySelector(".form__input[name='name']");
let inputTitle = form.querySelector(".form__input[name='title']");
const cards = document.querySelector(".cards");

const cardTemplate = document.querySelector("#card-template");
const cardList = cards.querySelector(".cards__list");
const addForm = profile.querySelector(".profile__add-button");
const profileEdit = document.querySelector(".popup-edit-profile");
const placeForm = document.querySelector(".popup__form-type-add-place");
const placeName = placeForm.querySelector(".form__input-type-place-name");
const placeURL = placeForm.querySelector(".form__input-type-place-url");

const imgPreview = document.querySelector(".popup-prev");
const imgPreviewCloseButton = imgPreview.querySelector(
  ".popup__close-button"
);

const placeAdd = document.querySelector(".popup-place");
const placeClose = placeAdd.querySelector(".popup__button-close-type-place");



///////////////////////////////////////////
//////// Functions ///////////
///////////////////////////////////////////
function fillProfileForm() { //this function set the input fields value.
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
}

function saveProfileForm() {
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  closePopup(popup);

}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}


function openProfileForm() { //opens the edit name form
  fillProfileForm();
  openPopup(popup);
}


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

  // toggleClass(placeAdd, "popup_opened");
  closePopup(placeAdd);
  placeForm.reset();
}

function renderCard(card, list) { // adds the card to the first place
  list.prepend(createCard(card));
}

function previewImage(card) {
  const popupImage = imgPreview.querySelector(".popup__image");
  const popupCaption = imgPreview.querySelector(".popup__caption");
  popupImage.src = card.link;
  popupImage.alt = `A beautiful place in ${card.name}`;
  popupCaption.textContent = card.name;
  openPopup(imgPreview);
}


///////////////////////////////////////////
//////// EventListeners ///////////
///////////////////////////////////////////

editProfileButton.addEventListener("click", () => openProfileForm()); // edit profile open popup
closeButton.addEventListener("click", () => closePopup(popup)); // closes the poup when click on X.
addForm.addEventListener("click", () => openPopup(placeAdd)); //open the add photo form.
placeClose.addEventListener("click", () => closePopup(placeAdd)); // close add form
imgPreview.addEventListener("click", () => closePopup(imgPreview)); // closes the image preview
profileEdit.addEventListener("submit", () => handleProfileFormSubmit(event)); // saves the profile info + prevents the site submit .
placeForm.addEventListener("submit", () => addCard(event)) //this listining to event submit (save)






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

//create card
function createCard(card) {
  const cardTemplateContent = cardTemplate.content;
  const cardElement = cardTemplateContent.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__info-title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__image-trash");

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `place in ${card.name}`;

  cardImage.addEventListener("click", () => previewImage(card));
  deleteButton.addEventListener("click", () => cardElement.remove());
  likeButton.addEventListener("click", () =>
    toggleClass(likeButton, "card__like-button_active"));
  return cardElement;
}