const $wrapCards = document.querySelector(".wrap-cards");

function createMemoryCard() {
  return `
    <article class="memory-card">
      <img
        class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascode da CollabCode'
      />
    </article>
  `;
}

function createMemoryCardFront() {
  return `
    <article class="memory-card -front">  
      <img
        class='icon'
        src='img/icon-js.png'
        alt='Icone da linguagem'
      />
    </article>
  `;
}
