const cardTemplate = document.querySelector("#card").content;
const cardContainer = document.querySelector(".cards");



const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

/**
 * 
 * 
 * function openForm() {
  let popup = document.getElementById("editPopup");
  popup.classList.add("popup_opened");

  document.querySelector("#name").value = getDisplayName();
  document.querySelector("#role").value = getDisplayRole();
}

function closeForm() {
  let popup = document.getElementById("editPopup");
  popup.classList.remove("popup_opened");
}

function getDisplayName() {
  let displayName = document.querySelector(".profile__name").textContent;
  return displayName;
}
function getDisplayRole() {
  let displayRole = document.querySelector(".profile__role").textContent;
  return displayRole;
}
let editFormElement = document.querySelector("#editProfile");
const closeEditBtn = document.querySelector("#closeEditPopup");
const openEditBtn = document.querySelector(".profile__edit-button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#name").value;
  let roleInput = document.querySelector("#role").value;

  document.querySelector(".profile__name").textContent = nameInput;
  document.querySelector(".profile__role").textContent = roleInput;

  closeForm();
}

editFormElement.addEventListener("submit", handleProfileFormSubmit);

closeEditBtn.addEventListener("click", closeForm);
openEditBtn.addEventListener("click", openForm);

**/


function openForm() {
  let popup = document.getElementById("addPopup");
  popup.classList.add("popup_opened");

  document.querySelector("#title").value = "Title";
  document.querySelector("#imglink").value = "Image link";
}

function closeForm() {
  let popup = document.getElementById("addPopup");
  popup.classList.remove("popup_opened");
}


let addFormElement = document.querySelector("#addPlace");
const closeAddBtn = document.querySelector("#closeAddPopup");
const openAddBtn = document.querySelector(".profile__add-button");

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();

  let titleInput = document.querySelector("#title").value;
  let ImageInput = document.querySelector("#imglink").value;
  createNewCard(titleInput, ImageInput) ;

  closeForm();
}

addFormElement.addEventListener("submit", handlePlaceFormSubmit);

closeAddBtn.addEventListener("click", closeForm);
openAddBtn.addEventListener("click", openForm);

function createNewCard(title, ima) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardContainer.append(cardElement);
  const titleText = document.getElementById("label");
  const  nameText= document.createTextNode(title);
  titleText.append(nameText);
  document.getElementById("image").src=ima;
  
  
} 
 
