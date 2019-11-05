import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Icon, Avatar, Tooltip } from "antd";

import TimeAgo from "containers/TimeAgoWidget/TimeAgo";

const { Meta } = Card;

const RepositoryCard = ({ data }) => {
  return (
    <CardWrapper
      actions={[
        <Tooltip title="Github">
          <a href={data.url} target="_blank">
            <Icon type="github" key="github" />
          </a>
        </Tooltip>,
        <Tooltip title="Open">
          <Link to={"/repository/" + data.id}>
            <Icon type="export" key="export" />
          </Link>
        </Tooltip>
      ]}
    >
      <Meta
        avatar={
          <Tooltip title={data.owner.login}>
            <Avatar src={data.owner.avatarUrl} />
          </Tooltip>
        }
        title={data.name}
        description={data.description}
      />
      <InfoWrapper>
        <TimeAgo time={data.updatedAt}>Последний апдейт:</TimeAgo>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default RepositoryCard;

const CardWrapper = styled(Card)`
  border: 1px solid #d1d5da;
  border-radius: 3px;
`;

const InfoWrapper = styled.div`
  margin-top: 20px;
`;
