import axios from "axios";
function PostMethod(url, id, body) {
  const URL = id ? `${url}/${id}` : `${url}`;
  const response = axios.post(URL, body);
  if (response) {
    return response;
  }
}

export default PostMethod;
