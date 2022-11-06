import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../imagens/logo.jpg';
import GlobalContext from '../contex/GlobalContext';

function Header() {
  const {
    itensCarrinho,
  } = useContext(GlobalContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getName = () => {
      const userData = localStorage.getItem('user');
      const username = JSON.parse(userData);
      setUser(username.name);
    };

    getName();
  }, []);

  return(
    <header className='header-all'>
      <Link to="/">
        <img src={Logo} alt="Logo Lojinha" className='lojinha-logo'/>
      </Link>
      
      <h1 className='h1'>Lojinha Avulsa</h1>

      {user ? (
        <div className='header-login-done'>
          <Link to="/cart">
            <button
              type='button'
              className='btn btn-secondary'
            >
              {`Carrinho ${itensCarrinho}`}
            </button>
          </Link>
          <Link to="/profile">
            <button
              type='button'
              className='btn btn-secondary'
            >
              { user }
            </button>
          </Link>
        </div>
      ) : (
      <div className='header-login'>
        <Link to="/login">
          <button className='btn btn-dark'>Login</button>
        </Link>
      </div>
      )}
    </header>
  )
}

export default Header;
