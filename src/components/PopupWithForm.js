import {
    Popup
} from "./Popup";
export class PopupWithForm extends Popup {
    constructor(PopupSelector, submitHandler) {
        super(PopupSelector);
        this._submitHandler = submitHandler;
        this._inputs = [...this._formElement.querySelectorAll(".form__input")];;

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

}