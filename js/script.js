var link = document.querySelector(".subscribe-form-btn");

var popupOverlay = document.querySelector(".modal-overlay");
var close = popupOverlay.querySelector(".modal-content-close");

var form = popupOverlay.querySelector("form");
var name = popupOverlay.querySelector("[name=feedback-name]");
var email = popupOverlay.querySelector("[name=feedback-email]");
var content = popupOverlay.querySelector("[name=feedback-content]");

var popup = document.querySelector(".modal-content");

var storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popupOverlay.classList.add("modal-content-show");
  popup.classList.add("modal-content-animation");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }

  name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popupOverlay.classList.remove("modal-content-show");
  popup.classList.remove("modal-content-animation");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !email.value || !content.value) {
    event.preventDefault();
    console.log("Нужно ввести имя, email и комментарий");
  } else {
      localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupOverlay.classList.contains("modal-content-show")) {
      popupOverlay.classList.remove("modal-content-show");
    }
  }
});
