const campos = document.querySelectorAll(".campo");
const advices = document.querySelectorAll(".advice");

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

const submitButton = document.getElementById("verificar");
const validationScreen = document.getElementById("add-card");
const formulario = document.getElementById("formulario1");

const nome = document.getElementById("name");
const cardNumber = document.getElementById("card-number-input");
const mouth = document.getElementById("mes");
const year = document.getElementById("ano");
const cvcNumber = document.getElementById("cvc");

const cardName = document.getElementById("name-card");
const cardNumero = document.getElementById("nCard");
const mes = document.getElementById("mesCard");
const ano =document.getElementById('year2')
const cvcN = document.getElementById("cvcCard");

console.log(year)

submitButton.addEventListener("click", () => {
  if (
    nome.value &&
    cardNumber.value &&
    mouth.value &&
    year.value &&
    cvcNumber.value
  ) {
    validationScreen.classList.remove("hidde");
    formulario.classList.add("hidde");
    cardName.innerHTML = `${nome.value.toUpperCase()}`;
    cardNumero.innerHTML = `${formatCreditCard(cardNumber.value)}`;
    mes.innerHTML= `${mouth.value}/`;
    ano.innerHTML= `${year.value}`;
    cvcN.innerHTML = `${cvcNumber.value}`;
  } else {
    alert("Atenção! Preecha todos os campos");
  }
});

function formatCreditCard(value) {
  const cleanedValue = value.replace(/\s/g, "");
  const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
  return formattedValue;
}

const refresh = document.getElementById("refreshButton");
refresh.addEventListener("click", function () {
  location.reload();
});
