const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");

$memoryCard.classList.add("memory-card");

$root.insertBefore($memoryCard, null);

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