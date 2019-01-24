const $root = document.querySelector("#root");
const $memoryCardFront = document.createElement("article");

createMemoryCard();
createMemoryCard();

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
