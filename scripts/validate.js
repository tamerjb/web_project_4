// enabling validation by calling enableValidation()
// pass all the settings on call
const enableValidation = (settings) => {
    const formElements = Array.from(document.querySelectorAll(settings.formSelector));
    formElements.forEach(formEl => {
        formElements.addEvenetlistener("submit", (e) => {
            e.preventdeafult();
        })
        //selecting the inputs
        const inputs = formEl.querySelectorAll(settings.inputSelector);

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