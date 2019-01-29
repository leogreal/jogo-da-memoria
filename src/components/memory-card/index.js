const $wrapCards = document.querySelector(".wrap-cards");

const createMemoryCard = () => `
    <article class="memory-card">
      <img
        class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascode da CollabCode'
        onClick="handleClick()"
      />
    </article>
  `;

const handleClick = () => console.log("foi");
