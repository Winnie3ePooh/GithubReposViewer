import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Col } from "antd";

import SearchContext from "context/searchContext";

import { RowWrapper } from "components/Custom/Custom";

import { GET_ALL_REPOS } from "api/queries/queries";

import RepositoryCard from "components/RepositoryCard/RepositoryCard";
import { LoadButton } from "components/Buttons/Buttons";
import ResultMessage from "components/Results/Results";
import LoadingBlock from "components/Loading/Loading";

const reposRow = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 6
};

function RepositoriesPage() {
  const [fetch, setFetch] = useState(false);
  const searchContext = useContext(SearchContext);

  const { data, error, loading, fetchMore } = useQuery(GET_ALL_REPOS, {
    variables: {
      queryString: `is:public archived:false ${searchContext} in:name,description`,
      afterCursor: null,
      notifyOnNetworkStatusChange: true
    }
  });

  const fetchHandler = () => {
    setFetch(true);
    fetchMore({
      variables: {
        afterCursor: data.search.pageInfo.endCursor
      },
      updateQuery: (prev, { fetchMoreResult, ...rest }) => {
        setFetch(false);
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign({}, prev, {
          search: {
            __typename: "SearchResultItemConnection",
            pageInfo: {
              ...fetchMoreResult.search.pageInfo,
              __typename: prev.search.pageInfo.__typename
            },
            edges: [...prev.search.edges, ...fetchMoreResult.search.edges]
          }
        });
      }
    });
  };

  if (loading) {
    return (
      <RowWrapper>
        <LoadingBlock></LoadingBlock>
      </RowWrapper>
    );
  }

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
        {data.search.edges.map(item => {
          const repo = item.node;
          return (
            <Col key={repo.id} className="gutter-row" {...reposRow}>
              <RepositoryCard data={repo} />
            </Col>
          );
        })}
        {data.search.edges.length === 0 && (
          <ResultMessage
            msg={{
              title: "Что-то пошло не так",
              info: "Ничего не найдено",
              type: "warning"
            }}
          ></ResultMessage>
        )}
        {(loading || fetch) && <LoadingBlock></LoadingBlock>}
        <Col span={24} align="center">
          <LoadButton load={fetchHandler} loading={loading} disabled={fetch}>
            Загрузить ещё
          </LoadButton>
        </Col>
      </RowWrapper>
    </>
  );
}

export default RepositoriesPage;
