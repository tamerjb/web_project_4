import {
    Popup
} from "./Popup";
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

    }
    open(image, text) {
        this._popupImage = this._popupElement.querySelector(".popup__image");
        this._popupImage.src = image;
        this._popupImage.alt = `A view of ${text}`;
        this._popupElement.querySelector(".popup__caption").textContent = text;
        super.open();
    }
}