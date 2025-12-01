import { validationSchema } from "../../features/constants/ValidationForm";

const filterMethod = (data, key, id, type) => {
  if (type == "delete") {
    return data?.filter((item, index) => item[key] !== id);
  } else {
    return data?.filter((item, index) => item[key] === id);
  }
};

const findMethod = (data, key, id) => {
  if (key === "") {
    return data?.find((item, index) => item == id);
  } else {
    return data?.find((item, index) => item[key] == id);
  }
};

const findIndexMethod = (data, key, id) => {
  return data?.findIndex((item, index) => item[key] == id);
};

const findLastMethod = (data) => {
  return data?.findLast((item, index) => item);
};

const toCaseMethod = (name, type) => {
  return type == "Upper" ? name.toUpperCase() : name.toLowerCase();
};

const firsLetterUpperCaseMethod = (name) => {
  return name?.charAt(0).toUpperCase() + name?.slice(1);
};

const includesMethod = (data, name) => {
  return data.includes(name);
};

const someMethod = (data, key, id) => {
  return data?.some((item, index) => item[key] == id);
};

const everyMethod = (data, key, id) => {
  return data?.every((item, index) => item[key] == id);
};

const trimMethod = (data, type) => {
  if (type == "start") {
    return data.trimStart();
  } else if (type == "end") {
    return trimEnd();
  } else {
    return data.trim();
  }
};

const splitMethod = (data, type) => {
  if (type == "space") {
    return data.split(" ");
  } else {
    return data.split("");
  }
};

const emailValidation = (email) => {
  if (email) {
    const regex = validationSchema.email;
    if (regex.test(email)) {
      return true;
    } else {
      return "Invalid email format";
    }
  }
};

const navigateMethod = (navigate, path) => {
  return navigate(path);
};

export {
  filterMethod,
  findIndexMethod,
  findLastMethod,
  findMethod,
  toCaseMethod,
  firsLetterUpperCaseMethod,
  includesMethod,
  someMethod,
  everyMethod,
  trimMethod,
  splitMethod,
  emailValidation,
  navigateMethod,
};
