import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./Styles.css";
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

function Prescription(props) {
  console.log(props.prescription, props.isFetching);

  const [show, setShow] = useState(false);
  const [medId, setMedId] = useState("");

  const toggleFormula = (id) => {
    setShow(!show);
    setMedId(id);
    props.getPrescription();
  };

  function handleView(_id) {
    axiosWithAuth()
      .get(`/formula/${_id}`)
      .then((res) => {
        props.getFormula(res.data);
        let secondsToGo = 25;
        let frequency = res.data.frequency;
        let dose = res.data.dose;
        let when = res.data.before_after_meal;
        const modal = Modal.info({
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

  const handleDelete = (_id) => {
    props.deletePrescription(_id);
    props.getPrescription();
  };
  useEffect(() => {
    props.getPrescription();
  }, []);

  return (
    <div>
      <Toolbar>
        {props.isFetching ? (
          <div className="spinner">
            <Spin size="large" spinning={props.isFetching} />
          </div>
        ) : props.prescription.length === 0 ? (
          <div className="heading">
            <h2>There are no prescriptions</h2>
          </div>
        ) : (
          <div className="prescription-card">
            {props.prescription.map((med) => (
              <div className="card">
                <Card
                  key={med.id}
                  data-test-id="prescription-card"
                  style={{
                    width: 300,
                    marginBottom: "12px",
                    borderRadius: "12px",
                  }}
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
                  <p>
                    <span className="card-info">Drug Name :</span>
                    <span className="card-details"> {med.drug}</span>
                  </p>

                  <p>
                    <span className="card-info">Drug Count : </span>
                    <span className="card-details"> {med.unit}</span>
                  </p>
                  <p>
                    <span className="card-info">Start Date :</span>
                    <span className="card-details"> {med.start_Date}</span>
                  </p>
                  <p>
                    <span className="card-info">End Date :</span>
                    <span className="card-details"> {med.end_Date}</span>
                  </p>
                </Card>
              </div>
            ))}
          </div>
        )}

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
  isFetching: state.prescription.isFetching,
});

export default connect(mapStateToProps, {
  getPrescription,
  deletePrescription,
  getFormula,
  noFormula,
})(Prescription);
