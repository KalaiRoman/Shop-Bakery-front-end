import axios from "axios";
function DeleteMethod(url, id) {
  const URL = id ? `${url}/${id}` : `${url}`;
  const response = axios.get(URL);
  if (response) {
    return response;
  }
}

export default DeleteMethod;
