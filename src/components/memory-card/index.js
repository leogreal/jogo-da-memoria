const createMemoryCard = nameClass => {
  let src = "img/icon-collabcode.png";

  if (nameClass === "-front") {
    src = "img/icon-js.png";
  }

  return `
    <article class="memory-card ${nameClass}">
      <img
        class='icon'
        src='${src}'
        alt='Gueio mascode da CollabCode'
        onClick="handleClick()"
      />
    </article>
  `;
};

const handleClick = () => console.log("foi");
