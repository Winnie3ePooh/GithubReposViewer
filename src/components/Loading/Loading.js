import React from "react";
import { Col, Spin, Icon } from "antd";

import { RowWrapper } from "components/Custom/Custom";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const LoadingBlock = () => (
  <Col span={24} align="center">
    <Spin indicator={antIcon} />
  </Col>
);

export default LoadingBlock;
