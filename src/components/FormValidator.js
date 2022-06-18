export class FormValidator {
    constructor(configs, formElement) {
        this._form = formElement;
        this._inputSelector = configs.inputSelector;
        this._submitButtonSelector = configs.submitButtonSelector;
        this._inactiveButtonClass = configs.inactiveButtonClass;
        this._inputErrorClass = configs.inputErrorClass;
        this._errorClass = configs.errorClass;

    }
    _showInputError(input) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        // add error msg/class
        errorElement.textContent = input.validationMessage;
        // input.classList.add(errorClass);
        errorElement.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass)
    }
    _hideInputError(input) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        // add error msg/class
        errorElement.textContent = "";
        // input.classList.remove(errorClass);
        errorElement.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);

    }
    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);

        }

    }
    _hasValidInputs() {
        return this._inputList.every((input) => {
            return input.validity.valid;
        })

    }
    _setEventListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._button = this._form.querySelector(this._submitButtonSelector);
        this.toggleButton();
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this.toggleButton();
            });
            this.resetValidation();

        });
    }
    toggleButton() {
        if (this._hasValidInputs()) {
            this._button.disabled = false;
            this._button.classList.remove(this._inactiveButtonClass);
        } else {
            this._button.disabled = true;
            this._button.classList.add(this._inactiveButtonClass);
        }

    }
    enableValidation() {
        this._form.addEventListener("submit", (e) => e.preventDefault());
        this._setEventListeners();
    }

    resetValidation() {
        this.toggleButton(); // <= = controlling the submit button ==

        this._inputList.forEach((input) => {
            this._hideInputError(input) //<= = clearing errors ==
        });

    }

}