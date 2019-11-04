import React from "react";
import styled from "styled-components";
import { Col, Icon } from "antd";

const IconLink = ({ src, text, type }) => (
  <StyledLink href={src} target="_blank" disabled={!src}>
    <Icon type={type}></Icon>
    {text}
  </StyledLink>
);

const LinksRow = ({ links }) => (
  <StyledRow className="contentLink">
    {links.map((link, id) => (
      <IconLink key={id} src={link.url} text={link.text} type={link.type} />
    ))}
  </StyledRow>
);

export default LinksRow;

const StyledRow = styled(Col)`
  margin: 10px 0;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled.a`
  margin-right: 20px;
  font-size: 20px;

  & > i {
    margin-right: 5px;
  }

  @media (max-width: 700px) {
    margin-right: 0;
  }
`;
