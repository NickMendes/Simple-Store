import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductsCard({ id, name, price, url }) {
  const history = useHistory();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getName = () => {
      const userData = JSON.parse(localStorage.getItem('user')) || {};
      setUser(userData.name);
    };

    getName();
  }, []);

  const handleBuyButton = (id, name, price, url) => {
    if (!user) {
      window.alert('Faça login para poder colocar itens no carrinho');
    } else {
      const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
      const cartFiltered = cartLS.filter((ele) => ele.id !== id);
      const itemQty = cartLS.filter((ele) => ele.id === id);
      if (itemQty.length !== 0) {
        const newQty = itemQty[0].qty + 1;
        const newCart = [...cartFiltered, { id, name, price, url, qty: newQty }];
        localStorage.setItem('cart', JSON.stringify(newCart));
        history.push('/cart');
      } else {
        const newCart = [...cartFiltered, { id, name, price, url, qty: 1 }];
        localStorage.setItem('cart', JSON.stringify(newCart));
        history.push('/cart');
      }
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
          onClick={ () => handleBuyButton(id, name, price, url) }
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