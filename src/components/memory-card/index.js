const createMemoryCard = (
  src = "img/icon-collabcode.png",
  alt = "Gueio mascode da CollabCode",
  extraClass = ""
) => `
    <article class="memory-card ${extraClass}">
      <img
        class='icon'
        src='${src}'
        alt='${alt}'
        onClick="handleClick()"
      />
    </article>
  `;

const handleClick = () => console.log("foi");
