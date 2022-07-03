import {
    Popup
} from "./Popup";
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupElement.querySelector(".popup__image");
        this._popupCaption = this._popupElement.querySelector(".popup__caption");

    }
    open(image, text) {

        this._popupImage.src = image;
        this._popupImage.alt = `A view of ${text}`;
        this._popupCaption.textContent = text;
        super.open();
    }
}