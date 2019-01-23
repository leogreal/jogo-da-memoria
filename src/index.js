const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $iconCollab = `
  <img
    class='icon'
    src='img/icon-collabcode.png'
    alt='Gueio mascode da CollabCode'
  />
`;

const $iconC = `
  <img
    class='icon'
    src='img/icon-js.png'
    alt='Icone da linguagem'
  />
`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
