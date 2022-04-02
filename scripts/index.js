let form = document.querySelector(".form");
let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name");
let editProfileButton = profile.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__button-close");
let profileTitle = profile.querySelector(".profile__title");
let inputName = form.querySelector(".form__input[name='name']");
let inputTitle = form.querySelector(".form__input[name='title']");


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
  closeForm();
}

//eventListener
editProfileButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", formHandler);

// saveButton.addEventListener("click", closeForm);

// let saveButton = form.querySelector(".form__button");
// let cards = document.querySelector(".cards");
// let likebuttons = cards.querySelectorAll(".card__like-button");

// for (let i = 0; i < likebuttons.length; i++) {
//   let likeButton = likebuttons[i];
//   function toggleLike() {
//     likeButton.classList.toggle("card__like-button_active");
//   }
//   likeButton.addEventListener("click", toggleLike);
// }

