import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import { connect } from "react-redux";
import {
  getPrescription,
  deletePrescription,
  getFormula,
  noFormula
} from "../state/actions/drugAction";
import { Card, Avatar, Button, Modal } from "antd";
// import logo from "../images/mediool.png";
import { PlusOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import HeaderSearchBar from "./Toolbar/HeaderSearchBar";
import Toolbar from "./Toolbar/Toolbar";
import AddPrescription from "./AddPrescription";
import AddFormula from "./AddFormula";
import {NO_FORMULA, GET_FORMULA} from "../state/types/types"

// import "./form.css";

const { Meta } = Card;

function Prescription(props) {
  console.log(props);
  console.log(props.prescription);

  console.log(props.formula);

  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [medId, setMedId] = useState("");

  const toggleModal = () => {
    setVisible(!visible);
  };
  const toggleFormula = (id) => {
    setShow(!show);
    setMedId(id);
    console.log(medId);
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
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

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
        {/* <HeaderSearchBar /> */}
        <Button onClick={toggleModal}>Add Prescription</Button>
        <Modal
          title="Add a prescription"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose={true}
          footer={null}
        >
          <AddPrescription toggleModal={toggleModal} />
        </Modal>
        <div>
          {/* <Switch checked={!loading} onChange={onChange} /> */}
          {props.prescription.map((med, index) => (
            <Card
              data-test-id="prescription-card"
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <PlusOutlined
                  key="plus"
                  onClick={() => toggleFormula(med._id)}
                />,

                <EyeOutlined key="eye" onClick={() => handleView(med._id)} />,
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
          ))}
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
  noFormula
})(Prescription);
