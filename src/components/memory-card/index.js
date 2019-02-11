const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }
  
    .memory-card .card {
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      position: relative;
      cursor: pointer;
      position: absolute;
    }

    .memory-card.-active .card,
    .memory-card.-acerto_mizeravi .card {
      display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-acerto_mizeravi .card.-front {
      display: flex;
    }

    .memory-card .card.-front {
      background-color: #fff;
    }

    .memory-card .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }

    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

  $head.insertBefore($style, null);

  return ({ className, src, alt }) => `
    <div class="memory-card" onClick="handleClick(this)">
      <article class="card -front">
        <img
          class='icon'
          src='${src}'
          alt='${alt}'
        />
      </article>
      <article class="card">
        <img
          class='icon'
          src='img/icon-collabcode.png'
          alt='Gueio mascote da collabcode'
        />
      </article>
    </div>
  `;
};

const handleClick = $component => {
  if (!$component.classList.contains("-active")) {
    if (qtdActiveMemoryCard < 2) {
      $component.classList.toggle("-active");
    }

    if (qtdActiveMemoryCard === 1) {
      checkPair();
    }
  }
};

const checkPair = () => {
  const $activeCards = Array.from(
    document.querySelectorAll(".memory-card.-active")
  );

  const unique = [
    ...new Set(
      $activeCards.map(card =>
        card.querySelector(".-front .icon").getAttribute("src")
      )
    )
  ];

  if (unique.length == 1) {
    console.log("Acertô Mizeravi!");
    $activeCards.forEach(card => {
      card.classList.add("-acerto_mizeravi");
      card.classList.remove("-active");
    });
  } else {
    turnCardsDown();
  }
};

const turnCardsDown = () => {
  setTimeout(() => {
    const $activeMemoryCards = document.querySelectorAll(
      ".memory-card.-active"
    );

    $activeMemoryCards.forEach($memoryCard => {
      $memoryCard.classList.remove("-active");
    });

    qtdActiveMemoryCard = 0;
  }, 2000);
};
