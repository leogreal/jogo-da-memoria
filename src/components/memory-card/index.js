const createMemoryCard = (src, nameClass) => `
  <article class="memory-card ${nameClass}">
    <img
      class='icon'
      src='${src}'
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
