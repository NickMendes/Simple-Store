import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const checkLogin = () => {
      const login = localStorage.getItem('user');
      if (login) {
        history.push('/');
      }
    };

    checkLogin();
  }, [history]);

  const handleClick = async () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(email)) {
      setErrorMessage('Email inválido');
      setShowError(true);
    } else if (password.length <= 7) {
      setErrorMessage('Senha fraca. Ela deve ter no mínimo 8 caracteres.');
      setShowError(true);
    } else {
      try {
        const url = 'http://localhost:3002/user/email';
        const userAPI = await axios.post(url, { data: { email, password } });
        const user = JSON.stringify(userAPI.data);
        localStorage.setItem('user', user);
        history.push('/');
      } catch (error) {
        setErrorMessage('Usuário não cadastrado');
        setShowError(true);
      }
    }
  };

  return (
    <div className="login-all">
      <h1>Login</h1>

      <div className="input-group mb-3 input-login">
        <span className="input-group-text" id="basic-addon1">Email</span>
        <input
          data-testid="input-email"
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </div>

      <div className="input-group mb-3 input-login">
        <span className="input-group-text" id="basic-addon1">Senha</span>
        <input
          data-testid="input-password"
          type="password"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </div>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={ handleClick }
      >
        Entrar
      </button>
      < br/>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={ () => history.push('/cadastro') }
      >
        Cadastrar Novo Cliente
      </button>

      { showError && (
        <h3>{ errorMessage }</h3>
      ) }
    
    </div>
  );
}

export default Login;
