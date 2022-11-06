import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import GlobalContext from '../contex/GlobalContext';
import Header from '../Components/Header'
import './Home.css'
import Footer from '../Components/Footer';

function Home() {
  const history = useHistory();

  const {
    apiAll,
    setApiAll,
    cartItens,
    setCartItens,
    nameState,
    itensCarrinho,
    setItensCarrinho
  } = useContext(GlobalContext);
  
  const [usingApi, setUsingApi] = useState([]);

  useEffect(() => {
    const getApiAll = async () => {
      const url = "http://localhost:3002/product";
      const result = await fetch(url).then((response) => response.json());

      setUsingApi(result);
      setApiAll(result);
   }
    getApiAll();
  }, [setApiAll]);

  const handleSearch = (pesquisa) => {
    const result = apiAll.filter((e) => e.name.toLowerCase().indexOf(pesquisa.toLowerCase())> -1);
    setUsingApi(result);
  }

  const handleAlfButton = () => {
    const result = [...apiAll].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    setUsingApi(result);
  }

  const handleValButton = () => {
    const result = [...apiAll].sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
    setUsingApi(result);
  }

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
    <div className="div-all">
      <Header />
      
      <section className="section-home">
        <div className="input-group mb-3">
          <label className="input-group-text">Pesquisa:</label>
          <input 
            onChange={({ target }) => handleSearch(target.value)}
            className="form-control" />
        </div>

        <div className="section-home-btns">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={ handleAlfButton  }  
          >
            Alfabético
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={ handleValButton }  
          >
            Preço
          </button>
        </div>
      </section>

      <main className="main-all">
        {usingApi.map((ele, index) => (
          <div key={ele.id} className="main-prod-all">
            <div className="main-prod-uni">
              <img src={ele.url} alt={ele.name} className="photo-product"/>
              <div>
                <h2>{ele.name}</h2>
                <h3>{`R$: ${ele.price},00`}</h3>
              </div>
            </div>
            <div className="main-btns">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => { history.push(`/product/${ele.id}`)}}
              >
                Saiba Mais
              </button>
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
      </main>

      <Footer />
    </div>
  );
}

export default Home;
