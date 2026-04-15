// Rerefencer til elementer
const head = document.querySelector("#Head");
const arm = document.querySelector("#R_arm-2");
const leg = document.querySelector("#R_leg-2");

// eventListeners
head.addEventListener("click", infoHead);
arm.addEventListener("click", infoArm);
leg.addEventListener("click", infoLeg);

function infoHead() {
  console.log("infoHead");
  document.querySelector(".info-text > h2").textContent = "HOVED";
  document.querySelector(".info-subheadline").textContent =
    "Her er vigtig information om zombien hovedregion";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Super-effektivt</h3><p>Det er meget effektivt at skyde en zombie igennem hovedet - det dør de af.</p> <p>Pas på med bare at halshugge dem, for så kan hovedet godt leve videre og stadig bide.</p>";
}

function infoArm() {
  console.log("infoArm");
  document.querySelector(".info-text > h2").textContent = "ARM";
}
function infoLeg() {
  console.log("infoLeg");
  document.querySelector(".info-text > h2").textContent = "BEN";
}

