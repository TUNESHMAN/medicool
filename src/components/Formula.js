import React from "react";
import { connect } from "react-redux";
import { getFormula } from "../state/actions/drugAction";

function Formula(props) {
  console.log(props);

  return <div>{!props.formula && <h1>You do not have any formula</h1>}</div>;
}

const mapStateToProps = (state) => ({
  message: state.message,
  formula: state.formula,
});

export default connect(mapStateToProps, { getFormula })(Formula);
