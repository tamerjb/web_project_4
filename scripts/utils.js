import {
    FormValidator
} from "./FormValidator.js";


///////////////////////////////////////////
//////// Functions ///////////
///////////////////////////////////////////


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

export function closeOnEscape(evt) {


    if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        closePopup(popupOpened);
    }
}

export function closeOnClickOutside(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target)
    }
}