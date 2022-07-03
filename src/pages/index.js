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
  initialCards

} from "../utils/constants"
import {
  api
} from "../components/Api"



const placesSection = new Section({
    renderer: renderCard,
  },
  ".cards__list"
);

///////////////////////////////////////////
//////// API //////////////////////////////
///////////////////////////////////////////
// console.log(api)
// api.getInitialCards()
//   .then(res => {
//     cardList.renderItems(data);
//     // console.log('res', res)
//   });
// api.getUserInfo().then(res => {
//   userInfo.setUserInfo({
//     name: res.name,
//     title: res.about
//   })

// });
let userId;
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;
    placesSection.renderItems(cards);
    userInfo.setUserInfo(userData.name, userData.about);
  })
  .catch((err) => console.log(err));

function generateCard(data) {
  const card = new Card(
    data,
    cardTemplateSelector, {
      handleCardClick: () => {
        imagePopup.open(data.link, data.text);

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
        //like card
        if (!card.isLiked()) {
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
const addFormValidator = new FormValidator(validateConfigs, placeForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
});

///////////////////////////////////////////
//////// Popup creation ////////////////
/////////////////////////////////////////



const imagePopup = new PopupWithImage(".popup-prev");
imagePopup.setEventListeners();

// const popupEditProfile = new PopupWithForm(".popup", (data) => {
//   // console.log('data', data)
//   userInfo.setUserInfo(data.name, data.title);
// });
// popupEditProfile.setEventListeners();

const editPopup = new PopupWithForm(".popup", (data) => {
  console.log('data =>', data)
  api
    .setUserInfo({
      name: data.name,
      about: data.title
    })

    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        about: data.title
      });
      editPopup.close();
    })
    .catch((err) => console.log(err))
});
editPopup.setEventListeners();

// const popupAddCard = new PopupWithForm(".popup-place", (data) => {
//   renderCard(data);
//   addFormValidator.resetValidation();
// });
// popupAddCard.setEventListeners();

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
const deletePopup = new PopupWithSubmit(".popup-type-delete-card");
deletePopup.setEventListeners();

///////////////////////////////////////////
//////// card creation ////////////////
/////////////////////////////////////////


// placesSection.renderItems();

// function createCard(data) {
//   const card = new Card(data,
//     selector, {

//       handleCardClick: () => {
//         popupImage.open(data)
//       },
//       handleCardDelete: (id) => {
//         confirmModal.open();
//         confirmModal.setAction(() => {

//           api.deleteCard(id).then(res => {
//             //remove it from dom
//             card.removeCard();
//             confirmModal.close();
//           })
//         })
//       }
//     }, )

// }




// function renderCard(data) {
//   const element = generateCard(data);
//   placesSection.addItem(element);
// }






function renderCard(data) {
  const element = generateCard(data);
  placesSection.addItem(element);
}