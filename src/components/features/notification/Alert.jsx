import { ToastContainer, toast } from "react-toastify";

function Alert() {
  function notify() {
    toast("Added to your collection!");
  }
  return (
    <div>
      <button onClick={notify}>Notify me!</button>
      <ToastContainer />
    </div>
  );
}

export default Alert;
