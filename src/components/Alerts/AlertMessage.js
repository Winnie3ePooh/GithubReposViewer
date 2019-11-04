import React from "react";
import styled from "styled-components";
import { Col } from "antd";

const AlertMessage = props => (
  <AlertWrapper span={20} offset={2}>
    <h1>Nothing found :(</h1>
  </AlertWrapper>
);

export default AlertMessage;

const AlertWrapper = styled(Col)`
  border: 1px solid #d1d5da;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;

  & > h1 {
    margin: 0;
  }
`;
