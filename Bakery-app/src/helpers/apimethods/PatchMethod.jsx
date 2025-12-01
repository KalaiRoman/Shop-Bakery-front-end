import axios from "axios";
function PatchMethod(url, id, body) {
  const URL = id ? `${url}/${id}` : `${url}`;
  const response = axios.patch(URL, body);
  if (response) {
    return response;
  }
}

export default PatchMethod;
