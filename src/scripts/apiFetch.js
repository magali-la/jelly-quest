export async function getAllJellyBeans() {
  const url =
    "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=114";

  try {
    console.log("Attempting to retrieve data");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Api failed to retrieve jelly data");
    }
    const data = await response.json();
    console.log("API jelly data");
    return data;
  } catch (error) {
    console.error("Error while fetching data", error);
  }
}

export function formulateData(data) {
  const grid = document.getElementById("jellyCardGrid");
  const template = document.querySelector(".templateJellyCol");

  grid.innerHTML = "";
  // clears so that when searching it re renders display
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
    const ul = card.querySelector(".groupNameTemplateList");
    ul.innerHTML = ""; // removes the example li that is given

    //Appends each group name to group list within bootstrap
    bean.groupName.forEach((group) => {
      const li = document.createElement("li");
      li.className = "list-group-item p-0 fs-5";
      li.textContent = group;
      ul.appendChild(li);
    });

    // Add card to grid
    grid.appendChild(card);
  });
}

// async function test() {
//   const res = await fetch("https://jellybellywikiapi.onrender.com/api/Beans");
//   const data = await res.json();
//   console.log(data);
// }
// test();
