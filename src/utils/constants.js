///////////////////////////////////////////
//////// Selectors ///////////
///////////////////////////////////////////


export const profile = document.querySelector(".profile");
export const profilePopup = document.querySelector(".popup-edit-profile");
export const placeForm = document.querySelector(".popup-place");
export const cardTemplateSelector = "#card-template";
export const editProfileButton = profile.querySelector(".profile__edit-button");
export const addCardPopup = profile.querySelector(".profile__add-button");
export const avatar = document.querySelector(".profile__image-container");
export const avatarForm = document.querySelector(".popup__form_type_avatar");

export const customFetch = (url, headers) => {
    return fetch(url, headers)
        .then(res => res.ok ? res.json() : Promise.reject(res.statusText)).catch(err => console.log())

}
// export const profileForm = document.querySelector(".form");
// export const profileName = profile.querySelector(".profile__name");
// export const profileTitle = profile.querySelector(".profile__title");
// export const inputName = form.querySelector(".form__input[name='name']");
// export const inputTitle = form.querySelector(".form__input[name='title']");
// export const cards = document.querySelector(".cards");
// export const cardList = cards.querySelector(".cards__list");
// export const placePopupForm = document.querySelector(".popup__form-type-add-place");
// export const name = placePopupForm.querySelector(".form__input-type-place-name");
// export const placeURL = placePopupForm.querySelector(".form__input-type-place-url");
// export const imgPreview = document.querySelector(".popup-prev");
// export const popupPreviewImg = imgPreview.querySelector(".popup__image");
// export const popupPreviewCaption = imgPreview.querySelector(".popup__caption");
// export const closeButtons = document.querySelectorAll('.popup__close-button');




// export const initialCards = [{
//         name: "Yosemite Valley",
//         link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
//     },
//     {
//         name: "Lake Louise",
//         link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
//     },
//     {
//         name: "Bald Mountains",
//         link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
//     },
//     {
//         name: "Latemar",
//         link: "https://code.s3.yandex.net/web-code/latemar.jpg",
//     },
//     {
//         name: "Vanoise National Park",
//         link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
//     },
//     {
//         name: "Lago di Braies",
//         link: "https://code.s3.yandex.net/web-code/lago.jpg",
//     },
// ];