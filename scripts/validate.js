// enabling validation by calling enableValidation()
// pass all the settings on call
const hideInputError = () => {

}
const showInputError = (input, formEl) => {
    const errorSpan = formEl.querySelector(`.${input.id}-error`);
    console.log(errorSpan);
}

const checkInputValidity = (formEl, input, settings) => {
    if (input.validity.valid) {
        hideInputError();
    } else {
        showInputError(input, formEl);
    }

}
const setEvenetListeners = (formEl, settings) => {
    const inputs = Array.from(formEl.querySelectorAll(settings.inputSelector));
    inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            console.log(e)
            // check validity
            checkInputValidity(formEl, input, settings);
            // add error msg/class
            //toggle the button
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
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
});