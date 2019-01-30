const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascode da CollabCode"
);
const $memoryCardJS = createMemoryCard(
  "img/icon-js.png",
  "Icone de um livro de JavaScript",
  "-front"
);
const $memoryCardJava = createMemoryCard(
  "img/icon-java.png",
  "Icone de um livro de Java",
  "-front"
);
const $memoryCardPHP = createMemoryCard(
  "img/icon-php.png",
  "Icone de um livro de PHP",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
