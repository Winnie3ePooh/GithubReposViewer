import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Row, Col, Statistic, Icon } from "antd";

import { timeFormatter } from "utils/utils";
import { INFO_ROW_SPANS } from "utils/constants";

import LinksRow from "components/Repository/LinksRow";
import TimeAgo from "containers/TimeAgoWidget/TimeAgo";

const InfoRow = ({ data }) => {
  const links = [
    { text: "Github", url: data.url, type: "github" },
    { text: "Владелец", url: data.owner.url, type: "contacts" },
    { text: "Домашняя страница", url: data.homepageUrl, type: "home" }
  ];

  return (
    <>
      <ContentRowWrapper type="flex">
        <DescriptionWrapper>{data.description}</DescriptionWrapper>
      </ContentRowWrapper>
      <ContentRowWrapper gutter={16}>
        <ColWrapper {...INFO_ROW_SPANS}>
          <Statistic
            title="Дата создания"
            value={timeFormatter(data.createdAt)}
            prefix={<Icon type="calendar" />}
          />
        </ColWrapper>
        <ColWrapper {...INFO_ROW_SPANS}>
          <Statistic
            title="Последний пуш"
            value={timeFormatter(data.pushedAt)}
            prefix={<Icon type="history" />}
          />
        </ColWrapper>
        <ColWrapper {...INFO_ROW_SPANS}>
          <Statistic
            title="Последнее обновление"
            formatter={() => (
              <TimeAgo time={data.updatedAt}>
                <Icon type="cloud-sync" />
              </TimeAgo>
            )}
          />
        </ColWrapper>
        <ColWrapper {...INFO_ROW_SPANS}>
          <Statistic
            title="Число форков"
            value={data.forkCount}
            prefix={<Icon type="fork" />}
          />
        </ColWrapper>
      </ContentRowWrapper>
      <ContentRowWrapper>
        <LinksRow links={links}></LinksRow>
      </ContentRowWrapper>
    </>
  );
};

export default InfoRow;

const DescriptionWrapper = styled.div`
  font-size: 18px;
`;

const ContentRowWrapper = styled(Row)`
  border-top: 1px solid #d1d1d1;
  margin-bottom: 25px;
  padding-top: 25px;
`;

const ColWrapper = styled(Col)`
  @media (max-width: 1199px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
