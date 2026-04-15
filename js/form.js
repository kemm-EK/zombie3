// grib fat i form
const form = document.querySelector("form");

// stop default ved invalid
form.addEventListener("invalid", cancelPopup, true);

// formen submitter
form.addEventListener("submit", submitForm);

function cancelPopup(e) {
  console.log("cancelPopup");
  // console.log(event);
  e.preventDefault();
}

function submitForm(event) {
  console.log("submitForm");
  event.preventDefault();
  printdata();
  form.reset();
}

// ************************************************************
// ny javascript
// ************************************************************

function printdata() {
  console.log("printdata");

  // have fat i data fra form
  const data = new FormData(form);
  const hurt = data.getAll("hurt");

  document.querySelector("#output-firstname").textContent =
    data.get("firstname");
  document.querySelector("#output-zone").textContent = data.get("zone");
  document.querySelector("#output-age").textContent = data.get("age");
  document.querySelector("#output-date").textContent = data.get("date");

  document.querySelector("#output-hurt").textContent = hurt.join(", ");
  document.querySelector("#output-isbraingood").textContent =
    data.get("isbraingood");
  document.querySelector("#output-comment").textContent = data.get("comment");
}
