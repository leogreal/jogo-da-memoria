const createMemoryCard = nameClass => `
  <article class="memory-card ${nameClass}">
    <img
      class='icon'
      src='${
        nameClass === "-front" ? "img/icon-js.png" : "img/icon-collabcode.png"
      }'
      alt='${
        nameClass === "-front"
          ? "Icone de um livro de JavaScript"
          : "Gueio mascode da CollabCode"
      }'
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("foi");
