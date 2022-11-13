import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../contex/GlobalContext';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css';
import ProductsCard from '../Components/ProductCard';

function Home() {
  const {
    apiAll,
    setApiAll,
  } = useContext(GlobalContext);
  
  const [usingApi, setUsingApi] = useState([]);

  useEffect(() => {
    const getApiAll = async () => {
      const url = "http://localhost:3002/product";
      const result = await fetch(url).then((response) => response.json());

      setUsingApi(result);
      setApiAll(result);
    };

    getApiAll();
  }, [setApiAll]);


  const handleSearch = (pesquisa) => {
    const result = apiAll.filter((e) => e.name.toLowerCase().indexOf(pesquisa.toLowerCase())> -1);
    setUsingApi(result);
  };

  const handleAlfButton = () => {
    const result = [...apiAll].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    setUsingApi(result);
  };

  const handleValButton = () => {
    const result = [...apiAll].sort(function (a, b) {
      if (Number(a.price) > Number(b.price)) {
        return 1;
      } else if (Number(a.price) < Number(b.price)) {
        return -1;
      } else {
        return 0;
      }
    });
    setUsingApi(result);
  };

  return (
    <div className="div-all">
      <Header />
      
      <section className="section-home">
        <div className="input-group mb-3">
          <label className="input-group-text">Pesquisa:</label>
          <input 
            onChange={ ({ target }) => handleSearch(target.value) }
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
        { usingApi.map((ele) => (
          <ProductsCard
            key={ ele.id }
            id={ ele.id }
            name={ ele.name }
            url={ ele.url }
            price={ ele.price }
          />
        )) }
      </main>

      <Footer />
    </div>
  );
}

export default Home;
