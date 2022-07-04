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
  profileForm,
  profile,
  profileName,
  profilePopup,
  profileTitle,
  inputName,
  inputTitle,
  cards,
  cardTemplate,
  cardList,
  profileEdit,
  placePopupForm,
  name,
  placeURL,
  imgPreview,
  popupPreviewImg,
  popupPreviewCaption,
  placeForm,
  cardTemplateSelector,
  editProfileButton,
  addCardPopup,
  closeButtons,
  initialCards,
  avatar,
  avatarForm,

} from "../utils/constants"
import {
  api
} from "../components/Api"




///////////////////////////////////////////
//////// API //////////////////////////////
///////////////////////////////////////////
// console.log(api)
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
    userInfo.setUserInfo(userData.name, userData.title);
    userInfo.setUserAvatar(userData.avatar);
  })
  .then(() => userInfo.setAvatarVisible())
  .catch((err) => console.log(err));


const imagePopup = new PopupWithImage(".popup-prev");
imagePopup.setEventListeners();






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
  console.log('data =>', data)
  api
    .setUserInfo({
      name: data.name,
      about: data.title
    })

    .then((res) => {
      userInfo.getUserInfo();
      userInfo.setUserInfo({
        name: res.name,
        about: res.about
      })

      editPopup.close();
    })
    .catch((err) => console.log(err))
});
editPopup.setEventListeners();






const popupAddCard = new PopupWithForm(".popup-place", (data) => {
  api
    .createCard(data)
    .then((res) => {
      renderCard(res);
      popupAddCard.close();
    })
    .catch((err) => console.log(err))
});
popupAddCard.setEventListeners();


const avatarPopup = new PopupWithForm(".popup_type_avatar", (data) => {
  // avatarPopup.renderLoading(true, "Saving avatar...");
  api
    .setUserAvatar(data.link)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatarPopup.close();
    })
    .catch((err) => console.log(err))
  // .finally(() => avatarPopup.renderLoading(false));
});
avatarPopup.setEventListeners();



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
              console.log('res', res)
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
// avatar.addEventListener("click", () => {
//   console.log('cluckkkk')
//   avatarFormValidator.resetFormButton();
//   avatarPopup.open();
// });