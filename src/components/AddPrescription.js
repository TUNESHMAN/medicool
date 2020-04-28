import React, { useState } from "react";
import { Form, Icon, Input, Button, DatePicker } from "antd";
import "./form.css";
import { connect } from "react-redux";
import * as moment from "moment";
import { postPrescription, getPrescription } from "../state/actions/drugAction";

export const AddPrescription = (props) => {
  const dateFormat = "YYYY/MM/DD";
  const [start_Date, setStart_Date] = useState([moment(), moment()]);
  const [end_Date, setEnd_Date] = useState([moment(), moment()]);

  const handleStart = (value) => {
    setStart_Date(value);
  };
  const handleEnd = (value) => {
    setEnd_Date(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      const prescriptionPayload = {
        drug: values.drug,
        unit: values.unit,
        start_Date: start_Date.format(dateFormat),
        end_Date: end_Date.format(dateFormat),
      };
      console.log(`clicked`, prescriptionPayload);
      if (!err) {
        props.postPrescription(prescriptionPayload);
        props.toggleModal();
        props.getPrescription();
      } else {
        console.log(err);
      }
    });
  };
  const { getFieldDecorator } = props.form;
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
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.25)" }} />
            }
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
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            placeholder="How many tea or tablespoons?"
          />
        )}
      </Form.Item>
      <Form.Item name="start_Date" placeholder="Start">
        {getFieldDecorator("start_Date", {
          //rules are for the form validation
          rules: [
            { required: true, message: "When will this medication start?" },
            {
              type: "object",
              message: "Date is not valid",
            },
          ],
        })(
          <DatePicker
            name="start_Date"
            setFieldsValue={moment(start_Date, dateFormat)}
            format={dateFormat}
            onChange={handleStart}
          />
        )}
      </Form.Item>
      <Form.Item name="end_Date" placeholder="End">
        {getFieldDecorator("end_Date", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please enter an end date" },
            {
              type: "object",
              message: "Invalid email",
            },
          ],
        })(
          <DatePicker
            name="end_Date"
            setFieldsValue={moment(end_Date, dateFormat)}
            format={dateFormat}
            onChange={handleEnd}
          />
        )}
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
