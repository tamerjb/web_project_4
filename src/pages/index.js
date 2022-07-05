///////////////////////////////////////////
//////// IMPORTS ////////////////
/////////////////////////////////////////
import {
  FormValidator
}
from "../components/FormValidator.js";

import {
  Card
} from "../components/Card.js";
import {
  Popup
}
from "../components/Popup.js";
import {
  PopupWithForm
}
from "../components/PopupWithForm.js";
import {
  PopupWithSubmit
}
from "../components/PopupWithSubmit";
import {
  Section
} from "../components/Section.js";

import {
  UserInfo
} from "../components/UserInfo.js";


import "../styles/index.css";
import {
  PopupWithImage
} from "../components/PopupWithImage.js";

import {
  profilePopup,
  profile,
  placeForm,
  cardTemplateSelector,
  editProfileButton,
  addCardPopup,
  avatar,
  avatarForm,
} from "../utils/constants"
import {
  api
} from "../components/Api"
import {
  data
} from "autoprefixer";

// profileTitle,
// inputName,
// inputTitle,
// cards,
// cardTemplate,
// cardList,
// profileEdit,
// placePopupForm,
// name,
// placeURL,
// imgPreview,
// popupPreviewImg,
// popupPreviewCaption,
//   closeButtons,
//   initialCards,
//     profileForm,
//
//     profileName,
///////////////////////////////////////////
//////// API //////////////////////////////
///////////////////////////////////////////
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
  avatarSelector: ".profile__image",
});

const placesSection = new Section({
    renderer: renderCard,
  },
  ".cards__list"
);


let userId;
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;
    placesSection.renderItems(cards);
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about
    });
    console.log('userData', userData)
    userInfo.setUserAvatar(userData.avatar);
  })
  .then(() => userInfo.setAvatarVisible())
  .catch((err) => console.log(err));


///////////////////////////////////////////
//////// Form Validtation ////////////////
/////////////////////////////////////////
const validateConfigs = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error",
};

const profileFormValidator = new FormValidator(
  validateConfigs,
  profilePopup
);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(validateConfigs, placeForm);
addFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(
  validateConfigs,
  avatarForm
);
avatarFormValidator.enableValidation();



///////////////////////////////////////////
//////// Popup creation ////////////////
/////////////////////////////////////////


const editPopup = new PopupWithForm(".popup", (data) => {
  editPopup.renderLoading(true, "Saving...");
  api
    .setUserInfo({
      name: data.name,
      about: data.about
    })

    .then((res) => {
      userInfo.getUserInfo();
      userInfo.setUserInfo({
        name: res.name,
        about: res.about
      })

      editPopup.close();
    })
    .catch((err) => console.log(err)).finally(() => editPopup.renderLoading(false));
});
editPopup.setEventListeners();


const popupAddCard = new PopupWithForm(".popup-place", (data) => {
  popupAddCard.renderLoading(true, "Creating...");
  api
    .createCard(data)
    .then((res) => {
      renderCard(res);
      popupAddCard.close();
    })
    .catch((err) => console.log(err)).finally(() => popupAddCard.renderLoading(false));
});
popupAddCard.setEventListeners();


const avatarPopup = new PopupWithForm(".popup_type_avatar", (data) => {
  avatarPopup.renderLoading(true, "Saving avatar...");
  api
    .setUserAvatar(data.link)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatarPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => avatarPopup.renderLoading(false));
});
avatarPopup.setEventListeners();
const imagePopup = new PopupWithImage(".popup-prev");
imagePopup.setEventListeners();




///////////////////////////////////////////
//////// card creation ////////////////
/////////////////////////////////////////

const deletePopup = new PopupWithSubmit(".popup-type-delete-card");
deletePopup.setEventListeners();

function generateCard(data) {
  const card = new Card(
    data,
    cardTemplateSelector, {
      handleCardClick: () => {
        imagePopup.open(data.link, data.name);
      },
      handleCardDelete: (id) => {
        deletePopup.open();

        deletePopup.setAction(() => {
          // submit modal
          api
            .deleteCard(id)
            .then((res) => {
              card.removeCard();
            })
            .then(() => {
              deletePopup.close();
            })
            .catch((err) => console.log(err));
        });
      },
      handleLikeCard: (id) => {
        const Liked = card.isLiked();
        //like card
        if (!Liked) {
          api
            .likeCard(id)
            .then((res) => {
              card.likeCard(res.likes);
            })
            .catch((err) => console.log(err));


        } else {
          //dislike card
          api
            .dislikeCard(id)
            .then((res) => {
              card.dislikeCard(res.likes);
            })
            .catch((err) => console.log(err));
        }
      },
    },
    userId
  );
  const cardElement = card.generateCard();
  return cardElement;

}

function renderCard(data) {
  const element = generateCard(data);
  placesSection.addItem(element);
}

///////////////////////////////////////////
//////// EventListeners ///////////////////
///////////////////////////////////////////


editProfileButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  editPopup.setInputValues(info);
  profileFormValidator.enableValidation();
  profileFormValidator.toggleButton();
  editPopup.open();

});

addCardPopup.addEventListener("click", () => {
  popupAddCard.open();
  addFormValidator.resetValidation();

});
avatar.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarPopup.open();
});