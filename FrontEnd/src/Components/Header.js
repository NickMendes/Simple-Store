import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../contex/GlobalContext';
import Logo from '../imagens/logo.jpg';

function Header() {
  const {att} = useContext(GlobalContext);
  const [user, setUser] = useState(null);
  const [itensQty, setItensQty] = useState(0);

  useEffect(() => {
    const getName = () => {
      const userData = JSON.parse(localStorage.getItem('user')) || {};
        setUser(userData.name);
    };

    const getQty = () => {
      const cartLS = JSON.parse(localStorage.getItem('cart'));
      if (cartLS) {
        const qty = cartLS.reduce((acc, cur) => acc + cur.qty, 0);
        setItensQty(qty);
      } else {
        setItensQty(0);
      }
    };

    getQty()
    getName();
  }, [att]);

  return(
    <header className="header-all">
      <Link to="/">
        <img src={Logo} alt="Logo Lojinha" className="lojinha-logo"/>
      </Link>
      
      <h1 className="h1">Lojinha Avulsa</h1>

      { user ? (
        <div className="header-login-done">
          <Link to="/cart">
            <button
              type="button"
              className="btn btn-secondary"
            >
              { `Carrinho: ${itensQty}` }
            </button>
          </Link>
          <Link to="/profile">
            <button
              type="button"
              className="btn btn-secondary"
            >
              { user }
            </button>
          </Link>
        </div>
      ) : (
      <div className="header-login">
        <Link to="/login">
          <button className="btn btn-dark">Login</button>
        </Link>
      </div>
      ) }
    </header>
  )
}

export default Header;
