// enabling validation by calling enableValidation()
// pass all the settings on call
const hideInputError = (input, formEl, settings) => {
    const errorElement = formEl.querySelector(`#${input.id}-error`);
    // add error msg/class
    errorElement.textContent = "";
    // input.classList.remove(errorClass);
    input.classList.remove(settings.errorClass);

}
const showInputError = (input, formEl, settings) => {
    const errorElement = formEl.querySelector(`#${input.id}-error`);
    // add error msg/class
    errorElement.textContent = input.validationMessage;
    // input.classList.add(errorClass);
    input.classList.add(settings.errorClass);


}

const checkInputValidity = (formEl, input, settings) => {
    if (input.validity.valid) {
        hideInputError(input, formEl, settings);
    } else {
        showInputError(input, formEl, settings);
    }

}
const hasValidInputs = (inputList) => {
    return inputList.every(input => input.validity.valid === true);
    //this checks the inputs if valid and  returs true or false
}

const toggleButton = (inputList, button, settings) => {
    if (hasValidInputs(inputList)) {
        button.disabled = false;
        button.classList.remove(settings.inactiveButtonClass);

    } else {
        button.disabled = true;
        button.classList.add(settings.inactiveButtonClass);
    }

}
const setEvenetListeners = (formEl, settings) => {
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const submitButton = formEl.querySelector(settings.submitButtonSelector);
    toggleButton(inputList, submitButton, settings);

    inputList.forEach((input) => {
        input.addEventListener('input', (e) => {
            // check validity
            checkInputValidity(formEl, input, settings);

            //toggle the button
            toggleButton(inputList, submitButton, settings);
        })
    })

}

const enableValidation = (settings) => {
    const formEl = Array.from(document.querySelectorAll(settings.formSelector));
    formEl.forEach((formEl) => {
        formEl.addEventListener("submit", (e) => {
            e.preventDefault();
        })
        //selecting the inputs
        setEvenetListeners(formEl, settings);
    });
};
const settings = {

    formSelector: ".popup__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input-error",
    errorClass: "form__input-errorline"

};
enableValidation(settings);