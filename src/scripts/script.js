import { getAllJellyBeans } from "./apiFetch.js";

window.addEventListener("DOMContentLoaded", async () => {
  async function test() {
    const jellyBeanData = await getAllJellyBeans();
    console.log("API data unwrapped in script.js");
    console.log(jellyBeanData);
  }
  test();
});
