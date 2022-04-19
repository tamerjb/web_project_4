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




//functions
function openForm() {
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
  popup.classList.add("popup_opened");
}

function closeForm() {
  popup.classList.remove("popup_opened");
}

function formHandler(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
    popup.classList.remove("popup_opened");

}

//eventListener
editProfileButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", formHandler);

const initialCards = [
  {
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
function createcard(info){
  const cardtemplate = document.querySelector("#card-template").content;
  const cardelement = cardtemplate.querySelector(".card").cloneNode(true);
  const cardtitle = cardelement.querySelector(".card__info-title");
  const likebutton = cardelement.querySelector(".card__like-button");
  const cardimage = cardelement.querySelector(".card__image");
  const deletebutton = cardelement.querySelector(".card__image-trash");
  cardtitle.textContent = info.name;
  cardimage.src = info.link;
  cardimage.alt = `place in ${info.name}`;

  cardimage.addEventListener("click", () => previewimage(info));
  deletebutton.addEventListener("click", () => cardelement.remove());
  likebutton.addEventListener("click", () =>
    toggleClass(likebutton, "card__like-button_active")

  );
  return cardelement;
}
//funcation toggles class on/off
function toggleClass(item,x) {
  item.classList.toggle(x);
}
//adds the card to the list
function addcard(card, list) {
  list.prepend(createcard(card));
}
//adding the array
initialCards.forEach((card) => addcard(card, cardlist));

