import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import GlobalContext from '../contex/GlobalContext';

function Aquisition() {
  const history = useHistory();

  const {
    aquiItens,
    boughtItens,
    setBoughtItens,
    setAquiItens,
    setCartItens,
    nameState,
    emailState,
    setItensCarrinho,
  } = useContext(GlobalContext);
  
  const [totalState, setTotalState] = useState('');
  const [isAble, setIsAble] = useState(true);

  useEffect(() => {
    const calcTotal = () => {
      const total = aquiItens.reduce((a, b) => Number(a) + Number(b.price), 0);
      setTotalState(total);
    }
    calcTotal();
  }, [aquiItens]);

  const handleEndButton = async () => {
    await setBoughtItens([...boughtItens, ...aquiItens]);
    setAquiItens([]);
    setCartItens([]);
    setItensCarrinho(0);
    history.push('/');
  }

  const handleArquivo = (valor) => {
    if (valor === '' || undefined) {
      setIsAble(true);
    } else {
      setIsAble(false);
    }
  }

  return (
    <div>
      <Header />
      <div className="main-all">
        <div className="aqui-all">
          <div>
            <h2>Produtos sendo comprados:</h2>
            {aquiItens.map((ele) => (
            <div key={ele.id}>
              <p>{`${ele.name} - R$ ${ele.price},00`}</p>
            </div>
          ))}
          <h3>{`Total: R$ ${totalState},00`} </h3>
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
                value={nameState}
              />
            </div>
            <div className="input-group mb-3 input-login">
              <span className="input-group-text" id="basic-addon1">Email</span>
              <input
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={emailState}
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="inputGroupFile01">Documento pessoal com foto</label>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                onChange={({ target }) => handleArquivo(target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleEndButton}
            disabled={isAble}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aquisition;
