import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPrescription } from "../state/actions/drugAction";
import { Card, Avatar } from 'antd';
import logo from "../images/mediool.png";
import { PlusOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
// import "./form.css";

const { Meta } = Card;

function Prescription(props) {
  console.log(props);
//   const [loading, setLoading] = useState(true)

//  const  onChange = checked=>{
//     setLoading({loading: !checked})
//   }
  useEffect(() => {
    props.getPrescription();
  }, []);

 
  return (
    <div>
      <h1>Prescription</h1>

      <div>
      {/* <Switch checked={!loading} onChange={onChange} /> */}
        {props.prescription.map((med, index) => (
          <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[
              <PlusOutlined key="plus" />,
              <EyeOutlined key="eye" />,
              <DeleteOutlined key="delete" />
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
    </div>
  );
}

const mapStateToProps = state => ({
  prescription: state.prescription.drugs
});

export default connect(mapStateToProps, { getPrescription })(Prescription);
