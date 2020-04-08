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
import { AddPrescription } from "./AddPrescription";

// import "./form.css";

const { Meta } = Card;

function Prescription(props) {
  console.log(props);
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = (_id) => {
    props.deletePrescription(_id);
  };
  useEffect(() => {
    props.getPrescription();
  }, []);

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
        >
          <AddPrescription toggleModal={toggleModal}/>
        </Modal>
        <div>
          {/* <Switch checked={!loading} onChange={onChange} /> */}
          {props.prescription.map((med, index) => (
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <PlusOutlined key="plus" />,
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
