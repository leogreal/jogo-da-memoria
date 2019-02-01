const createMemoryCard = card => {
  const { className, src, alt } = card;

  return `
  <article class="memory-card ${className}">
    <img
      class='icon'
      src='${src}'
      alt='${alt}'
      onClick="handleClick()"
    />
  </article>
`;
};

const handleClick = () => console.log("foi");
