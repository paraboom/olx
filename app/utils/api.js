import React from "react";

const { API_URL } = process.env;

const ApiContext = React.createContext();

const ApiProvider = ({ children }) => {
  const api = {
    get: path => fetch(`${API_URL}${path}`)
      .then(res => res.json()),
    // here we could add all other HTTP methods
  };

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
export { ApiProvider };
