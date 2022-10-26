import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [apiAll, setApiAll] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [aquiItens, setAquiItens] = useState([]);
  const [boughtItens, setBoughtItens] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState(0);

  const contextValues = {
    apiAll,
    setApiAll,
    cartItens,
    setCartItens,
    nameState,
    setNameState,
    emailState,
    setEmailState,
    aquiItens,
    setAquiItens,
    boughtItens,
    setBoughtItens,
    itensCarrinho,
    setItensCarrinho,
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
