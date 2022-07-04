export class Card {
    constructor(
        data,
        selector, {
            handleCardClick,
            handleCardDelete,
            handleLikeCard,
        }, userId
    ) {
        this._text = data.name;
        this._link = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleLikeCard = handleLikeCard;
        this._id = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
    }
    _getCloneFromTemplate = () => {
        const cardElement = document
            .querySelector(this._selector)
            .content.querySelector(".card")
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners = () => {

        this._likeButton.addEventListener("click", () => {
            this._handleLikeCard(this._id);
        });
        this._image.addEventListener("click", () => {
            this._handleCardClick(this._id);
        });
        this._deleteButton.addEventListener("click", () => {
            this._handleCardDelete(this._id);

        })
    }

    likeCard(newLikes) {
        this._likeButton.classList.add("card__like-button_active");
        this._likes = newLikes;
        this._likeCount.textContent = this._likes.length;
    }

    dislikeCard(newLikes) {
        this._likeButton.classList.remove("card__like-button_active");
        this._likes = newLikes;
        this._likeCount.textContent = this._likes.length;
    }
    isLiked() {
        return this._likes.some((like) => like._id === this._userId);
    }

    removeCard() {
        this._element.remove();
        this._element = null;

    }
    generateCard() {
        this._element = this._getCloneFromTemplate();
        this._image = this._element.querySelector(".card__image");


        this._element.querySelector(".card__info-title").textContent = this._text;
        this._image.src = this._link;
        this._image.alt = `Place in ${this._text}`;

        this._deleteButton = this._element.querySelector(".card__image-trash");


        this._ownerId !== this._userId &&
            (this._deleteButton.style.display = "none");
        this._likeButton = this._element.querySelector(".card__like-button");
        this._likeCount = this._element.querySelector(".card__like-count");
        this._likeCount.textContent = this._likes.length;

        this.isLiked() && this.likeCard(this._likes);

        this._setEventListeners();

        return this._element;
    }
}