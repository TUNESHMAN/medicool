import { Modal } from "antd";

function AddSuccess() {
  let secondsToGo = 30;
  const modal = Modal.success({
    title: "You have successfully added a prescription",
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default AddSuccess;
