createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCardFront();
createMemoryCardFront();

document.querySelectorAll(".memory-card").forEach($card => {
  $card.addEventListener("click", e => {
    e.preventDefault();
    console.log("Oi, eu sou um card!");
  });
});

$wrapCards.addEventListener("click", e => {
  const { tagName } = e.target;
  if (tagName === "ARTICLE" || tagName === "IMG") {
    console.log("Oi, eu sou um card borbulhando!");
  }
});
