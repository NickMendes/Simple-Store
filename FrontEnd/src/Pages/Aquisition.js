import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Aquisition() {
  const history = useHistory();
  
  const [totalState, setTotalState] = useState(0);
  const [isAble, setIsAble] = useState(true);
  const [aquiRender, setAquiRender] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const calcTotal = () => {
      const aquiItens = JSON.parse(localStorage.getItem('aquisition')) || [];
      setAquiRender(aquiItens);
      const total = aquiItens.reduce((acc, cur) => Number(acc) + Number(cur.price * cur.qty), 0);
      setTotalState(total);
    };

    const getName = () => {
      const userLS = JSON.parse(localStorage.getItem('user'));
      setUser(userLS);
    };

    getName();
    calcTotal();
  }, []);

  const handleEndButton = () => {
    console.log('comprado');
    history.push('/');
  };

  const handleArquivo = (valor) => {
    if (valor === '' || undefined) {
      setIsAble(true);
    } else {
      setIsAble(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="aqui-all">
        <div>
          <h2>Produtos sendo comprados:</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Valor Total</th>
              </tr>
            </thead>
            <tbody>
                { aquiRender.map((ele) => (
                <tr key={ ele.id }>
                  <th>{ ele.name }</th>
                  <th>{ ele.qty }</th>
                  <th>{ `R$ ${ele.price.replace('.', ',')}` }</th>
                  <th>{ `R$ ${(ele.price * ele.qty).toFixed(2).replace('.', ',')}` }</th>
                </tr>
              )) }
            </tbody>
          </table>
        <h3>{ `Total: R$ ${totalState.toFixed(2).replace('.', ',')}` } </h3>
        </div>
        
        <div>
          <h2>Confirme seus dados:</h2>
          <div className="input-group mb-3 input-login">
            <span className="input-group-text" id="basic-addon1">Nome</span>
            <input 
              type="text"
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              defaultValue={ user.name }
            />
          </div>
          <div className="input-group mb-3 input-login">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input
              type="text"
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              defaultValue={ user.email }
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">Documento pessoal com foto</label>
            <input
              type="file"
              className="form-control"
              id="inputGroupFile01"
              onChange={ ({ target }) => handleArquivo(target.value) }
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={ handleEndButton }
          disabled={ isAble }
        >
          Finalizar Compra
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Aquisition;
