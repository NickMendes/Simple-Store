import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  const handleClick = async () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (name.length <= 12) {
      setErrorMessage('Favor colocar nome e sobrenome');
      setShowError(true);
    } else if (!regexEmail.test(email)) {
      setErrorMessage('Email inválido');
      setShowError(true);
    } else if (password.length <= 7) {
      setErrorMessage('Senha fraca. Ela deve ter no mínimo 8 caracteres.');
      setShowError(true);
    } else {
      try {
        const url = 'http://localhost:3002/user';
        const userData = { name, email, password };
        const userAPI = await axios.post(url, { data: { userData } });
        const user = JSON.stringify(userAPI.data);
        localStorage.setItem('user', user);
        history.push('/');
      } catch (error) {
        setErrorMessage('Usuário já cadastrado');
        setShowError(true);
      }
    }
  };

  return (
    <div className="login-all">
      <h1>Cadatro</h1>
      <div className="input-group mb-3 input-login">
        <span className="input-group-text" id="basic-addon1">Nome</span>
        <input
          data-testid="input-name"
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={ ({ target }) => setName(target.value) }
        />
      </div>

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

      { showError && (
        <h3>{ errorMessage }</h3>
      ) }
    
    </div>
  );
}

export default Cadastro;
