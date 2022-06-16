export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._overlayClose = this._overlayClose.bind(this)
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
        document.addEventListener("mousedown", this._overlayClose);

    }
    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
        document.removeEventListener("click", this._overlayClose);
        console.log("close")

    }
    _overlayClose(evt) {
        if (evt.target.classList.contains("popup_opened")) {
            this.close();
        }
    }
    setEventListeners() {
        this._popupElement
            .querySelector(".popup__close-button")
            .addEventListener("click", this.close);
    }

}