import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, InputNumber } from "antd";
import "./form.css";
import { connect } from "react-redux";
import { addFormula } from "../state/actions/drugAction";
import axios from "axios";
const Addformula = (props) => {
  const prescription_id = props.medId;
  // console.log("moved", prescription_id);
  // console.log(props);
  const [dose, setDose] = useState("");
  const [times, setTimes] = useState("");
  const handleDose = (value) => {
    setDose(value);
  };
  const handleTimes = (value) => {
    setTimes(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      const formulaPayload = {
        // prescription_id: prescription_id,
        frequency: values.frequency,
        dose: dose.toString(),
        number_of_times: times,
        duration: values.duration,
        before_after_meal: values.before,
      };
      if (!err) {
        props.addFormula(formulaPayload,prescription_id);
        console.log("payload >> ", formulaPayload);
        props.toggleFormula(prescription_id);
      } else {
        console.log("error", err);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("frequency", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please input an email!" },
            {
              type: "string",
              message: "How often will you use this drug?",
            },
          ],
        })(
          <Input
            name="frequency"
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Frequency"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator(
          "dose",
          {}
        )(
          <InputNumber
            name="dose"
            min={1}
            max={12}
            setFieldsValue={dose}
            onChange={handleDose}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="dose"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator(
          "times",
          {}
        )(
          <InputNumber
            name="Times"
            min={1}
            max={12}
            // type="password"
            setFieldsValue={times}
            onChange={handleTimes}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Number of times daily"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator(
          "duration",
          {}
        )(
          <Input
            name="duration"
            type="string"
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="How long?"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("before", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Before or after meal" },
            {
              type: "string",
              message: "For how long?",
            },
          ],
        })(
          <Input
            name="before_after_meal"
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Before or after meal?"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add this formula
        </Button>
      </Form.Item>
    </Form>
  );
};
const mapStateToProps = (state) => ({
  formula: state.prescription.data,
  newFormula: state.prescription.data,
});
export const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  Addformula
);
export default connect(mapStateToProps, { addFormula })(WrappedNormalLoginForm);
