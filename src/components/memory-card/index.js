const createMemoryCard = attributes => `
  <article class="memory-card ${attributes.className}">
    <img
      class='icon'
      src='${attributes.src}'
      alt='${attributes.alt}'
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("foi");
