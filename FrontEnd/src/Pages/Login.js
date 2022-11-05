import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../contex/GlobalContext';

function Login() {
  const {
    setNameState,
    setEmailState,
   } = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleClick = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(email)) {
      window.alert("Email Inválido");
    }else if (password.length <= 7) {
      window.alert("Senha fraca. Ela deve ter no mínimo 8 caracteres");
    } else {
    setNameState(name);
    setEmailState(email);
    history.push('/');
    }
  };

  return (
    <div className="login-all">
      <h1>Login</h1>

      <div className="input-group mb-3 input-login">
        <span className="input-group-text" id="basic-addon1">Nome</span>
        <input
          data-testid="input-name"
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={({ target }) => setName(target.value)}
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
          onChange={({ target }) => setEmail(target.value)}
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
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <button
        type='button'
        className="btn btn-secondary"
        onClick={handleClick}
      >
        Entrar
      </button>
    
    </div>
  );
}

export default Login;
