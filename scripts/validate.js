// enabling validation by calling enableValidation()
// pass all the settings on call
const hideInputError = (input, formEl, {
    errorClass
}) => {
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    console.log(errorSpan);
    // add error msg/class
    errorSpan.textContent = "";
    // input.classList.remove(errorClass);
    input.classList.remove("form__input-errorline");

}
const showInputError = (input, formEl, {
    errorClass
}) => {
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    console.log(errorSpan);
    // add error msg/class
    console.log(input.validationMessage);
    errorSpan.textContent = input.validationMessage;
    // input.classList.add(errorClass);
    input.classList.add("form__input-errorline");


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

    inputList.forEach((input) => {
        input.addEventListener('input', (e) => {
            console.log(e)
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
            e.preventdeafult();
        })
        //selecting the inputs
        setEvenetListeners(formEl, settings);
    });
};

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input-error",
    errorClass: "form__input-error"
});