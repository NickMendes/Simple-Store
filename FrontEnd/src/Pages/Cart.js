import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../contex/GlobalContext';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css';

function Cart() {
  const {
    cartItens,
    setCartItens,
    setAquiItens,
    itensCarrinho,
    setItensCarrinho,
  } = useContext(GlobalContext);

  const history = useHistory();

  const handleRemoveButton = (id) => {
    const result = [...cartItens].filter((ele) => ele.id !== id);
    setItensCarrinho(itensCarrinho - 1);
    setCartItens(result);
  }

  const handleBuyButton = () => {
    if (cartItens.length !== 0) {
      setAquiItens(cartItens);
      history.push('/aquisition');
    } else {
      window.alert('Não há nada no seu carrinho para ser comprado');
    }
  };

  return (
    <div className="div-all">
      <Header />
      
      <main className="cart-all">
        <h1>Seu carrinho:</h1>
        { cartItens.map((ele, index) => (
          <div className="cart-prod-all" key={ ele.id }>
            <div className="cart-prod-uni">
              <div className="d-flex">
                <img
                  id={ index }
                  src={ ele.url }
                  alt={ ele.name }
                  className="photo-product-cart"
                />
                <div className="cart-description">
                  <h2>{ ele.name }</h2>
                  <h3>{ `R$: ${ele.price},00` }</h3>
                </div>
              </div>
              <div className="d-flex align-items-end rem-btn">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => handleRemoveButton(ele.id) }
                  >
                    X
                </button>
                <h5>Remover</h5>
              </div>
            </div>
      
          </div>
        )) }
      </main>

      <section className="cart-section">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={ handleBuyButton }
        >
          Finalizar compra
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={ () => history.push('/') }
        >
          Continuar Comprando
        </button>
      </section>
    
      <Footer />
    </div>
  );
}

export default Cart;
