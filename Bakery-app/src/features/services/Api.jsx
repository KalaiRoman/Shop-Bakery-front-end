import GetMethod from "../../helpers/apimethods/GetMethod";

export async function getData() {
  const response = await GetMethod("https://jsonplaceholder.typicode.com/todos");
  console.log("response", response);
}
