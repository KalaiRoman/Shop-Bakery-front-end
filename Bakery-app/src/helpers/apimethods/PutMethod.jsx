import axios from "axios";
function PutMethod(url, id, body) {
  const URL = id ? `${url}/${id}` : `${url}`;
  const response = axios.put(URL, body);
  if (response) {
    return response;
  }
}

export default PutMethod;
