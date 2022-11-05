import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import GlobalContext from '../contex/GlobalContext';

function Product () {
  const history = useHistory();

  const {
    apiAll,
    itensCarrinho,
    setItensCarrinho,
    setCartItens,
    cartItens,
    nameState,
  } = useContext(GlobalContext);
  
  const [prodState, setProdState] = useState([]);
  
  const params = useParams();
  const id = Object.values(params)[0];

  
  useEffect(() => {
    const getProduct = () => {
      const product = apiAll.filter((ele) => ele.id === Number(id));
      setProdState(product);
    }

    getProduct();
  }, [id, apiAll]);
  
  const handleBuyButton = (item) => {
    if (nameState === '') {
      window.alert("Faça login para poder colocar itens no carrinho");
    } else {
    setItensCarrinho(itensCarrinho + 1);
    setCartItens([...cartItens, {...item, qty: 1}]);
    history.push('/cart');
    }
  }

  return (
    <div>
      <Header />
      {prodState.map((ele) => (
        <div key={ele.id} className="prod-all">
          <img src={ele.url} alt={ele.name} />
          <div>
            <h1>{ele.name}</h1>
            <h2>{`R$: ${ele.price},00`}</h2>
            <h3>{ele.description}</h3>

            <br></br>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={ () => handleBuyButton(ele) }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Product;
