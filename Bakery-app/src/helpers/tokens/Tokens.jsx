const setToken = (params) => {
  return localStorage.setItem("user-token", JSON.stringify(params));
};

const getToken = () => {
  return JSON.parse(localStorage.getItem("user-token"));
};

const removeToken = () => {
  localStorage.removeItem("user-token");
  localStorage.clear();
};



export {setToken,getToken,removeToken}