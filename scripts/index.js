///////////////////////////////////////////
//////// Selectors ///////////
///////////////////////////////////////////
let form = document.querySelector(".form");
let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name");
let editProfileButton = profile.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__button-close");
let profileTitle = profile.querySelector(".profile__title");
let inputName = form.querySelector(".form__input[name='name']");
let inputTitle = form.querySelector(".form__input[name='title']");
const cards = document.querySelector(".cards");


const cardlist = cards.querySelector(".cards__list");
const addForm = profile.querySelector(".profile__add-button");

const placeForm = document.querySelector(".popup__form-type-add-place");
const placeName = placeForm.querySelector(".form__input-type-place-name");
const placeURL = placeForm.querySelector(".form__input-type-place-url");

const imgPrev = document.querySelector(".popup-prev");
const imgPrevCloseButton = imgPrev.querySelector(
  ".popup__close-button"
);

const placeAdd = document.querySelector(".popup-add-place");
const placeClose = placeAdd.querySelector(".popup__button-close-type-place");



///////////////////////////////////////////
//////// Functions ///////////
///////////////////////////////////////////
function EditNameForm() { //toggle name form
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
  popup.classList.toggle("popup_opened");
}

function toggleClass(item, x) { //function toggles(add/remove) a specifc class, *item* is selcetor name / x is the class that want to add/remove .
  item.classList.toggle(x);
}

function formHandler(event) { //saves the name after editing
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  popup.classList.remove("popup_opened");
}

function addCard(event) { //this function to add the card manullay

  event.preventDefault();

  renderCard({
    name: placeName.value,
    link: placeURL.value
  }, cardlist);

  toggleClass(placeAdd, "popup_opened");
  placeForm.reset();
}

function renderCard(card, list) { // adds the card to the first place
  list.prepend(createcard(card));
}

function previewImage(card) {
  const popupImage = imgPrev.querySelector(".popup__image");
  const popupCaption = imgPrev.querySelector(".popup__caption");
  popupImage.src = card.link;
  popupImage.alt = `A beautiful place in ${card.name}`;
  popupCaption.textContent = card.name;
  // ToggleAddPopup(imgPrev);
  toggleClass(imgPrev, "popup_opened");
}


///////////////////////////////////////////
//////// EventListeners ///////////
///////////////////////////////////////////

editProfileButton.addEventListener("click", EditNameForm);
closeButton.addEventListener("click", EditNameForm);
form.addEventListener("submit", formHandler);
addForm.addEventListener("click", () => toggleClass(placeAdd, "popup_opened")); //open photo add form
placeClose.addEventListener("click", () => toggleClass(placeAdd, "popup_opened")); // close add form
placeForm.addEventListener("submit", addCard) //this listining to event submit (save)
imgPrevCloseButton.addEventListener("click", () => toggleClass(imgPrev, "popup_opened"));





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
//create card
function createcard(info) {
  const cardtemplate = document.querySelector("#card-template").content;
  const cardelement = cardtemplate.querySelector(".card").cloneNode(true);
  const cardtitle = cardelement.querySelector(".card__info-title");
  const likebutton = cardelement.querySelector(".card__like-button");
  const cardimage = cardelement.querySelector(".card__image");
  const deletebutton = cardelement.querySelector(".card__image-trash");
  cardtitle.textContent = info.name;
  cardimage.src = info.link;
  cardimage.alt = `place in ${info.name}`;

  cardimage.addEventListener("click", () => previewImage(info));
  deletebutton.addEventListener("click", () => cardelement.remove());
  likebutton.addEventListener("click", () =>
    toggleClass(likebutton, "card__like-button_active"));
  return cardelement;
}
//funcation toggles class on/off

//adds the card to the list
function addcard(card, list) {
  list.prepend(createcard(card));
}
//adding the array
initialCards.forEach((card) => addcard(card, cardlist));