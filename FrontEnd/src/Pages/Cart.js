import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css';
import GlobalContext from '../contex/GlobalContext';

function Cart() {
  const {att, setAtt} = useContext(GlobalContext);

  const history = useHistory();

  const [cartRender, setCartRender] = useState([]);

  useEffect(() => {
    const getCartItens = () => {
      const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
      setCartRender(cartLS);
    };

    getCartItens();
  }, [att])

  const handleRemoveButton = (id) => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
    const cartFiltered = cartLS.filter((ele) => ele.id !== id);

    localStorage.setItem('cart', JSON.stringify(cartFiltered));
    setAtt(!att);
  };

  const handleBuyButton = () => {
    if (cartRender.length !== 0) {
      console.log(cartRender);
      history.push('/aquisition');
    } else {
      window.alert('Não há nada no seu carrinho para ser comprado');
    }
  };

  return (
    <div className="div-all">
      <Header />
      
      <main className="cart-all pages">
        <h1>Seu carrinho:</h1>
        { cartRender.map((ele, index) => (
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
                  <span>{ `Quantidade: ${ele.qty}` }</span>
                  <br />
                  <span>{ `Valor Unitário: R$ ${ele.price.replace('.', ',')}` }</span>
                  <br />
                  {ele.qty !== 1 && (
                    <span>{ `Valor Total: R$ ${(ele.price * ele.qty).toFixed(2).replace('.', ',')}` }</span>
                  )}
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
