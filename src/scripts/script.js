import { getAllJellyBeans } from "./apiFetch.js";
let allJellyBeans = [];

window.addEventListener("DOMContentLoaded", async () => {
  async function test() {
    const jellyBeanData = await getAllJellyBeans();
    console.log("API data unwrapped in script.js");
    console.log(jellyBeanData);
    allJellyBeans = jellyBeanData;
    formulateData(jellyBeanData.items);
  }
  test();
});

function formulateData(data) {
  const grid = document.getElementById("jellyCardGrid");
  const template = document.querySelector(".templateJellyCol");

  data.forEach((bean) => {
    // Clone template column
    const card = template.cloneNode(true);
    card.classList.remove("d-none");

    // Fill in basic fields
    card.querySelector(".imgUrl").src = bean.imageUrl;
    card.querySelector(".flavorName").textContent = bean.flavorName;
    card.querySelector(".description").textContent = bean.description || "";
    card.querySelector(".colorGroup").textContent = bean.colorGroup;

    // Group names (use forEach)
    const ul = card.querySelector(".groupNameTemplate");
    ul.innerHTML = ""; // removes the example li

    bean.groupName.forEach((group) => {
      const li = document.createElement("li");
      li.className = "list-group-item p-0 fs-4";
      li.textContent = group;
      ul.appendChild(li);
    });

    // Add card to grid
    grid.appendChild(card);
  });
}
