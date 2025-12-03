import { getAllJellyBeans, formulateData } from "./apiFetch.js";
let allJellyBeans = [];

const searchInput = document.getElementById("search-input");

window.addEventListener("DOMContentLoaded", async () => {
  async function test() {
    const jellyBeanData = await getAllJellyBeans();
    console.log("API data unwrapped in script.js");
    console.log(jellyBeanData);
    allJellyBeans = jellyBeanData.items;
    formulateData(jellyBeanData.items);
  }
  test();
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = allJellyBeans.filter((bean) =>
    bean.flavorName.toLowerCase().includes(value)
  );
  formulateData(filtered);
});
