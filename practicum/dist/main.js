/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewImage": function() { return /* binding */ previewImage; }
/* harmony export */ });
/* harmony import */ var _scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/utils.js */ "../scripts/utils.js");
/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/FormValidator.js */ "../scripts/FormValidator.js");
/* harmony import */ var _scripts_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts/Card.js */ "../scripts/Card.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");



 // checks

let someStr = "I coded. I saved. I bundled.";
console.log("Hello, World!");
const numbers = [2, 3, 5]; // Arrow function. How will Internet Explorer cope with it?

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // 4, 6, 10
///////////////////////////////////////////
//////// Selectors ///////////
///////////////////////////////////////////

const profileForm = document.querySelector(".form");
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profilePopup = document.querySelector(".popup");
const profileTitle = profile.querySelector(".profile__title");
const inputName = form.querySelector(".form__input[name='name']");
const inputTitle = form.querySelector(".form__input[name='title']");
const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template");
const cardList = cards.querySelector(".cards__list");
const profileEdit = document.querySelector(".popup-edit-profile");
const placePopupForm = document.querySelector(".popup__form-type-add-place");
const placeName = placePopupForm.querySelector(".form__input-type-place-name");
const placeURL = placePopupForm.querySelector(".form__input-type-place-url");
const imgPreview = document.querySelector(".popup-prev");
const popupPreviewImg = imgPreview.querySelector(".popup__image");
const popupPreviewCaption = imgPreview.querySelector(".popup__caption");
const placeForm = document.querySelector(".popup-place");
const cardTemplateSelector = "#card-template";
const editProfileButton = profile.querySelector(".profile__edit-button");
const addCardPopup = profile.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll('.popup__close-button'); ///////////////////////////////////////////
//////// EventListeners ///////////////////
///////////////////////////////////////////

closeButtons.forEach(button => {
  //close popups by pressing on X
  const popup = button.closest('.popup');
  button.addEventListener('click', () => (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(popup));
});
editProfileButton.addEventListener("click", () => openProfileForm()); // edit profile open popup

addCardPopup.addEventListener("click", () => (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(placeForm)); //open the add photo form.

profileEdit.addEventListener("submit", handleProfileFormSubmit); // saves the profile info + prevents the site submit .

placePopupForm.addEventListener("submit", addCard); //this listining to event submit (save)
///////////////////////////////////////////
//////// Form Validtation ////////////////
/////////////////////////////////////////

const validateConfigs = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error"
};
const profileFormValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(validateConfigs, profileForm);
const addFormValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(validateConfigs, placeForm);
profileFormValidator.enableValidation();
addFormValidator.enableValidation();
const initialCards = [{
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
  name: "Lake Louise",
  link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
  name: "Bald Mountains",
  link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
  name: "Vanoise National Park",
  link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://code.s3.yandex.net/web-code/lago.jpg"
}];
/** This line adds the array to the page */

initialCards.forEach(card => renderCard(card, cardList));

function openProfileForm() {
  //opens the edit name form
  fillProfileForm();
  (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(profilePopup);
}

function fillProfileForm() {
  //this function set the input fields value.
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
}

function saveProfileForm() {
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(profilePopup);
}

function toggleClass(item, className) {
  //function toggles(add/remove) a specifc class, *item* is selcetor name / x is the class that want to add/remove .
  item.classList.toggle(className);
}

function handleProfileFormSubmit(event) {
  //saves the name after editing
  event.preventDefault();
  saveProfileForm();
}

function addCard(event) {
  //this function to add the card manullay
  event.preventDefault();
  renderCard({
    name: placeName.value,
    link: placeURL.value
  }, cardList); // toggleClass(placeForm, "popup_opened");

  (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(placeForm);
  placePopupForm.reset();
  addFormValidator.resetValidation();
}

function renderCard(card, list) {
  // adds the card to the first place
  const cardToRender = new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_2__.Card(card, cardTemplateSelector).generateCard();
  list.prepend(cardToRender);
}

function previewImage(thisLink, thisName) {
  popupPreviewImg.src = thisLink;
  popupPreviewImg.alt = "A beautiful place in ".concat(thisName);
  popupPreviewCaption.textContent = thisName;
  (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(imgPreview);
}

/***/ }),

/***/ "../scripts/Card.js":
/*!**************************!*\
  !*** ../scripts/Card.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var _practicum_src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../practicum/src/index.js */ "./src/index.js");

class Card {
  constructor(data, selector) {
    this._text = data.name;
    this._link = data.link;
    this._selector = selector;
  }

  _getCloneFromTemplate() {
    const cardElement = document.querySelector(this._selector).content.querySelector(".card").cloneNode(true);
    return cardElement;
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", evt => {
      this._handleLikeButton(evt);
    });

    this._image.addEventListener("click", evt => {
      (0,_practicum_src_index_js__WEBPACK_IMPORTED_MODULE_0__.previewImage)(this._link, this._text);
    });

    this._deleteButton.addEventListener("click", evt => {
      this._element.remove();
    });
  }

  generateCard() {
    this._element = this._getCloneFromTemplate();
    this._image = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__image-trash");
    this._element.querySelector(".card__info-title").textContent = this._text;
    this._image.src = this._link;
    this._image.alt = "Place in ".concat(this._text);

    this._setEventListeners();

    return this._element;
  }

}

/***/ }),

/***/ "../scripts/FormValidator.js":
/*!***********************************!*\
  !*** ../scripts/FormValidator.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": function() { return /* binding */ FormValidator; }
/* harmony export */ });
class FormValidator {
  constructor(configs, formElement) {
    this._form = formElement;
    this._inputSelector = configs.inputSelector;
    this._submitButtonSelector = configs.submitButtonSelector;
    this._inactiveButtonClass = configs.inactiveButtonClass;
    this._inputErrorClass = configs.inputErrorClass;
    this._errorClass = configs.errorClass;
  }

