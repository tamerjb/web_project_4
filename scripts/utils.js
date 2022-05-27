import {
    Card
} from "./card.js";
///////////////////////////////////////////
//////// Selectors ///////////
///////////////////////////////////////////
export const profileForm = document.querySelector(".form");
export const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
export const profilePopup = document.querySelector(".popup");
const profileTitle = profile.querySelector(".profile__title");
const inputName = form.querySelector(".form__input[name='name']");
const inputTitle = form.querySelector(".form__input[name='title']");
const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template");
export const cardList = cards.querySelector(".cards__list");
export const profileEdit = document.querySelector(".popup-edit-profile");
export const placePopupForm = document.querySelector(".popup__form-type-add-place");
const placeName = placePopupForm.querySelector(".form__input-type-place-name");
const placeURL = placePopupForm.querySelector(".form__input-type-place-url");
export const imgPreview = document.querySelector(".popup-prev");
const PopupPreviewImg = imgPreview.querySelector(".popup__image");
const PopupPreviewCaption = imgPreview.querySelector(".popup__caption");


export const placeForm = document.querySelector(".popup-place");
const cardTemplateSelector = "#card-template";

///////////////////////////////////////////
//////// Functions ///////////
///////////////////////////////////////////
export function fillProfileForm() { //this function set the input fields value.
    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
}

function saveProfileForm() {
    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
    closePopup(profilePopup);

}

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeOnEscape);
    popup.addEventListener("mousedown", closeOnClickOutside);

}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeOnEscape);
    popup.removeEventListener("mousedown", closeOnClickOutside);

}

function togglePopupSubmitButton(popup) {
    const inputList = Array.from(popup.querySelectorAll(settings.inputSelector));
    const submitButton = popup.querySelector(settings.submitButtonSelector);
    toggleButton(inputList, submitButton, settings);
}

export function openProfileForm() { //opens the edit name form
    fillProfileForm();
    openPopup(profilePopup);

}


function toggleClass(item, className) { //function toggles(add/remove) a specifc class, *item* is selcetor name / x is the class that want to add/remove .
    item.classList.toggle(className);
}

export function handleProfileFormSubmit(event) { //saves the name after editing
    event.preventDefault();
    saveProfileForm();
}

export function addCard(event) { //this function to add the card manullay
    event.preventDefault();
    renderCard({
        name: placeName.value,
        link: placeURL.value
    }, cardList);

    // toggleClass(placeForm, "popup_opened");
    closePopup(placeForm);
    placePopupForm.reset();
    togglePopupSubmitButton(placeForm);
}

export function renderCard(card, list) { // adds the card to the first place
    const cardToRender = new Card(card, cardTemplateSelector).generateCard();
    list.prepend(cardToRender);
}

export function previewImage(thisLink, thisName) {

    PopupPreviewImg.src = thisLink;
    PopupPreviewImg.alt = `A beautiful place in ${thisName}`;
    PopupPreviewCaption.textContent = thisName;
    openPopup(imgPreview);
}

function closeOnEscape(evt) {
    const popupOpened = document.querySelector(".popup_opened");

    if (evt.key === "Escape") {
        closePopup(popupOpened);
    }
}

// function closeOnClickOutside(e) {
//   const popupOpened = document.querySelector(".popup_opened");
//   if (e.target.classList.contains("popup")) {
//     closePopup(popupOpened);
//   }
// }
function closeOnClickOutside(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target)
    }
}