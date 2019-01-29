const $wrapCards = document.querySelector(".wrap-cards");

function createMemoryCard() {
  return `
    <article class="memory-card">
      <img
        class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascode da CollabCode'
        onClick="handleClick()"
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
        onClick="handleClick()"
      />
    </article>
  `;
}

function handleClick() {
  console.log("foi");
}
