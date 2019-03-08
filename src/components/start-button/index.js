const startButton = (function() {
  const module = {};

  module.style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        background-color: #3a4042;
        border-radius: 999em;
        width: 56px;
        height: 56px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        font-size: 18px;
        cursor: pointer;

        position:absolute;
        bottom:40px;
        right:25%;
        left:50%;
        margin-left:-28px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module.style();

    return `
      <button type="button" class="start-button">🎲</button>
    `;
  };

  return {
    create: module.create
  };
})();
