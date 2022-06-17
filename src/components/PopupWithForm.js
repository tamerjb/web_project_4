import {
    Popup
} from "./Popup";
export class PopupWithForm extends Popup {
    constructor(PopupSelector, submitHandler) {
        super(PopupSelector);
        this._submitHandler = submitHandler;
        this._formElement = this._popupElement.querySelector('.popup__form');
    }
    _getInputValues() {
        const inputs = [...this._formElement.querySelectorAll(".form__input")];
        const inputValues = {}
        inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        })
        return inputValues;

    }
    setEventListeners() {
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValues());
            this._formElement.reset();
            this.close();
        });
        super.setEventListeners();
    }
    close = () => {
        super.close()

    }
}
// const profileName = '';
// const profileJob = '';
// const editModal = new PopupWithForm(".popup-edit-profile", (data) => {
//     profileName.textContent = data.name;
//     profile.textContent = data.job;
// })