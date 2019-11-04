import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "antd";

export const BackButton = ({ children }) => {
  let history = useHistory();
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  );
};

export const LoadButton = ({ load, children, disabled }) => (
  <div>
    <Button type="primary" onClick={load} disabled={disabled}>
      {children}
    </Button>
  </div>
);