  _showInputError(input) {
    const errorElement = this._form.querySelector("#".concat(input.id, "-error")); // add error msg/class


    errorElement.textContent = input.validationMessage; // input.classList.add(errorClass);

    errorElement.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector("#".concat(input.id, "-error")); // add error msg/class


    errorElement.textContent = ""; // input.classList.remove(errorClass);

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
    return this._inputList.every(input => {
      return input.validity.valid;
    });
  }

  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);

    this._toggleButton();

    this._inputList.forEach(input => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);

        this._toggleButton();
      });
      this.resetValidation();
    });
  }

  _toggleButton() {
    if (this._hasValidInputs()) {
      this._button.disabled = false;

      this._button.classList.remove(this._inactiveButtonClass);
    } else {
      this._button.disabled = true;

      this._button.classList.add(this._inactiveButtonClass);
    }
  }

  enableValidation() {
    this._form.addEventListener("submit", e => e.preventDefault());

    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButton(); // <= = controlling the submit button ==


    this._inputList.forEach(input => {
      this._hideInputError(input); //<= = clearing errors ==

    });
  }

}

/***/ }),

/***/ "../scripts/utils.js":
/*!***************************!*\
  !*** ../scripts/utils.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeOnClickOutside": function() { return /* binding */ closeOnClickOutside; },
/* harmony export */   "closeOnEscape": function() { return /* binding */ closeOnEscape; },
/* harmony export */   "closePopup": function() { return /* binding */ closePopup; },
/* harmony export */   "openPopup": function() { return /* binding */ openPopup; }
/* harmony export */ });
/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidator.js */ "../scripts/FormValidator.js");
 ///////////////////////////////////////////
