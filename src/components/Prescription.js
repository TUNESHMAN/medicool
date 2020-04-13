import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getPrescription,
  deletePrescription,
} from "../state/actions/drugAction";
import { Card, Avatar, Button, Modal } from "antd";
import logo from "../images/mediool.png";
import { PlusOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import HeaderSearchBar from "./Toolbar/HeaderSearchBar";
import Toolbar from "./Toolbar/Toolbar";
import AddPrescription from "./AddPrescription";
import AddFormula from "./AddFormula";

// import "./form.css";

const { Meta } = Card;

function Prescription(props) {
  console.log(props);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [medId, setMedId] = useState("");

  const toggleModal = () => {
    setVisible(!visible);
  
  };
  const toggleFormula = (id) => {
    setShow(!show);
    setMedId(id)
    console.log(medId)
  };

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
        <HeaderSearchBar />
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
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <PlusOutlined key="plus" onClick={()=>toggleFormula(med._id)} />,
                
                <EyeOutlined key="eye" />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDelete(med._id)}
                />,
              ]}
            >
              <Meta
                avatar={<Avatar src={logo} />}
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
});

export default connect(mapStateToProps, {
  getPrescription,
  deletePrescription,
})(Prescription);
