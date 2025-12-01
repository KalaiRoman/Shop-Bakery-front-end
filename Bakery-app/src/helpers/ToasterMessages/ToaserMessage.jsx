import toast from "react-hot-toast";
const ToastMessageSucess = (message) => {
  return toast.success(message);
};

const ToastMessageError = (message) => {
  return toast.error(message);
};

const ToastSaveMessage = (message, usePromise = false, promiseFn = null) => {
  if (usePromise && promiseFn) {
    return toast.promise(promiseFn, {
      loading: "Saving...",
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    });
  } else {
    return toast.success(message);
  }
};

const saveSettings = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Settings saved:", value);
      resolve({ success: true });
    }, 1500);
  });
};

const CustomToasterOptions = () => {
  toast((t) => (
    <span>
      Custom and <b>bold</b> thala mani
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
        }
        alt="no image"
      />
      <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
    </span>
  ));
};

export {
  ToastMessageSucess,
  ToastMessageError,
  ToastSaveMessage,
  saveSettings,
  CustomToasterOptions,
};
