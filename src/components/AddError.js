import { Modal } from "antd";

function AddError() {
  let secondsToGo = 20;
  const modal = Modal.error({
    title: "Sorry, the prescription could not be added. Please try again!",
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({});
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default AddError;
