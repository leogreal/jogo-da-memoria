const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCard1 = document.createElement("article");
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

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard1.classList.add("memory-card");
$root.insertBefore($memoryCard1, null);
$memoryCard1.insertAdjacentHTML("afterbegin", $iconCollab);
