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

const CustomToasterOptions = (message, images) => {
  toast((t) => (
    <div className="custom-message">
      <div>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
          }
          alt="no image"
          className="user-image"
        />
      </div>
      <div>
        <div>{message} <span className="text-success"><i class="fa-solid fa-circle-check"></i></span></div>
      </div>

      <div className="close-icon" onClick={() => toast.dismiss(t.id)}>
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  ));
};

export {
  ToastMessageSucess,
  ToastMessageError,
  ToastSaveMessage,
  saveSettings,
  CustomToasterOptions,
};

