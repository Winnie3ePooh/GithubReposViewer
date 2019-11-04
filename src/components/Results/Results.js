import React from "react";
import { Col, Result } from "antd";

const ResultMessage = ({ msg }) => (
  <Col span={24} align="center">
    <Result status={msg.type} title={msg.title} subTitle={msg.info}></Result>
  </Col>
);

export default ResultMessage;
