const pointBar = (function() {
  const module = {};

  module.style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .point-bar {
        background-color: #3a4042;
        height: 40px;
        text-align: center;
      }

      .point-bar > .number {
        color: #FFF;
        line-height: 40px;
        font-family: 'Comfortaa', sans-serif;
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module.style();

    return `
      <header class="point-bar">
        <span class="number">0</span>
      </header>
    `;
  };

  module.updateNumber = newNumber =>
    (document.querySelector(".point-bar > .number").textContent = newNumber);

  return {
    create: module.create,
    updateNumber: module.updateNumber
  };
})();
