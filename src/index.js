const $root = document.querySelector("#root");
const $cardContainer = document.createElement("section");

$root.insertBefore($cardContainer, null);
$cardContainer.classList.add("card-container");


const $cards = [
  { src: 'img/icon-collabcode.png', alt: 'Gueio mascode da CollabCode', front: false },
  { src: 'img/icon-bug.png', alt: 'card bug', front: true },
  { src: 'img/icon-c.png', alt: 'card c', front: true },
  { src: 'img/icon-cabeca.png', alt: 'card cabeça', front: true },
  { src: 'img/icon-celular.png', alt: 'card celular', front: true },
  { src: 'img/icon-java.png', alt: 'card java', front: true },
  { src: 'img/icon-js.png', alt: 'card java script', front: true },
  { src: 'img/icon-php.png', alt: 'card php', front: true },
  { src: 'img/icon-responsivo.png', alt: 'card responsivo', front: true },
  { src: 'img/icon-settings.png', alt: 'card settings', front: true },
  { src: 'img/icon-woman.png', alt: 'card woman', front: true }
];

$cards.forEach(card => createCard(card));

function createCard(card){
  const $memoryCard = document.createElement("article");
  $cardContainer.insertBefore($memoryCard, null);
  
  $memoryCard.classList.add("memory-card");
  
  if(card.front){
    $memoryCard.classList.add("-front");
  }

  $memoryCard.insertAdjacentHTML("afterbegin", createIcon(card));
}

function createIcon(card){
  return `
  <img
    class='icon'
    src='${card.src}'
    alt='${card.alt}'
  />
`;
}
