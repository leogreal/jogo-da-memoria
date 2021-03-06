(() => {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();

  const $pointBar = pointBar.create();
  const $startButton = startButton.create();

  const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Icone de um livro de C++"
  });

  const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Icone de um livro de JavaScript"
  });

  const $memoryCardJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "Icone de um livro de Java"
  });

  const $memoryCardPHP = createMemoryCard({
    src: "img/icon-php.png",
    alt: "Icone de um livro de PHP"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $startButton);
})();
