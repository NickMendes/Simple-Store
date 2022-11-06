import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import GlobalContext from '../contex/GlobalContext';

function ProductsCard({ id, name, price, url }) {
  const history = useHistory();

  const {
    cartItens,
    setCartItens,
    itensCarrinho,
    setItensCarrinho,
  } = useContext(GlobalContext);

  const [qty, setQty] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getName = () => {
      const userData = localStorage.getItem('user');
      const username = JSON.parse(userData);
      setUser(username.name);
    };

    getName();
  }, []);

  const handleBuyButton = (name, id, price, url, qty) => {
    const newQty = qty + 1;
    setQty(newQty); 

    if (!user) {
      window.alert('Faça login para poder colocar itens no carrinho');
    } else {
      const prodFiltered = cartItens.filter((ele) => ele.id !== id);
      setItensCarrinho(itensCarrinho + 1);
      setCartItens([...prodFiltered, { id, name, price, url, qty: newQty }]);
      history.push('/cart');
    
    }
  };
  
  return (
    <div key={ id } className="main-prod-all">
      <div className="main-prod-uni">
        <img src={ url } alt={ name } className="photo-product"/>
        <div className="product-title">
          <h2>{ name }</h2>
          <h3>{ `R$: ${price.replace('.', ',')}` }</h3>
        </div>
      </div>
      <div className="main-btns">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={ () => history.push(`/product/${id}`) }
        >
          Saiba Mais
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={ () => handleBuyButton(id, name, price, url, qty) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductsCard;

ProductsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};