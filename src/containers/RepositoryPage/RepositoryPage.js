import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { GET_REPO_BY_ID } from "api/queries/queries";

import { Col, PageHeader, Skeleton, Descriptions } from "antd";
import { RowWrapper } from "components/Custom/Custom";
import InfoRow from "components/Repository/InfoRow";
import ResultMessage from "components/Results/Results";

function RepositoryPage({ match }) {
  let history = useHistory();

  const { data, error, loading } = useQuery(GET_REPO_BY_ID, {
    variables: { id: match.params.id }
  });

  if (error) {
    return (
      <ResultMessage
        msg={{
          title: "Что-то пошло не так",
          info: error.message,
          type: "error"
        }}
      ></ResultMessage>
    );
  }

  return (
    <>
      <RowWrapper gutter={[16, 16]} type="flex">
        <Col span={24}>
          <PageHeader
            ghost={false}
            onBack={() => history.goBack()}
            title="Back"
          />
        </Col>
        {loading ? (
          <Col span={24}>
            <Skeleton loading={loading} active avatar></Skeleton>
          </Col>
        ) : (
          <Col span={24}>
            <PageHeader
              title={data.node.name}
              style={{
                border: "1px solid rgb(235, 237, 240)"
              }}
              avatar={{
                src: data.node.owner.avatarUrl
              }}
            >
              <Descriptions size="small" column={3}>
                <Descriptions.Item label="Автор">
                  {data.node.owner.login}
                </Descriptions.Item>
              </Descriptions>
              <Col span={24}>
                <InfoRow data={data.node}></InfoRow>
              </Col>
            </PageHeader>
          </Col>
        )}
      </RowWrapper>
    </>
  );
}

export default RepositoryPage;
