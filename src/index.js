const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $upsetMemoryCard = document.createElement("article");

$memoryCard.classList.add("memory-card");
$upsetMemoryCard.classList.add("memory-card");
$upsetMemoryCard.classList.add("-upset");

$root.insertBefore($upsetMemoryCard, null);
$root.insertBefore($memoryCard, null);

$upsetMemoryCard.insertAdjacentHTML("afterbegin", icon("img/icon-js.png", "JavaScript"));
$memoryCard.insertAdjacentHTML("afterbegin", icon("img/icon-collabcode.png", "Gueio mascode da CollabCode"));

function icon(mySrc, myAlt) {
  return `
    <img
      class='icon'
      src='${mySrc}'
      alt='${myAlt}'
    />
  `;
}