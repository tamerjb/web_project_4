export class FormValidator {
    constructor(configs, formElement) {
        this._form = formElement;
        this._inputSelector = configs.inputSelector;
        this._submitButtonSelector = configs.submitButtonSelector;
        this._inactiveButtonClass = configs.inactiveButtonClass;
        this._inputErrorClass = configs.inputErrorClass;
        this._errorClass = configs.errorClass;

    }
    _showInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        // add error msg/class
        errorElement.textContent = inputElement.validationMessage;
        // input.classList.add(errorClass);
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass)
    }
    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        // add error msg/class
        errorElement.textContent = "";
        // input.classList.remove(errorClass);
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);

    }
    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }

    }
    _hasValidInputs() {
        return this._inputList.some((inputElement) => {
            return inputElement.validity.valid;
        })

    }
    _setEvenetListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._button = this._form.querySelector(this._submitButtonSelector);
        this._toggleButton();
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this._toggleButton();
            });

        });
    }
    _toggleButton() {
        if (this._hasValidInputs()) {
            this._button.disabled = true;
            this._button.classList.add(this._inactiveButtonClass);
        } else {
            this._button.disabled = false;
            this._button.classList.remove(this._inactiveButtonClass);
        }


    }
    enableValidation() {
        this._form.addEventListener("submit", (e) => e.preventDefault());
        this._setEventListeners();
    }

}


// const enableValidation = (settings) => {
//     const formEl = Array.from(document.querySelectorAll(settings.formSelector));
//     formEl.forEach((formEl) => {
//         formEl.addEventListener("submit", (e) => {
//             e.preventDefault();
//         })
//         //selecting the inputs
//         setEvenetListeners(formEl, settings);
//     });
// };

//


// const hasValidInputs = (inputList) => {
//     return inputList.every(input => input.validity.valid === true);
//     //this checks the inputs if valid and  returs true or false
// }

// const toggleButton = (inputList, button, settings) => {
//     if (hasValidInputs(inputList)) {
//         button.disabled = false;
//         button.classList.remove(settings.inactiveButtonClass);

//     } else {
//         button.disabled = true;
//         button.classList.add(settings.inactiveButtonClass);
//     }

// }




// enableValidation(settings);
// const setEvenetListeners = (formEl, settings) => {
//             const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
//             const submitButton = formEl.querySelector(settings.submitButtonSelector);
//             toggleButton(inputList, submitButton, settings);

//             inputList.forEach((input) => {
//                 input.addEventListener('input', (e) => {
//                     // check validity
//                     checkInputValidity(formEl, input, settings);

//                     //toggle the button
//                     toggleButton(inputList, submitButton, settings);
//                 })
//             })

//         }