import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, InputNumber, Select } from "antd";
import "./form.css";
import { connect } from "react-redux";
import { addFormula } from "../state/actions/drugAction";

const { Option } = Select;

const Addformula = (props) => {
  const prescription_id = props.medId;

  const [dose, setDose] = useState("");
  const [times, setTimes] = useState("");
  const [before, setBefore] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleDose = (value) => {
    setDose(value);
  };

  const handleFrequency = (value) => {
    setFrequency(value);
  };

  const handleSelectChange = (value) => {
    setBefore(value);
  };
  const handleTimes = (value) => {
    setTimes(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      const formulaPayload = {
        frequency: frequency,
        dose: dose.toString(),
        number_of_times: times,
        duration: values.duration,
        before_after_meal: before,
      };
      if (!err) {
        props.addFormula(formulaPayload, prescription_id);
        props.toggleFormula(prescription_id);
      } else {
      }
    });
  };
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some((field) => fieldsError[field]);
  }
  const {
    getFieldDecorator,
    getFieldsError,
    validateFields,
    isFieldTouched,
    getFieldError,
  } = props.form;
  useEffect(() => {
    validateFields();
  }, [validateFields]);

  const frequencyError =
    isFieldTouched("frequency") && getFieldError("frequency");
  const doseError = isFieldTouched("dose") && getFieldError("dose");
  const timesError = isFieldTouched("times") && getFieldError("times");
  const durationError = isFieldTouched("duration") && getFieldError("duration");
  const beforeError = isFieldTouched("before") && getFieldError("before");
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item
        name="frequency"
        validateStatus={frequencyError ? "error" : ""}
        hasFeedback
        help={frequencyError || ""}
      >
        {getFieldDecorator("frequency", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please, choose frequency" },
            {
              type: "string",
              message: "How often will you use this drug?",
            },
          ],
        })(
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Frequency"
            optionFilterProp="children"
            onChange={handleFrequency}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="hourly">hourly</Option>
            <Option value="daily">daily</Option>
            <Option value="weekly">weekly</Option>
            <Option value="monthly">monthly</Option>
            <Option value="quarterly">quarterly</Option>
            <Option value="yearly">yearly</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item
        name="dose"
        validateStatus={doseError ? "error" : ""}
        hasFeedback
        help={doseError || ""}
      >
        {getFieldDecorator("dose", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please, enter dose!" },
            {
              type: "number",
              message: "Input the quantity?",
            },
          ],
        })(
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
      <Form.Item
        name="times"
        validateStatus={timesError ? "error" : ""}
        hasFeedback
        help={timesError || ""}
      >
        {getFieldDecorator("times", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please, enter number of times!" },
            {
              type: "number",
              message: "How many times?",
            },
          ],
        })(
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
      <Form.Item
        name="duration"
        validateStatus={durationError ? "error" : ""}
        hasFeedback
        help={durationError || ""}
      >
        {getFieldDecorator("duration", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please, choose duration" },
            {
              type: "string",
              message: "What is the duration of use?",
            },
          ],
        })(
          <Input
            name="duration"
            type="string"
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={
              <Icon type="clock-circle" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            placeholder="Duration - e.g 1 month, 3 years etc."
          />
        )}
      </Form.Item>
      <Form.Item
        name="before"
        validateStatus={beforeError ? "error" : ""}
        hasFeedback
        help={beforeError || ""}
      >
        {getFieldDecorator("before", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Before or after meal?" },
            {
              type: "string",
              message: "For how long?",
            },
          ],
        })(
          <Select
            style={{ width: 200 }}
            placeholder="Before or after meal?"
            optionFilterProp="children"
            onChange={handleSelectChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="before meal">before meal</Option>
            <Option value="after meal">after meal</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          disabled={hasErrors(getFieldsError())}
        >
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
