import axios from "axios";
function GetMethod(url, id) {
  const URL = id ? `${url}/${id}` : `${url}`;
  const response = axios.get(URL);
  if (response) {
    return response;
  }
}

export default GetMethod;
