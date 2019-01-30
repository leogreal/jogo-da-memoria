const createMemoryCard = (
  nameClass = "",
  src = "img/icon-collabcode.png",
  alt = "Gueio mascode da CollabCode"
) => `
    <article class="memory-card ${nameClass}">
      <img
        class='icon'
        src='${src}'
        alt='${alt}'
        onClick="handleClick()"
      />
    </article>
  `;

const handleClick = () => console.log("foi");
