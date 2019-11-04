import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Row, Col, Icon, Input } from "antd";
import styled from "styled-components";

import { NAV_SPANS } from "utils/constants";

const { Search } = Input;

const Navigation = ({ searchHandler }) => {
  return (
    <Col span={24}>
      <Row theme="dark" type="flex" justify="center">
        <Col {...NAV_SPANS}>
          <StyledLink to="/">
            <Icon type="home" />
            Home
          </StyledLink>
        </Col>
        <Col span={10}>
          <Search
            placeholder="Поиск по названию"
            onSearch={value => searchHandler(value)}
            size="large"
          />
        </Col>
      </Row>
    </Col>
  );
};

export default withRouter(Navigation);

const StyledLink = styled(Link)`
  & > i {
    margin: 0 10px;
  }
`;
