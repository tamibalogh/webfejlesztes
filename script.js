let total = 0;
const classic = 2990;
const flavored = 3490;
let discount = 0;

const checkboxClassic = document.getElementById("classic_id");
const checkboxOnion = document.getElementById("onion_id");
const checkboxMustard = document.getElementById("mustard_id");
const totalOutput = document.getElementById("total_output");
const discountOutput = document.getElementById("discount_output");
const productOutput = document.getElementById("product_output");
const radioCard = document.getElementById("card");
const radioCash = document.getElementById("cash");
const radioTransfer = document.getElementById("transfer");
const paymentOutput = document.getElementById("extra_cost");
const radioNewsletterYes = document.getElementById("radio_yes");
const radioNewsletterNo = document.getElementById("radio_no");
const checkboxAgree = document.getElementById("agree");
const submitButton = document.getElementById("submit_button");

function radio_ellenoriz() {
  kivalasztas_card();
  kivalasztas_cash();
  kivalasztas_transfer();
}

function kivalasztas_classic() {
  if (checkboxClassic.checked) {
    total = total + classic;
  } else {
    spanClassic.innerHTML = "";
    // total = total - classic;
  }
  totalOutput.innerText = `${total} Ft`;
  productOutput.innerText = `${total} Ft`;

  radio_ellenoriz();
}

function kivalasztas_onion() {
  if (checkboxOnion.checked) {
    total = total + flavored;
  } else {
    total = total - flavored;
  }
  totalOutput.innerText = `${total} Ft`;
  productOutput.innerText = `${total} Ft`;

  radio_ellenoriz();
}

function kivalasztas_mustard() {
  if (checkboxMustard.checked) {
    total = total + flavored;
  } else {
    total = total - flavored;
  }
  totalOutput.innerText = `${total} Ft`;
  productOutput.innerText = `${total} Ft`;

  radio_ellenoriz();
}

function kivalasztas_card() {
  if (radioCard.checked) {
    paymentOutput.innerText = `0 Ft`;
    totalOutput.innerText = `${total} Ft`;
  }
}

function kivalasztas_cash() {
  if (radioCash.checked) {
    paymentOutput.innerText = `1000 Ft`;
    totalOutput.innerText = `${total + 1000} Ft`;
  }
}

function kivalasztas_transfer() {
  if (radioTransfer.checked) {
    paymentOutput.innerText = `500 Ft`;
    totalOutput.innerText = `${total + 500} Ft`;
  }
}

function kivalasztas_newsletter_yes() {
  if (radioNewsletterYes.checked) {
    total = total * 0.9;
    discount = Math.round(total * 0.1);
  }
  totalOutput.innerText = `${total} Ft`;
  discountOutput.innerText = `${discount} Ft`;
}

function kivalasztas_newsletter_no() {
  if (radioNewsletterNo.checked) {
    total = (total / 9) * 10;
    discount = 0;
  }
  totalOutput.innerText = `${total} Ft`;
}

function submit_disable() {
  if (checkboxAgree.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkboxClassic.addEventListener("change", kivalasztas_classic);
checkboxOnion.addEventListener("change", kivalasztas_onion);
checkboxMustard.addEventListener("change", kivalasztas_mustard);
radioCard.addEventListener("change", kivalasztas_card);
radioCash.addEventListener("change", kivalasztas_cash);
radioTransfer.addEventListener("change", kivalasztas_transfer);
radioNewsletterYes.addEventListener("change", kivalasztas_newsletter_yes);
radioNewsletterNo.addEventListener("change", kivalasztas_newsletter_no);
checkboxAgree.addEventListener("change", submit_disable);
