const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Gueio mascode da CollabCode"
});
const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Icone de um livro de JavaScript",
  className: "-front"
});
const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Icone de um livro de Java",
  className: "-front"
});
const $memoryCardPHP = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Icone de um livro de PHP",
  className: "-front"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
