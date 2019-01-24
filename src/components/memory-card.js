function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
    <img
      class='icon'
      src='img/icon-collabcode.png'
      alt='Gueio mascode da CollabCode'
    />
  `;
  
  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}
