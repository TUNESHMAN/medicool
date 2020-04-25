import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import {
  getPrescription,
  deletePrescription,
  getFormula,
  noFormula,
} from "../state/actions/drugAction";
import { Card, Modal, Spin } from "antd";
import { PlusOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import Toolbar from "./Toolbar/Toolbar";
import AddFormula from "./AddFormula";

import "./Styles.css";

const { Meta } = Card;

function Prescription(props) {
  const [show, setShow] = useState(false);
  const [medId, setMedId] = useState("");
  const [loading, setLoading] = useState(false);

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
        <div className="prescription-header"></div>

        <div className="prescription-card">
          {props.prescription.length > 0 ? (
            props.prescription.map((med) => (
              <div className="card">
                <Card
                  key={med.id}
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
                  {/* <Meta title={med.drug} description={med.unit} /> */}
                  <h3>
                    <span>💊</span> : {med.drug}
                  </h3>
                  <p>
                    <span>🧮 </span>: {med.unit}
                  </p>
                  <p>
                    <span>📅</span>: {med.start_Date}
                  </p>
                  <p>
                    <span>📅</span>: {med.end_Date}
                  </p>
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
