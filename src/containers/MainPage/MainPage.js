import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";

import routes from "appRoutes/routes";

import SearchContext from "context/searchContext";
import Navigation from "components/Navigation/Navigation";

const { Header, Footer, Content } = Layout;

const MainPage = () => {
  const [searchContext, setSearchContext] = useState("");

  let history = useHistory();

  const searchHandler = val => {
    setSearchContext(val);
    history.push("/");
  };

  return (
    <Layout>
      <Header>
        <Navigation searchHandler={searchHandler} />
      </Header>
      <ContentWrapper>
        <SearchContext.Provider value={searchContext}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </SearchContext.Provider>
      </ContentWrapper>
      <Footer style={{ textAlign: "center" }}>Maksim Stepanov © 2019</Footer>
    </Layout>
  );
};

MainPage;

export default MainPage;

const ContentWrapper = styled(Content)`
  padding: 40px;
`;
