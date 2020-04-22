import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import {
  getPrescription,
  deletePrescription,
  getFormula,
  noFormula,
} from "../state/actions/drugAction";
import { Card, Button, Modal } from "antd";
import { PlusOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import Toolbar from "./Toolbar/Toolbar";
import AddPrescription from "./AddPrescription";
import AddFormula from "./AddFormula";
import { NO_FORMULA, GET_FORMULA } from "../state/types/types";
import "./Styles.css";

const { Meta } = Card;

function Prescription(props) {
  console.log(props);
  console.log(props.prescription);

  console.log(props.formula);

  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [medId, setMedId] = useState("");

  // const toggleModal = () => {
  //   setVisible(!visible);
  // };
  const toggleFormula = (id) => {
    setShow(!show);
    setMedId(id);
    console.log(medId);
    props.getPrescription();
  };

  function handleView(_id) {
    axiosWithAuth()
      .get(`/formula/${_id}`)
      .then((res) => {
        console.log(res.data);
        props.getFormula(res.data);
        console.log("true");
        let secondsToGo = 25;
        let frequency = res.data.frequency;
        let dose = res.data.dose;
        let when = res.data.before_after_meal;
        const modal = Modal.info({
          title: res.data.frequency,
          content: `Hi, you will take ${dose},of this drug ${when}  ${frequency} `,
        });
        const timer = setInterval(() => {
          secondsToGo -= 1;
          modal.update({
            content: `Hi, you will take ${dose},of this drug ${when}  ${frequency}`,
          });
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          modal.destroy();
        }, secondsToGo * 1000);
      })
      .catch(() => {
        props.noFormula({});
        console.log("false");
        let secondsToGo = 25;
        const modal = Modal.error({
          content: `Hi, you do not have any formula `,
        });
        const timer = setInterval(() => {
          secondsToGo -= 1;
          modal.update({
            content: `Hi, you do not have any formula`,
          });
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          modal.destroy();
        }, secondsToGo * 1000);
      });
  }

  function handleEnd() {
    setShow(false);
  }
  // const handleOk = () => {
  //   setVisible(false);
  // };

  // const handleCancel = () => {
  //   setVisible(false);
  // };

  useEffect(() => {
    props.getPrescription();
  }, []);

  const handleDelete = (_id) => {
    props.deletePrescription(_id);
    props.getPrescription();
  };

  return (
    <div>
      <Toolbar>
        <div className="prescription-header">
          {/* <h1>View Prescriptions</h1> */}
          {/* <Button onClick={toggleModal}>Add Prescription</Button>
          <Modal
            title="Add a prescription"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose={true}
            footer={null}
          >
          </Modal> */}
        </div>

        <div className="prescription-card">
          {props.prescription.length > 0 ? (
            props.prescription.map((med, index) => (
              <div className="card">
                <Card
                  data-test-id="prescription-card"
                  style={{ width: 300 }}
                  actions={[
                    <PlusOutlined
                      key="plus"
                      onClick={() => toggleFormula(med._id)}
                    />,

                    <EyeOutlined
                      key="eye"
                      onClick={() => handleView(med._id)}
                    />,
                    <DeleteOutlined
                      key="delete"
                      onClick={() => handleDelete(med._id)}
                    />,
                  ]}
                >
                  <Meta
                    // avatar={<Avatar src={logo} />}
                    title={med.drug}
                    description={med.unit}
                  />
                </Card>
              </div>
            ))
          ) : (
            <h1>There are no prescriptions</h1>
          )}
        </div>
        <div>
          <Modal
            title="Have a new formula?"
            visible={show}
            footer={null}
            destroyOnClose={true}
            onCancel={handleEnd}
          >
            <AddFormula toggleFormula={toggleFormula} medId={medId} />
          </Modal>
        </div>
      </Toolbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  prescription: state.prescription.drugs,
  formula: state.formula,
});

export default connect(mapStateToProps, {
  getPrescription,
  deletePrescription,
  getFormula,
  noFormula,
})(Prescription);
