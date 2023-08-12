const campos = document.querySelectorAll(".campo");
const advices = document.querySelectorAll(".advice");
const confirm = document.getElementById("add-card");
const formulario = document.getElementsByClassName("form-container");
const nameCard = document.getElementById("name-card");
const cvcNumber = document.getElementById("cvcCard");
const dateCard = document.getElementById("dateCard");
const cardNumber = document.getElementById("nCard");

function nameValidate() {
  if (campos[0].value.length <= 1) {
    campos[0].style.border = "solid red 1px";
    error(0);
  } else {
    campos[0].style.border = "solid #6448fe 1px";
    errorRemove(0);
  }
}

function numberValidate() {
  if (campos[1].value.length < 12) {
    campos[1].style.border = "solid red 1px";
    error(1);
  } else {
    campos[1].style.border = "solid #6448fe 1px";
    errorRemove(1);
  }
}

function mouthValidate() {
  if (campos[2].value.length < 2) {
    campos[2].style.border = "solid red 1px";
    error(2);
  } else {
    campos[2].style.border = "solid #6448fe 1px";
    errorRemove(2);
  }
}

function yearValidate() {
  if (campos[3].value.length < 2) {
    campos[3].style.border = "solid red 1px";
    error(2);
  } else {
    campos[3].style.border = "solid #6448fe 1px";
    errorRemove(2);
  }
}

function cvcValidate() {
  if (campos[4].value.length < 3) {
    campos[4].style.border = "solid red 1px";
    error(2);
  } else {
    campos[4].style.border = "solid #6448fe 1px";
    errorRemove(2);
  }
}

function error(index) {
  advices[index].classList.remove("hidde");
}

function errorRemove(index) {
  advices[index].classList.add("hidde");
}


