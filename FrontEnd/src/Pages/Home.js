import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import GlobalContext from '../contex/GlobalContext';
import Header from '../Components/Header'
import './Home.css'
import Footer from '../Components/Footer';

function Home () {
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
      // const url = "http://localhost:3002/product";
      // const result = await fetch(url).then((response) => response.json());

      const fakeAPI = [{
        id: 1212,
        name: 'Pochita de Pelúcia',
        price: 75,
        description: 'Personagem Pochita do anime Chainsaw Man de pelúcia',
        url: 'https://http2.mlstatic.com/D_NQ_NP_833737-CBT49896750034_052022-O.jpg',
      },
      {
        id: 1213,
        name: 'Liquidificador',
        price: 530,
        description: 'Ele liquidifica as coisas',
        url: 'https://images-americanas.b2w.io/produtos/01/00/img/132774/8/132774825_1GG.jpg',
      },
      {
        id: 1214,
        name: 'Pistola de massagem',
        price: 1200,
        description: 'Pistola pneumática de massagem',
        url: 'https://cdn.leroymerlin.com.br/products/massageador_pistola_5_velocidades_corporal_bateria_recarregav_1567015300_f737_600x600.jpg',
      },
      {
        id: 1215,
        name: 'iPhone 12 Mini',
        price: 2750,
        description: 'Memória de 128GB e um processador bala',
        url: 'https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_12_purple-full-product-front-600.png',
      },
      {
        id: 1216,
        name: 'PlayStation 2',
        price: 2500,
        description: 'PlayStation! PlayStation! PlayStation!',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PlayStation_2.png/800px-PlayStation_2.png',
      },
      {
        id: 1217,
        name: 'Manga Tokyo Revengers',
        price: 2500,
        description: 'Historia de um menino que volta no tempo pra salvar a menina que ele gada',
        url: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/973/807/products/0411-cf2004b806bb0be79215955174286125-640-0.jpg',
      },
      {
        id: 1218,
        name: 'Melancia',
        price: 18,
        description: 'Melancia a fruta',
        url: 'https://www.mundoboaforma.com.br/wp-content/uploads/2016/01/melancia-cortada-na-tabua.jpg',
      },
      {
        id: 1219,
        name: 'Fantasia de Halloween',
        price: 110,
        description: 'Roupinha de bruxa para crianças de 1-5 anos',
        url: 'https://m.media-amazon.com/images/I/616aomLJs+L._AC_SX522_.jpg',
      },
      {
        id: 1220,
        name: 'Cartela de adesivos',
        price: 9,
        description: 'Cartela de adesivos ridiculos para se pregar no carro',
        url: 'https://cf.shopee.com.br/file/495c75963f8f1d97029fde104879b6f3',
      },
      {
        id: 1221,
        name: 'Capa de lençol',
        price: 90,
        description: 'Capa de lençol? Cinco reais (vezes 18)',
        url: 'https://http2.mlstatic.com/D_NQ_NP_961258-MLB48408390878_122021-O.jpg',
      },]
      setUsingApi(fakeAPI);
      setApiAll(fakeAPI);
   }
    getApiAll();
  }, []);

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
    setUsingApi(result)
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
    <div className='div-all'>
      <Header />
      
      <section className='section-home'>
        <div className='input-group mb-3'>
          <label className='input-group-text'>Pesquisa:</label>
          <input 
            onChange={({ target }) => handleSearch(target.value)}
            className='form-control' />
        </div>

        <div className='section-home-btns'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={ handleAlfButton  }  
          >
            Alfabético
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={ handleValButton }  
          >
            Preço
          </button>
        </div>
      </section>

      <main className='main-all'>
        {usingApi.map((ele, index) => (
          <div key={ele.id} className='main-prod-all'>
            <div className='main-prod-uni'>
              <img src={ele.url} alt={ele.name} className='photo-product'/>
              <div>
                <h2>{ele.name}</h2>
                <h3>{`R$: ${ele.price},00`}</h3>
              </div>
            </div>
            <div className='main-btns'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => { history.push(`/product/${ele.id}`)}}
              >
                Saiba Mais
              </button>
              <button
                type='button'
                className='btn btn-secondary'
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
