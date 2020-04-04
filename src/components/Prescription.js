import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPrescription } from "../state/actions/drugAction";

function Prescription(props) {
  useEffect(() => {
    props.getPrescription();
  }, []);
  return (
    <div>
      <h1>Prescription</h1>

      <div>
        {props.prescription.map((med, index) => (
          <h3 key={med.userId}>{med.drug}</h3>
        ))}
      </div>
      <button>Add</button>
    </div>
  );
}

const mapStateToProps = state => ({
  prescription: state.prescription.drugs
});

export default connect(mapStateToProps, { getPrescription })(Prescription);
