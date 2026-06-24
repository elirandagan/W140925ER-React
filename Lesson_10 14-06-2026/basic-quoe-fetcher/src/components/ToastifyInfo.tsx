import { Flip, toast } from "react-toastify";

const ToastifyInfo = () => {
  function handleToast() {
    toast.info("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      //   draggable: false,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  }

  return (
    <button
      style={{
        padding: 8,
        fontSize: 20,
        borderRadius: 16,
        background: "#3497da",
        color: "white",
        borderColor: "white",
      }}
      onClick={handleToast}
    >
      Emit Info
    </button>
  );
};

export default ToastifyInfo;
