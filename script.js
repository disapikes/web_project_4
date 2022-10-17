function openForm() {
  var popup = document.getElementById("popup");
  popup.classList.add("popup__opened");

  document.querySelector("#name").value = getDisplayName();
  document.querySelector("#role").value = getDisplayRole();
}

function closeForm() {
  var popup = document.getElementById("popup");
  popup.classList.remove("popup__opened");
}

function getDisplayName() {
  let displayName = document.querySelector(".profile__name").innerHTML;
  return displayName;
}
function getDisplayRole() {
  let displayRole = document.querySelector(".profile__role").innerHTML;
  return displayRole;
}
let formElement = document.querySelector("#profile_form");
const closeBtn = document.querySelector("#closePopup");
const openBtn = document.querySelector(".profile__edit-button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#name").value;
  let roleInput = document.querySelector("#role").value;

  document.querySelector(".profile__name").textContent = nameInput;
  document.querySelector(".profile__role").textContent = roleInput;

  closeForm();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

closeBtn.addEventListener("click", closeForm);
openBtn.addEventListener("click", openForm);