import {
    previewImage
} from "./index.js";

export class Card {
    constructor(data, selector) {
        this._text = data.name;
        this._link = data.link;
        this._selector = selector;
    }
    _getCloneFromTemplate() {
        const cardElement = document
            .querySelector(this._selector)
            .content.querySelector(".card")
            .cloneNode(true);
        return cardElement;
    }
    _handleLikeButton(evt) {
        evt.target.classList.toggle("card__like-button_active");
    }
    _setEventListeners() {

        this._likeButton.addEventListener("click", (evt) => {
            this._handleLikeButton(evt);
        });
        this._image.addEventListener("click", (evt) => {
            previewImage(this._link, this._text);
        });
        this._deleteButton.addEventListener("click", (evt) => {
            evt.target.remove();

        })
    }
    generateCard() {
        this._element = this._getCloneFromTemplate();
        this._image = this._element.querySelector(".card__image");
        this._likeButton = this._element.querySelector(".card__like-button");
        this._deleteButton = this._element.querySelector(".card__image-trash");
        this._element.querySelector(".card__info-title").textContent = this._text;
        this._image.src = this._link;
        this._image.alt = `Place in ${this._text}`;

        this._setEventListeners();

        return this._element;
    }
}