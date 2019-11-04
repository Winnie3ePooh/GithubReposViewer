import React from "react";
import RepositoriesPage from "containers/RepositoriesPage/RepositoriesPage";
import RepositoryPage from "containers/RepositoryPage/RepositoryPage";

const routes = [
  {
    id: 0,
    text: "Main page",
    path: "/",
    exact: true,
    main: () => <RepositoriesPage></RepositoriesPage>
  },
  {
    id: 1,
    text: "Current Project",
    path: "/repository/:id",
    main: props => <RepositoryPage {...props} />
  }
];

export default routes;
