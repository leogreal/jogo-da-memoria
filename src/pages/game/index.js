const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$root.insertAdjacentElement("beforeend", $cardsWrapper);