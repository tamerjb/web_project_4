///////////////////////////////////////////
//////// Selectors ///////////
///////////////////////////////////////////
export const profileForm = document.querySelector(".form");
export const profile = document.querySelector(".profile");
export const profileName = profile.querySelector(".profile__name");
export const profilePopup = document.querySelector(".popup");
export const profileTitle = profile.querySelector(".profile__title");
export const inputName = form.querySelector(".form__input[name='name']");
export const inputTitle = form.querySelector(".form__input[name='title']");
export const cards = document.querySelector(".cards");
export const cardTemplate = document.querySelector("#card-template");
export const cardList = cards.querySelector(".cards__list");
export const profileEdit = document.querySelector(".popup-edit-profile");
export const placePopupForm = document.querySelector(".popup__form-type-add-place");
export const placeName = placePopupForm.querySelector(".form__input-type-place-name");
export const placeURL = placePopupForm.querySelector(".form__input-type-place-url");
export const imgPreview = document.querySelector(".popup-prev");
export const popupPreviewImg = imgPreview.querySelector(".popup__image");
export const popupPreviewCaption = imgPreview.querySelector(".popup__caption");


export const placeForm = document.querySelector(".popup-place");
export const cardTemplateSelector = "#card-template";


export const editProfileButton = profile.querySelector(".profile__edit-button");
export const addCardPopup = profile.querySelector(".profile__add-button");
export const closeButtons = document.querySelectorAll('.popup__close-button');

export const initialCards = [{
        placename: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
        placename: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
        placename: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
        placename: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
        placename: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
        placename: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
];