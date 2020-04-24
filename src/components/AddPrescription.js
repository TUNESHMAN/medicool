import React, { useState } from "react";
import { Form, Icon, Input, Button, DatePicker } from "antd";
import "./form.css";
import { connect } from "react-redux";
import { postPrescription, getPrescription } from "../state/actions/drugAction";

export const AddPrescription = (props) => {
  console.log(props)
  const [formValues, setFormValues] = useState({
    drug: "",
    unit: "",
    start_Date: "",
    end_Date: "",
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPres = {
      drug: formValues.drug,
      unit: formValues.unit,
      start_Date: formValues.start_Date,
      end_Date: formValues.end_Date,
    };

    props.postPrescription(newPres);
    props.toggleModal();
    props.getPrescription()
  };
  const {
    getFieldDecorator
  } = props.form;

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("drug", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Name of drug" },
            {
              type: "string",
              message: "Enter a drug name",
            },
          ],
        })(
          <Input
            name="drug"
            setFieldsValue={formValues.drug}
            onChange={handleChange}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Drug"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("unit", {
          //rules are for the form validation
          rules: [
            { required: true, message: "How many table or teaspoons?" },
            {
              type: "string",
              message: "Enter Drug unit",
            },
          ],
        })(
          <Input
            name="unit"
            setFieldsValue={formValues.unit}
            onChange={handleChange}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Unit"
          />
        )}
      </Form.Item>
      <Form.Item
        name="start_Date"
        placeholder="Start"
        onChange={handleChange}
        setFieldsValue={formValues.start_Date}
      >
        {getFieldDecorator("start_Date", {
          //rules are for the form validation
          rules: [
            { required: true, message: "When will this medication start?" },
            {
              type: "date",
              message: "Date is not valid",
            },
          ],
        })(<DatePicker />)}
      </Form.Item>
      <Form.Item
        name="end_Date"
        placeholder="End"
        onChange={handleChange}
        setFieldsValue={formValues.end_Date}
      >
        {getFieldDecorator("end_Date", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please enter an end date" },
            {
              type: "date",
              message: "Invalid email",
            },
          ],
        })(<DatePicker />)}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add Prescription
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  prescription: state.prescription.data,
  newPres: state.prescription.data,
});
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  AddPrescription
);
export default connect(mapStateToProps, { postPrescription, getPrescription })(
  WrappedNormalLoginForm
);
