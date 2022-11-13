import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [apiAll, setApiAll] = useState([]);
  const [att, setAtt] = useState(true);

  const contextValues = {
    apiAll,
    setApiAll,
    att,
    setAtt,
  }

  return(
    <GlobalContext.Provider value={ contextValues }>
      {children}
    </GlobalContext.Provider>
  )
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
