import {
    Popup
} from "./Popup";
export class PopupWithForm extends Popup {
    constructor(PopupSelector, submitHandler) {
        super(PopupSelector);
        this._submitHandler = submitHandler;
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._inputs = [...this._formElement.querySelectorAll(".form__input")];;
        this._submitButton = this._formElement.querySelector(".form__button");
        this._submitButtonText = this._submitButton.textContent;
    }
    _getInputValues() {

        const inputValues = {}
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        })
        return inputValues;

    }
    setInputValues(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });
    }
    setEventListeners() {
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValues());
        });
        super.setEventListeners();
    }
    close = () => {
        super.close()
        this._formElement.reset(); //reset the form when openning again

    }
    renderLoading(isLoading, text = "Saving...") {
        if (isLoading) {
            this._submitButton.textContent = text;
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }
}