import { Bounce, toast } from "react-toastify";

const ToastifyError = () => {
  function handleToast() {
    toast.error("ERROR!", {
      position: "top-center",
      hideProgressBar: false,
      autoClose: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <button
      style={{
        padding: 8,
        fontSize: 20,
        borderRadius: 16,
        background: "#e64d3c",
        color: "white",
        borderColor: "white",
      }}
      onClick={handleToast}
    >
      Emit Error
    </button>
  );
};

export default ToastifyError;
