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
  document.querySelector(".info-text > h2").textContent = "INFO: HOVED";
  document.querySelector(".info-subheadline").textContent =
    "Vigtig information om zombiens hovedregion";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Super-effektivt</h3><p>Det er meget effektivt at skyde en zombie igennem hovedet - det dør de af.</p> <p>Pas på med bare at halshugge dem, for så kan hovedet godt leve videre og stadig bide.</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Bemærk</h3><p>Det er ikke så svært at skyde en zombie i hovedet, hvis man har en pistol. Dog kan det være lidt grænseoverskridende den første gang.</p><p>Forsøger du din med halshugning (måske fordi du kun har en katana), så skal du huske, at det er et svært hug, og du skal fokusere på et punkt på den anden side af halsen, når du svinger. Ellers kommer du måske til at stoppe bevægelsen for tidligt, og så sidder din katana fast.</p>";
}

function infoArm() {
  console.log("infoArm");
  document.querySelector(".info-text > h2").textContent = "INFO: ARM";
  document.querySelector(".info-subheadline").textContent =
    "Vigtig information om zombiens arme";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Det hjælper</h3><p>Det kan være hjælpsomt at fjerne en zombies arme. Det gør det sværere for den at fange sit bytte, og det stopper den med at gå på den klassiske spøgelses-agtige måde med armene foran sig. Og så er de lidt mindre intimiderende.</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Bemærk</h3><p>Det er dog lidt meget effort i forhold til hvad man får ud af det. Zombien selv er ligeglad om den har arme. Så længe den har en mund er den sulten..</p>";
}
function infoLeg() {
  console.log("infoLeg");
  document.querySelector(".info-text > h2").textContent = "INFO: BEN";
  document.querySelector(".info-subheadline").textContent =
    "Vigtig information om zombiens ben";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Ignorér dem</h3><p>Selvom du hugger benene af en zombie, så fortsætter den alligevel. Den hiver sig frem med armene (hvis du ikke også har hugget dem af) eller bider sig frem med munden.</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Bemærk</h3><p>Zombiens ben er basically til grin. Den er langsom og går superustabilt. Det er derfor let at vælte den, men den kommer alligevel altid på benene igen, så det hjælper ikke meget.</p>";
}
