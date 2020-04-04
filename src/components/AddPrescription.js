import React, { useState } from "react";
import { connect } from "react-redux";
import { postPrescription } from "../state/actions/drugAction";
import { Button, Form, FormGroup, Label, Input, Badge } from "reactstrap";
import "./form.css";

function AddPrescription(props) {
  console.log(props);
  
  const [formDetails, setFormDetails] = useState({
    drug: "",
    unit: "",
    start_date: "",
    end_date: ""
  });
  const handleChange = e => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newPres = {
      drug: formDetails.drug,
      unit: formDetails.unit,
      start_date: formDetails.start_date,
      end_date: formDetails.end_date
    };

    props.postPrescription(newPres);
  };
  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1>
          <span className="font-weight-bold">New prescription</span>
          {/* <Badge color="primary"> New prescription</Badge> */}
        </h1>
        <FormGroup>
          <Label htmlFor="drug">Drug</Label>
          <Input
            type="text"
            placeholder="Name of drug"
            name="drug"
            onChange={handleChange}
            value={formDetails.drug}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="unit">Unit</Label>
          <Input
            type="text"
            id="formGroupExampleInput"
            placeholder="Enter the unit"
            name="unit"
            onChange={handleChange}
            value={formDetails.unit}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="formGroupExampleInput2">Start Date</Label>
          <input
            type="date"
            className="form-control"
            placeholder="age"
            name="start_date"
            onChange={handleChange}
            value={formDetails.start_date}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">End Date</Label>
          <Input
            type="date"
            placeholder="Enter email"
            name="end_date"
            onChange={handleChange}
            value={formDetails.end_date}
          />
        </FormGroup>

        <Button
          type="submit"
          className="btn-lg btn-primary btn-block"
          color="primary"
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  prescription: state.prescription.data,
  newPres: state.prescription.data
});

export default connect(mapStateToProps, { postPrescription })(AddPrescription);