//////// Functions ///////////
///////////////////////////////////////////

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEscape);
  popup.addEventListener("mousedown", closeOnClickOutside);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEscape);
  popup.removeEventListener("mousedown", closeOnClickOutside);
}
function closeOnEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}
function closeOnClickOutside(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBS0E7Q0FJQTs7QUFFQSxJQUFJTSxPQUFPLEdBQUcsOEJBQWQ7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFoQixFQUVBOztBQUNBLE1BQU1DLGNBQWMsR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVlDLE1BQU0sSUFBSUEsTUFBTSxHQUFHLENBQS9CLENBQXZCO0FBRUFMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxjQUFaLEdBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFDQSxNQUFNRyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFwQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHRCxPQUFPLENBQUNELGFBQVIsQ0FBc0IsZ0JBQXRCLENBQXBCO0FBQ0EsTUFBTUcsWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQSxNQUFNSSxZQUFZLEdBQUdILE9BQU8sQ0FBQ0QsYUFBUixDQUFzQixpQkFBdEIsQ0FBckI7QUFDQSxNQUFNSyxTQUFTLEdBQUdDLElBQUksQ0FBQ04sYUFBTCxDQUFtQiwyQkFBbkIsQ0FBbEI7QUFDQSxNQUFNTyxVQUFVLEdBQUdELElBQUksQ0FBQ04sYUFBTCxDQUFtQiw0QkFBbkIsQ0FBbkI7QUFDQSxNQUFNUSxLQUFLLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsTUFBTVMsWUFBWSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsTUFBTVUsUUFBUSxHQUFHRixLQUFLLENBQUNSLGFBQU4sQ0FBb0IsY0FBcEIsQ0FBakI7QUFDQSxNQUFNVyxXQUFXLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBcEI7QUFDQSxNQUFNWSxjQUFjLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBdkI7QUFDQSxNQUFNYSxTQUFTLEdBQUdELGNBQWMsQ0FBQ1osYUFBZixDQUE2Qiw4QkFBN0IsQ0FBbEI7QUFDQSxNQUFNYyxRQUFRLEdBQUdGLGNBQWMsQ0FBQ1osYUFBZixDQUE2Qiw2QkFBN0IsQ0FBakI7QUFDQSxNQUFNZSxVQUFVLEdBQUdoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxNQUFNZ0IsZUFBZSxHQUFHRCxVQUFVLENBQUNmLGFBQVgsQ0FBeUIsZUFBekIsQ0FBeEI7QUFDQSxNQUFNaUIsbUJBQW1CLEdBQUdGLFVBQVUsQ0FBQ2YsYUFBWCxDQUF5QixpQkFBekIsQ0FBNUI7QUFHQSxNQUFNa0IsU0FBUyxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWxCO0FBQ0EsTUFBTW1CLG9CQUFvQixHQUFHLGdCQUE3QjtBQUdBLE1BQU1DLGlCQUFpQixHQUFHbkIsT0FBTyxDQUFDRCxhQUFSLENBQXNCLHVCQUF0QixDQUExQjtBQUNBLE1BQU1xQixZQUFZLEdBQUdwQixPQUFPLENBQUNELGFBQVIsQ0FBc0Isc0JBQXRCLENBQXJCO0FBQ0EsTUFBTXNCLFlBQVksR0FBR3ZCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLHNCQUExQixDQUFyQixFQUtBO0FBQ0E7QUFDQTs7QUFDQUQsWUFBWSxDQUFDRSxPQUFiLENBQXNCQyxNQUFELElBQVk7RUFBRTtFQUNqQyxNQUFNQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLFFBQWYsQ0FBZDtFQUNBRixNQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLE1BQU0xQyw2REFBVSxDQUFDd0MsS0FBRCxDQUFqRDtBQUNELENBSEQ7QUFLQU4saUJBQWlCLENBQUNRLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxNQUFNQyxlQUFlLEVBQWpFLEdBQXNFOztBQUN0RVIsWUFBWSxDQUFDTyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxNQUFNM0MsNERBQVMsQ0FBQ2lDLFNBQUQsQ0FBdEQsR0FBb0U7O0FBR3BFUCxXQUFXLENBQUNpQixnQkFBWixDQUE2QixRQUE3QixFQUF1Q0UsdUJBQXZDLEdBQ0E7O0FBQ0FsQixjQUFjLENBQUNnQixnQkFBZixDQUFnQyxRQUFoQyxFQUEwQ0csT0FBMUMsR0FDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxlQUFlLEdBQUc7RUFDdEJDLGFBQWEsRUFBRSxjQURPO0VBRXRCQyxvQkFBb0IsRUFBRSxlQUZBO0VBR3RCQyxtQkFBbUIsRUFBRSx1QkFIQztFQUl0QkMsZUFBZSxFQUFFLG1CQUpLO0VBS3RCQyxVQUFVLEVBQUU7QUFMVSxDQUF4QjtBQVFBLE1BQU1DLG9CQUFvQixHQUFHLElBQUlqRCxvRUFBSixDQUMzQjJDLGVBRDJCLEVBRTNCbEMsV0FGMkIsQ0FBN0I7QUFJQSxNQUFNeUMsZ0JBQWdCLEdBQUcsSUFBSWxELG9FQUFKLENBQWtCMkMsZUFBbEIsRUFBbUNkLFNBQW5DLENBQXpCO0FBRUFvQixvQkFBb0IsQ0FBQ0UsZ0JBQXJCO0FBQ0FELGdCQUFnQixDQUFDQyxnQkFBakI7QUFNQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztFQUNsQkMsSUFBSSxFQUFFLGlCQURZO0VBRWxCQyxJQUFJLEVBQUU7QUFGWSxDQUFELEVBSW5CO0VBQ0VELElBQUksRUFBRSxhQURSO0VBRUVDLElBQUksRUFBRTtBQUZSLENBSm1CLEVBUW5CO0VBQ0VELElBQUksRUFBRSxnQkFEUjtFQUVFQyxJQUFJLEVBQUU7QUFGUixDQVJtQixFQVluQjtFQUNFRCxJQUFJLEVBQUUsU0FEUjtFQUVFQyxJQUFJLEVBQUU7QUFGUixDQVptQixFQWdCbkI7RUFDRUQsSUFBSSxFQUFFLHVCQURSO0VBRUVDLElBQUksRUFBRTtBQUZSLENBaEJtQixFQW9CbkI7RUFDRUQsSUFBSSxFQUFFLGdCQURSO0VBRUVDLElBQUksRUFBRTtBQUZSLENBcEJtQixDQUFyQjtBQXlCQTs7QUFFQUYsWUFBWSxDQUFDakIsT0FBYixDQUFzQm9CLElBQUQsSUFBVUMsVUFBVSxDQUFDRCxJQUFELEVBQU9sQyxRQUFQLENBQXpDOztBQUVBLFNBQVNtQixlQUFULEdBQTJCO0VBQUU7RUFDM0JpQixlQUFlO0VBQ2Y3RCw0REFBUyxDQUFDa0IsWUFBRCxDQUFUO0FBRUQ7O0FBRUQsU0FBUzJDLGVBQVQsR0FBMkI7RUFBRTtFQUMzQnpDLFNBQVMsQ0FBQzBDLEtBQVYsR0FBa0I3QyxXQUFXLENBQUM4QyxXQUE5QjtFQUNBekMsVUFBVSxDQUFDd0MsS0FBWCxHQUFtQjNDLFlBQVksQ0FBQzRDLFdBQWhDO0FBQ0Q7O0FBRUQsU0FBU0MsZUFBVCxHQUEyQjtFQUN6Qi9DLFdBQVcsQ0FBQzhDLFdBQVosR0FBMEIzQyxTQUFTLENBQUMwQyxLQUFwQztFQUNBM0MsWUFBWSxDQUFDNEMsV0FBYixHQUEyQnpDLFVBQVUsQ0FBQ3dDLEtBQXRDO0VBQ0E3RCw2REFBVSxDQUFDaUIsWUFBRCxDQUFWO0FBRUQ7O0FBR0QsU0FBUytDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxTQUEzQixFQUFzQztFQUFFO0VBQ3RDRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQkYsU0FBdEI7QUFDRDs7QUFFRCxTQUFTdEIsdUJBQVQsQ0FBaUN5QixLQUFqQyxFQUF3QztFQUFFO0VBQ3hDQSxLQUFLLENBQUNDLGNBQU47RUFDQVAsZUFBZTtBQUNoQjs7QUFFRCxTQUFTbEIsT0FBVCxDQUFpQndCLEtBQWpCLEVBQXdCO0VBQUU7RUFDeEJBLEtBQUssQ0FBQ0MsY0FBTjtFQUNBWCxVQUFVLENBQUM7SUFDVEgsSUFBSSxFQUFFN0IsU0FBUyxDQUFDa0MsS0FEUDtJQUVUSixJQUFJLEVBQUU3QixRQUFRLENBQUNpQztFQUZOLENBQUQsRUFHUHJDLFFBSE8sQ0FBVixDQUZzQixDQU90Qjs7RUFDQXhCLDZEQUFVLENBQUNnQyxTQUFELENBQVY7RUFDQU4sY0FBYyxDQUFDNkMsS0FBZjtFQUNBbEIsZ0JBQWdCLENBQUNtQixlQUFqQjtBQUdEOztBQUtELFNBQVNiLFVBQVQsQ0FBb0JELElBQXBCLEVBQTBCZSxJQUExQixFQUFnQztFQUFFO0VBQ2hDLE1BQU1DLFlBQVksR0FBRyxJQUFJdEUsa0RBQUosQ0FBU3NELElBQVQsRUFBZXpCLG9CQUFmLEVBQXFDMEMsWUFBckMsRUFBckI7RUFDQUYsSUFBSSxDQUFDRyxPQUFMLENBQWFGLFlBQWI7QUFDRDs7QUFFTSxTQUFTRyxZQUFULENBQXNCQyxRQUF0QixFQUFnQ0MsUUFBaEMsRUFBMEM7RUFFL0NqRCxlQUFlLENBQUNrRCxHQUFoQixHQUFzQkYsUUFBdEI7RUFDQWhELGVBQWUsQ0FBQ21ELEdBQWhCLGtDQUE4Q0YsUUFBOUM7RUFDQWhELG1CQUFtQixDQUFDK0IsV0FBcEIsR0FBa0NpQixRQUFsQztFQUNBaEYsNERBQVMsQ0FBQzhCLFVBQUQsQ0FBVDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUM5TEQ7QUFJTyxNQUFNekIsSUFBTixDQUFXO0VBQ2Q4RSxXQUFXLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFpQjtJQUN4QixLQUFLQyxLQUFMLEdBQWFGLElBQUksQ0FBQzNCLElBQWxCO0lBQ0EsS0FBSzhCLEtBQUwsR0FBYUgsSUFBSSxDQUFDMUIsSUFBbEI7SUFDQSxLQUFLOEIsU0FBTCxHQUFpQkgsUUFBakI7RUFDSDs7RUFDREkscUJBQXFCLEdBQUc7SUFDcEIsTUFBTUMsV0FBVyxHQUFHNUUsUUFBUSxDQUN2QkMsYUFEZSxDQUNELEtBQUt5RSxTQURKLEVBRWZHLE9BRmUsQ0FFUDVFLGFBRk8sQ0FFTyxPQUZQLEVBR2Y2RSxTQUhlLENBR0wsSUFISyxDQUFwQjtJQUlBLE9BQU9GLFdBQVA7RUFDSDs7RUFDREcsaUJBQWlCLENBQUNDLEdBQUQsRUFBTTtJQUNuQkEsR0FBRyxDQUFDQyxNQUFKLENBQVczQixTQUFYLENBQXFCQyxNQUFyQixDQUE0QiwwQkFBNUI7RUFDSDs7RUFDRDJCLGtCQUFrQixHQUFHO0lBRWpCLEtBQUtDLFdBQUwsQ0FBaUJ0RCxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBNENtRCxHQUFELElBQVM7TUFDaEQsS0FBS0QsaUJBQUwsQ0FBdUJDLEdBQXZCO0lBQ0gsQ0FGRDs7SUFHQSxLQUFLSSxNQUFMLENBQVl2RCxnQkFBWixDQUE2QixPQUE3QixFQUF1Q21ELEdBQUQsSUFBUztNQUMzQ2hCLHFFQUFZLENBQUMsS0FBS1MsS0FBTixFQUFhLEtBQUtELEtBQWxCLENBQVo7SUFDSCxDQUZEOztJQUdBLEtBQUthLGFBQUwsQ0FBbUJ4RCxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBOENtRCxHQUFELElBQVM7TUFDbEQsS0FBS00sUUFBTCxDQUFjQyxNQUFkO0lBRUgsQ0FIRDtFQUlIOztFQUNEekIsWUFBWSxHQUFHO0lBQ1gsS0FBS3dCLFFBQUwsR0FBZ0IsS0FBS1gscUJBQUwsRUFBaEI7SUFDQSxLQUFLUyxNQUFMLEdBQWMsS0FBS0UsUUFBTCxDQUFjckYsYUFBZCxDQUE0QixjQUE1QixDQUFkO0lBQ0EsS0FBS2tGLFdBQUwsR0FBbUIsS0FBS0csUUFBTCxDQUFjckYsYUFBZCxDQUE0QixvQkFBNUIsQ0FBbkI7SUFDQSxLQUFLb0YsYUFBTCxHQUFxQixLQUFLQyxRQUFMLENBQWNyRixhQUFkLENBQTRCLG9CQUE1QixDQUFyQjtJQUNBLEtBQUtxRixRQUFMLENBQWNyRixhQUFkLENBQTRCLG1CQUE1QixFQUFpRGdELFdBQWpELEdBQStELEtBQUt1QixLQUFwRTtJQUNBLEtBQUtZLE1BQUwsQ0FBWWpCLEdBQVosR0FBa0IsS0FBS00sS0FBdkI7SUFDQSxLQUFLVyxNQUFMLENBQVloQixHQUFaLHNCQUE4QixLQUFLSSxLQUFuQzs7SUFFQSxLQUFLVSxrQkFBTDs7SUFFQSxPQUFPLEtBQUtJLFFBQVo7RUFDSDs7QUF6Q2E7Ozs7Ozs7Ozs7Ozs7O0FDSlgsTUFBTWhHLGFBQU4sQ0FBb0I7RUFDdkIrRSxXQUFXLENBQUNtQixPQUFELEVBQVVDLFdBQVYsRUFBdUI7SUFDOUIsS0FBS0MsS0FBTCxHQUFhRCxXQUFiO0lBQ0EsS0FBS0UsY0FBTCxHQUFzQkgsT0FBTyxDQUFDdEQsYUFBOUI7SUFDQSxLQUFLMEQscUJBQUwsR0FBNkJKLE9BQU8sQ0FBQ3JELG9CQUFyQztJQUNBLEtBQUswRCxvQkFBTCxHQUE0QkwsT0FBTyxDQUFDcEQsbUJBQXBDO0lBQ0EsS0FBSzBELGdCQUFMLEdBQXdCTixPQUFPLENBQUNuRCxlQUFoQztJQUNBLEtBQUswRCxXQUFMLEdBQW1CUCxPQUFPLENBQUNsRCxVQUEzQjtFQUVIOztFQUNEMEQsZUFBZSxDQUFDQyxLQUFELEVBQVE7SUFDbkIsTUFBTUMsWUFBWSxHQUFHLEtBQUtSLEtBQUwsQ0FBV3pGLGFBQVgsWUFBNkJnRyxLQUFLLENBQUNFLEVBQW5DLFlBQXJCLENBRG1CLENBRW5COzs7SUFDQUQsWUFBWSxDQUFDakQsV0FBYixHQUEyQmdELEtBQUssQ0FBQ0csaUJBQWpDLENBSG1CLENBSW5COztJQUNBRixZQUFZLENBQUM1QyxTQUFiLENBQXVCK0MsR0FBdkIsQ0FBMkIsS0FBS04sV0FBaEM7SUFDQUUsS0FBSyxDQUFDM0MsU0FBTixDQUFnQitDLEdBQWhCLENBQW9CLEtBQUtQLGdCQUF6QjtFQUNIOztFQUNEUSxlQUFlLENBQUNMLEtBQUQsRUFBUTtJQUNuQixNQUFNQyxZQUFZLEdBQUcsS0FBS1IsS0FBTCxDQUFXekYsYUFBWCxZQUE2QmdHLEtBQUssQ0FBQ0UsRUFBbkMsWUFBckIsQ0FEbUIsQ0FFbkI7OztJQUNBRCxZQUFZLENBQUNqRCxXQUFiLEdBQTJCLEVBQTNCLENBSG1CLENBSW5COztJQUNBaUQsWUFBWSxDQUFDNUMsU0FBYixDQUF1QmlDLE1BQXZCLENBQThCLEtBQUtRLFdBQW5DO0lBQ0FFLEtBQUssQ0FBQzNDLFNBQU4sQ0FBZ0JpQyxNQUFoQixDQUF1QixLQUFLTyxnQkFBNUI7RUFFSDs7RUFDRFMsbUJBQW1CLENBQUNOLEtBQUQsRUFBUTtJQUN2QixJQUFJLENBQUNBLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUFwQixFQUEyQjtNQUN2QixLQUFLVCxlQUFMLENBQXFCQyxLQUFyQjtJQUNILENBRkQsTUFFTztNQUNILEtBQUtLLGVBQUwsQ0FBcUJMLEtBQXJCO0lBRUg7RUFFSjs7RUFDRFMsZUFBZSxHQUFHO0lBQ2QsT0FBTyxLQUFLQyxVQUFMLENBQWdCQyxLQUFoQixDQUF1QlgsS0FBRCxJQUFXO01BQ3BDLE9BQU9BLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUF0QjtJQUNILENBRk0sQ0FBUDtFQUlIOztFQUNEdkIsa0JBQWtCLEdBQUc7SUFDakIsS0FBS3lCLFVBQUwsR0FBa0JFLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtwQixLQUFMLENBQVdsRSxnQkFBWCxDQUE0QixLQUFLbUUsY0FBakMsQ0FBWCxDQUFsQjtJQUNBLEtBQUtvQixPQUFMLEdBQWUsS0FBS3JCLEtBQUwsQ0FBV3pGLGFBQVgsQ0FBeUIsS0FBSzJGLHFCQUE5QixDQUFmOztJQUNBLEtBQUtvQixhQUFMOztJQUNBLEtBQUtMLFVBQUwsQ0FBZ0JsRixPQUFoQixDQUF5QndFLEtBQUQsSUFBVztNQUMvQkEsS0FBSyxDQUFDcEUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsTUFBTTtRQUNsQyxLQUFLMEUsbUJBQUwsQ0FBeUJOLEtBQXpCOztRQUNBLEtBQUtlLGFBQUw7TUFDSCxDQUhEO01BSUEsS0FBS3JELGVBQUw7SUFFSCxDQVBEO0VBUUg7O0VBQ0RxRCxhQUFhLEdBQUc7SUFDWixJQUFJLEtBQUtOLGVBQUwsRUFBSixFQUE0QjtNQUN4QixLQUFLSyxPQUFMLENBQWFFLFFBQWIsR0FBd0IsS0FBeEI7O01BQ0EsS0FBS0YsT0FBTCxDQUFhekQsU0FBYixDQUF1QmlDLE1BQXZCLENBQThCLEtBQUtNLG9CQUFuQztJQUNILENBSEQsTUFHTztNQUNILEtBQUtrQixPQUFMLENBQWFFLFFBQWIsR0FBd0IsSUFBeEI7O01BQ0EsS0FBS0YsT0FBTCxDQUFhekQsU0FBYixDQUF1QitDLEdBQXZCLENBQTJCLEtBQUtSLG9CQUFoQztJQUNIO0VBR0o7O0VBQ0RwRCxnQkFBZ0IsR0FBRztJQUNmLEtBQUtpRCxLQUFMLENBQVc3RCxnQkFBWCxDQUE0QixRQUE1QixFQUF1Q3FGLENBQUQsSUFBT0EsQ0FBQyxDQUFDekQsY0FBRixFQUE3Qzs7SUFDQSxLQUFLeUIsa0JBQUw7RUFDSDs7RUFFRHZCLGVBQWUsR0FBRztJQUNkLEtBQUtxRCxhQUFMLEdBRGMsQ0FDUTs7O0lBRXRCLEtBQUtMLFVBQUwsQ0FBZ0JsRixPQUFoQixDQUF5QndFLEtBQUQsSUFBVztNQUMvQixLQUFLSyxlQUFMLENBQXFCTCxLQUFyQixFQUQrQixDQUNIOztJQUMvQixDQUZEO0VBSUg7O0FBOUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDSzNCO0FBQ0E7QUFDQTs7QUFHTyxTQUFTL0csU0FBVCxDQUFtQnlDLEtBQW5CLEVBQTBCO0VBQzdCQSxLQUFLLENBQUMyQixTQUFOLENBQWdCK0MsR0FBaEIsQ0FBb0IsY0FBcEI7RUFDQXJHLFFBQVEsQ0FBQzZCLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDekMsYUFBckM7RUFDQXVDLEtBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0N4QyxtQkFBcEM7QUFFSDtBQUVNLFNBQVNGLFVBQVQsQ0FBb0J3QyxLQUFwQixFQUEyQjtFQUM5QkEsS0FBSyxDQUFDMkIsU0FBTixDQUFnQmlDLE1BQWhCLENBQXVCLGNBQXZCO0VBQ0F2RixRQUFRLENBQUNtSCxtQkFBVCxDQUE2QixTQUE3QixFQUF3Qy9ILGFBQXhDO0VBQ0F1QyxLQUFLLENBQUN3RixtQkFBTixDQUEwQixXQUExQixFQUF1QzlILG1CQUF2QztBQUVIO0FBRU0sU0FBU0QsYUFBVCxDQUF1QjRGLEdBQXZCLEVBQTRCO0VBRy9CLElBQUlBLEdBQUcsQ0FBQ29DLEdBQUosS0FBWSxRQUFoQixFQUEwQjtJQUN0QixNQUFNQyxXQUFXLEdBQUdySCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7SUFDQWQsVUFBVSxDQUFDa0ksV0FBRCxDQUFWO0VBQ0g7QUFDSjtBQUVNLFNBQVNoSSxtQkFBVCxDQUE2QjJGLEdBQTdCLEVBQWtDO0VBQ3JDLElBQUlBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlRCxHQUFHLENBQUNzQyxhQUF2QixFQUFzQztJQUNsQ25JLFVBQVUsQ0FBQzZGLEdBQUcsQ0FBQ0MsTUFBTCxDQUFWO0VBQ0g7QUFDSjs7Ozs7Ozs7Ozs7QUNyQ0Q7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uLi9zY3JpcHRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4uL3NjcmlwdHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi4vc2NyaXB0cy91dGlscy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblxuICBvcGVuUG9wdXAsXG4gIGNsb3NlUG9wdXAsXG4gIGNsb3NlT25Fc2NhcGUsXG4gIGNsb3NlT25DbGlja091dHNpZGUsXG5cbn1cbmZyb20gXCIuLi8uLi9zY3JpcHRzL3V0aWxzLmpzXCI7XG5cbmltcG9ydCB7XG4gIEZvcm1WYWxpZGF0b3Jcbn1cbmZyb20gXCIuLi8uLi9zY3JpcHRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcblxuaW1wb3J0IHtcbiAgQ2FyZFxufSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9DYXJkLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbi8vIGNoZWNrc1xuXG5sZXQgc29tZVN0ciA9IFwiSSBjb2RlZC4gSSBzYXZlZC4gSSBidW5kbGVkLlwiO1xuY29uc29sZS5sb2coXCJIZWxsbywgV29ybGQhXCIpXG5cbmNvbnN0IG51bWJlcnMgPSBbMiwgMywgNV07XG5cbi8vIEFycm93IGZ1bmN0aW9uLiBIb3cgd2lsbCBJbnRlcm5ldCBFeHBsb3JlciBjb3BlIHdpdGggaXQ/XG5jb25zdCBkb3VibGVkTnVtYmVycyA9IG51bWJlcnMubWFwKG51bWJlciA9PiBudW1iZXIgKiAyKTtcblxuY29uc29sZS5sb2coZG91YmxlZE51bWJlcnMpOyAvLyA0LCA2LCAxMFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8gU2VsZWN0b3JzIC8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbmNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVcIik7XG5jb25zdCBwcm9maWxlTmFtZSA9IHByb2ZpbGUucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbmNvbnN0IHByb2ZpbGVUaXRsZSA9IHByb2ZpbGUucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcbmNvbnN0IGlucHV0TmFtZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dFtuYW1lPSduYW1lJ11cIik7XG5jb25zdCBpbnB1dFRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2lucHV0W25hbWU9J3RpdGxlJ11cIik7XG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIik7XG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XG5jb25zdCBjYXJkTGlzdCA9IGNhcmRzLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpc3RcIik7XG5jb25zdCBwcm9maWxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtZWRpdC1wcm9maWxlXCIpO1xuY29uc3QgcGxhY2VQb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtLXR5cGUtYWRkLXBsYWNlXCIpO1xuY29uc3QgcGxhY2VOYW1lID0gcGxhY2VQb3B1cEZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dC10eXBlLXBsYWNlLW5hbWVcIik7XG5jb25zdCBwbGFjZVVSTCA9IHBsYWNlUG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXQtdHlwZS1wbGFjZS11cmxcIik7XG5jb25zdCBpbWdQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1wcmV2XCIpO1xuY29uc3QgcG9wdXBQcmV2aWV3SW1nID0gaW1nUHJldmlldy5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbmNvbnN0IHBvcHVwUHJldmlld0NhcHRpb24gPSBpbWdQcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NhcHRpb25cIik7XG5cblxuY29uc3QgcGxhY2VGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1wbGFjZVwiKTtcbmNvbnN0IGNhcmRUZW1wbGF0ZVNlbGVjdG9yID0gXCIjY2FyZC10ZW1wbGF0ZVwiO1xuXG5cbmNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuY29uc3QgYWRkQ2FyZFBvcHVwID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5jb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlLWJ1dHRvbicpO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLyBFdmVudExpc3RlbmVycyAvLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7IC8vY2xvc2UgcG9wdXBzIGJ5IHByZXNzaW5nIG9uIFhcbiAgY29uc3QgcG9wdXAgPSBidXR0b24uY2xvc2VzdCgnLnBvcHVwJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUG9wdXAocG9wdXApKTtcbn0pO1xuXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb3BlblByb2ZpbGVGb3JtKCkpOyAvLyBlZGl0IHByb2ZpbGUgb3BlbiBwb3B1cFxuYWRkQ2FyZFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvcGVuUG9wdXAocGxhY2VGb3JtKSk7IC8vb3BlbiB0aGUgYWRkIHBob3RvIGZvcm0uXG5cblxucHJvZmlsZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdCk7XG4vLyBzYXZlcyB0aGUgcHJvZmlsZSBpbmZvICsgcHJldmVudHMgdGhlIHNpdGUgc3VibWl0IC5cbnBsYWNlUG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkQ2FyZCk7XG4vL3RoaXMgbGlzdGluaW5nIHRvIGV2ZW50IHN1Ym1pdCAoc2F2ZSlcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8gRm9ybSBWYWxpZHRhdGlvbiAvLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgdmFsaWRhdGVDb25maWdzID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pbnB1dC1lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcImZvcm1fX2lucHV0LWVycm9yXCIsXG59O1xuXG5jb25zdCBwcm9maWxlRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0ZUNvbmZpZ3MsXG4gIHByb2ZpbGVGb3JtXG4pO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRlQ29uZmlncywgcGxhY2VGb3JtKTtcblxucHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cblxuXG5cblxuY29uc3QgaW5pdGlhbENhcmRzID0gW3tcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcbi8qKiBUaGlzIGxpbmUgYWRkcyB0aGUgYXJyYXkgdG8gdGhlIHBhZ2UgKi9cblxuaW5pdGlhbENhcmRzLmZvckVhY2goKGNhcmQpID0+IHJlbmRlckNhcmQoY2FyZCwgY2FyZExpc3QpKTtcblxuZnVuY3Rpb24gb3BlblByb2ZpbGVGb3JtKCkgeyAvL29wZW5zIHRoZSBlZGl0IG5hbWUgZm9ybVxuICBmaWxsUHJvZmlsZUZvcm0oKTtcbiAgb3BlblBvcHVwKHByb2ZpbGVQb3B1cCk7XG5cbn1cblxuZnVuY3Rpb24gZmlsbFByb2ZpbGVGb3JtKCkgeyAvL3RoaXMgZnVuY3Rpb24gc2V0IHRoZSBpbnB1dCBmaWVsZHMgdmFsdWUuXG4gIGlucHV0TmFtZS52YWx1ZSA9IHByb2ZpbGVOYW1lLnRleHRDb250ZW50O1xuICBpbnB1dFRpdGxlLnZhbHVlID0gcHJvZmlsZVRpdGxlLnRleHRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBzYXZlUHJvZmlsZUZvcm0oKSB7XG4gIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlO1xuICBwcm9maWxlVGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dFRpdGxlLnZhbHVlO1xuICBjbG9zZVBvcHVwKHByb2ZpbGVQb3B1cCk7XG5cbn1cblxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhpdGVtLCBjbGFzc05hbWUpIHsgLy9mdW5jdGlvbiB0b2dnbGVzKGFkZC9yZW1vdmUpIGEgc3BlY2lmYyBjbGFzcywgKml0ZW0qIGlzIHNlbGNldG9yIG5hbWUgLyB4IGlzIHRoZSBjbGFzcyB0aGF0IHdhbnQgdG8gYWRkL3JlbW92ZSAuXG4gIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdChldmVudCkgeyAvL3NhdmVzIHRoZSBuYW1lIGFmdGVyIGVkaXRpbmdcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2F2ZVByb2ZpbGVGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGFkZENhcmQoZXZlbnQpIHsgLy90aGlzIGZ1bmN0aW9uIHRvIGFkZCB0aGUgY2FyZCBtYW51bGxheVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICByZW5kZXJDYXJkKHtcbiAgICBuYW1lOiBwbGFjZU5hbWUudmFsdWUsXG4gICAgbGluazogcGxhY2VVUkwudmFsdWVcbiAgfSwgY2FyZExpc3QpO1xuXG4gIC8vIHRvZ2dsZUNsYXNzKHBsYWNlRm9ybSwgXCJwb3B1cF9vcGVuZWRcIik7XG4gIGNsb3NlUG9wdXAocGxhY2VGb3JtKTtcbiAgcGxhY2VQb3B1cEZvcm0ucmVzZXQoKTtcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIHJlbmRlckNhcmQoY2FyZCwgbGlzdCkgeyAvLyBhZGRzIHRoZSBjYXJkIHRvIHRoZSBmaXJzdCBwbGFjZVxuICBjb25zdCBjYXJkVG9SZW5kZXIgPSBuZXcgQ2FyZChjYXJkLCBjYXJkVGVtcGxhdGVTZWxlY3RvcikuZ2VuZXJhdGVDYXJkKCk7XG4gIGxpc3QucHJlcGVuZChjYXJkVG9SZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlld0ltYWdlKHRoaXNMaW5rLCB0aGlzTmFtZSkge1xuXG4gIHBvcHVwUHJldmlld0ltZy5zcmMgPSB0aGlzTGluaztcbiAgcG9wdXBQcmV2aWV3SW1nLmFsdCA9IGBBIGJlYXV0aWZ1bCBwbGFjZSBpbiAke3RoaXNOYW1lfWA7XG4gIHBvcHVwUHJldmlld0NhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzTmFtZTtcbiAgb3BlblBvcHVwKGltZ1ByZXZpZXcpO1xufSIsImltcG9ydCB7XG4gICAgcHJldmlld0ltYWdlXG59IGZyb20gXCIuLi9wcmFjdGljdW0vc3JjL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl90ZXh0ID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIH1cbiAgICBfZ2V0Q2xvbmVGcm9tVGVtcGxhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3NlbGVjdG9yKVxuICAgICAgICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gICAgfVxuICAgIF9oYW5kbGVMaWtlQnV0dG9uKGV2dCkge1xuICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gICAgfVxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcblxuICAgICAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uKGV2dCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9pbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgcHJldmlld0ltYWdlKHRoaXMuX2xpbmssIHRoaXMuX3RleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldENsb25lRnJvbVRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuICAgICAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2UtdHJhc2hcIik7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbmZvLXRpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICAgICAgdGhpcy5faW1hZ2UuYWx0ID0gYFBsYWNlIGluICR7dGhpcy5fdGV4dH1gO1xuXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdzLCBmb3JtRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWdzLmlucHV0U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICAgICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWdzLmVycm9yQ2xhc3M7XG5cbiAgICB9XG4gICAgX3Nob3dJbnB1dEVycm9yKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgICAgIC8vIGFkZCBlcnJvciBtc2cvY2xhc3NcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIC8vIGlucHV0LmNsYXNzTGlzdC5hZGQoZXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcylcbiAgICB9XG4gICAgX2hpZGVJbnB1dEVycm9yKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgICAgIC8vIGFkZCBlcnJvciBtc2cvY2xhc3NcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgLy8gaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShlcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcblxuICAgIH1cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KSB7XG4gICAgICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0KTtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgX2hhc1ZhbGlkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbGlkaXR5LnZhbGlkO1xuICAgICAgICB9KVxuXG4gICAgfVxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgICAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF90b2dnbGVCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNWYWxpZElucHV0cygpKSB7XG4gICAgICAgICAgICB0aGlzLl9idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oKTsgLy8gPD0gPSBjb250cm9sbGluZyB0aGUgc3VibWl0IGJ1dHRvbiA9PVxuXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXQpIC8vPD0gPSBjbGVhcmluZyBlcnJvcnMgPT1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IHtcbiAgICBGb3JtVmFsaWRhdG9yXG59IGZyb20gXCIuL0Zvcm1WYWxpZGF0b3IuanNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLyBGdW5jdGlvbnMgLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblBvcHVwKHBvcHVwKSB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU9uRXNjYXBlKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsb3NlT25DbGlja091dHNpZGUpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwKSB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU9uRXNjYXBlKTtcbiAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsb3NlT25DbGlja091dHNpZGUpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU9uRXNjYXBlKGV2dCkge1xuXG5cbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjb25zdCBwb3B1cE9wZW5lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfb3BlbmVkXCIpO1xuICAgICAgICBjbG9zZVBvcHVwKHBvcHVwT3BlbmVkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU9uQ2xpY2tPdXRzaWRlKGV2dCkge1xuICAgIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICBjbG9zZVBvcHVwKGV2dC50YXJnZXQpXG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIm9wZW5Qb3B1cCIsImNsb3NlUG9wdXAiLCJjbG9zZU9uRXNjYXBlIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsIkZvcm1WYWxpZGF0b3IiLCJDYXJkIiwic29tZVN0ciIsImNvbnNvbGUiLCJsb2ciLCJudW1iZXJzIiwiZG91YmxlZE51bWJlcnMiLCJtYXAiLCJudW1iZXIiLCJwcm9maWxlRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2ZpbGUiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVQb3B1cCIsInByb2ZpbGVUaXRsZSIsImlucHV0TmFtZSIsImZvcm0iLCJpbnB1dFRpdGxlIiwiY2FyZHMiLCJjYXJkVGVtcGxhdGUiLCJjYXJkTGlzdCIsInByb2ZpbGVFZGl0IiwicGxhY2VQb3B1cEZvcm0iLCJwbGFjZU5hbWUiLCJwbGFjZVVSTCIsImltZ1ByZXZpZXciLCJwb3B1cFByZXZpZXdJbWciLCJwb3B1cFByZXZpZXdDYXB0aW9uIiwicGxhY2VGb3JtIiwiY2FyZFRlbXBsYXRlU2VsZWN0b3IiLCJlZGl0UHJvZmlsZUJ1dHRvbiIsImFkZENhcmRQb3B1cCIsImNsb3NlQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwicG9wdXAiLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5Qcm9maWxlRm9ybSIsImhhbmRsZVByb2ZpbGVGb3JtU3VibWl0IiwiYWRkQ2FyZCIsInZhbGlkYXRlQ29uZmlncyIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwicHJvZmlsZUZvcm1WYWxpZGF0b3IiLCJhZGRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsImluaXRpYWxDYXJkcyIsIm5hbWUiLCJsaW5rIiwiY2FyZCIsInJlbmRlckNhcmQiLCJmaWxsUHJvZmlsZUZvcm0iLCJ2YWx1ZSIsInRleHRDb250ZW50Iiwic2F2ZVByb2ZpbGVGb3JtIiwidG9nZ2xlQ2xhc3MiLCJpdGVtIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwicmVzZXRWYWxpZGF0aW9uIiwibGlzdCIsImNhcmRUb1JlbmRlciIsImdlbmVyYXRlQ2FyZCIsInByZXBlbmQiLCJwcmV2aWV3SW1hZ2UiLCJ0aGlzTGluayIsInRoaXNOYW1lIiwic3JjIiwiYWx0IiwiY29uc3RydWN0b3IiLCJkYXRhIiwic2VsZWN0b3IiLCJfdGV4dCIsIl9saW5rIiwiX3NlbGVjdG9yIiwiX2dldENsb25lRnJvbVRlbXBsYXRlIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2hhbmRsZUxpa2VCdXR0b24iLCJldnQiLCJ0YXJnZXQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfbGlrZUJ1dHRvbiIsIl9pbWFnZSIsIl9kZWxldGVCdXR0b24iLCJfZWxlbWVudCIsInJlbW92ZSIsImNvbmZpZ3MiLCJmb3JtRWxlbWVudCIsIl9mb3JtIiwiX2lucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0IiwiZXJyb3JFbGVtZW50IiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImFkZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hhc1ZhbGlkSW5wdXRzIiwiX2lucHV0TGlzdCIsImV2ZXJ5IiwiQXJyYXkiLCJmcm9tIiwiX2J1dHRvbiIsIl90b2dnbGVCdXR0b24iLCJkaXNhYmxlZCIsImUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5IiwicG9wdXBPcGVuZWQiLCJjdXJyZW50VGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==