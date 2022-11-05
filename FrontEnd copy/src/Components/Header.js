import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../imagens/logo.jpg';
import GlobalContext from '../contex/GlobalContext';

function Header() {
  const {
    nameState,
    itensCarrinho,
  } = useContext(GlobalContext);

  return(
    <header className='header-all'>
      <Link to="/">
        <img src={Logo} alt="Logo Lojinha" className='lojinha-logo'/>
      </Link>
      
      <h1 className='h1'>Lojinha Avulsa</h1>

      {nameState ? (
        <div className='header-login-done'>
          <h3>{nameState}</h3>
          <Link to="/cart">
            <button
              type='button'
              className='btn btn-secondary'
            >{`Carrinho ${itensCarrinho}`}</button>
          </Link>
          <Link to="/profile">
            <button
              type='button'
              className='btn btn-secondary'
            > Meu Perfil </button>
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
