import { getAllJellyBeans, formulateData } from "./apiFetch.js";
let allJellyBeans = [];

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


