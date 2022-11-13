import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Product () {
  const history = useHistory();
  
  const [user, setUser] = useState(null);
  const [prodState, setProdState] = useState({});
  
  const params = useParams();
  const id = Object.values(params)[0];

  
  useEffect(() => {
    const getUser = () => {
      const userLS = JSON.parse(localStorage.getItem('user'));
      setUser(userLS);
    };

    getUser();
  }, [])

  useEffect(() => {
    const getProduct = async () => {
      const productAPI = await axios.get(`http://localhost:3002/product/${id}`);
      const product = productAPI.data;
      setProdState(product);
    };

    getProduct();
  }, [id]);

  const handleBuyButton = ({ id, name, price, url }) => {
    if (!user) {
      window.alert('Faça login para poder colocar itens no carrinho');
    } else {
      const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
      const cartFiltered = cartLS.filter((ele) => ele.id !== id);
      const itemQty = cartLS.filter((ele) => ele.id === id);
      console.log(itemQty.qty);
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
    <div>
      <Header />
      <div key={ prodState.id } className="prod-all pages">
        <img src={ prodState.url } alt={ prodState.name } className="img-about"/>
        <div>
          <h1>{ prodState.name }</h1>
          <h2>{ `R$: ${prodState.price}` }</h2>
          <h3>{ prodState.description }</h3>

          <br></br>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={ () => handleBuyButton(prodState) }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
