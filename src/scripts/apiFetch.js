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

// async function test() {
//   const res = await fetch("https://jellybellywikiapi.onrender.com/api/Beans");
//   const data = await res.json();
//   console.log(data);
// }
// test();
