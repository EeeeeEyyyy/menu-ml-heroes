const heroes = [
      { id: 1, title: "Akai", categories: ["Tank"], img: "images/akai.webp" },
      { id: 2, title: "Alice", categories: ["Mage", "Tank"], img: "images/alice.webp" },
      { id: 3, title: "Alucard", categories: ["Fighter", "Assassin"], img: "images/alucard.webp" },
      { id: 4, title: "Balmond", categories: ["Fighter"], img: "images/balmond.webp" },
      { id: 5, title: "Bane", categories: ["Fighter", "Mage"], img: "images/bane.webp" },
      { id: 6, title: "Bruno", categories: ["Marksman"], img: "images/bruno.webp" },
      { id: 7, title: "Clint", categories: ["Marksman"], img: "images/clint.webp" },
      { id: 8, title: "Eudora", categories: ["Mage"], img: "images/eudora.webp" },
      { id: 9, title: "Franco", categories: ["Tank"], img: "images/franco.webp" },
      { id: 10, title: "Karina", categories: ["Assassin"], img: "images/karina.webp" },
      { id: 11, title: "Miya", categories: ["Marksman"], img: "images/miya.webp" },
      { id: 12, title: "Nana", categories: ["Mage", "Support"], img: "images/nana.webp" },
      { id: 13, title: "Rafaela", categories: ["Support"], img: "images/rafa.webp" },
      { id: 14, title: "Saber", categories: ["Assassin"], img: "images/saber.webp" },
      { id: 15, title: "Tigreal", categories: ["Tank"], img: "images/tigreal.webp" },
      { id: 16, title: "Zilong", categories: ["Fighter", "Assassin"], img: "images/zilong.webp" },
    ];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  displayHeroesItems(heroes);
  displayHeroesButtons();
});
function displayHeroesItems(heroesItems) {
  let displayHeroes = heroesItems.map(function (item) {
    return `<article class="heroes-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
          </div>
        </article>`;
  }).join("");
  sectionCenter.innerHTML = displayHeroes;
}
function displayHeroesButtons() {
  const categories = heroes.reduce(function (values, item) {
    item.categories.forEach(function (category) {
      if (!values.includes(category)) {
        values.push(category);
      }
    });
    return values;
  }, ["all"]);
  const categoryBtns = categories.map(function (category) {
    return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
  }).join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const heroesCategory = heroes.filter(function (heroesItem) {
        return heroesItem.categories.includes(category);
      });
      if (category === "all") {
        displayHeroesItems(heroes);
      } else {
        displayHeroesItems(heroesCategory);
      }
    });
  });
}
