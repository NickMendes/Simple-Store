import React, { useContext } from 'react';
import GlobalContext from '../contex/GlobalContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  const {
    nameState,
    boughtItens,
  } = useContext(GlobalContext);

  const btnNotPossible = () => {
    window.alert("Esse botão ainda não está funcionando, pedimos desculpas pelo inconveniente");
  };

  return (
    <div>
      <Header />
      <div className="profile-all">
        <h1>{ `Olá ${nameState}` }</h1>
        <div className="profile-btns">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={ btnNotPossible }
          >
            Editar Perfil
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={ btnNotPossible }
          >
            Deletar Perfil
          </button>
        </div>


        <h2>Suas assinaturas:</h2>
        <div className="main-all">
          { boughtItens.map((ele) => (
            <div className="main-prod-uni">
              <img src={ ele.url } alt={ ele.name } className="photo-product" />
              <div>
                <h2>{ ele.name }</h2>
                <h4>{ `R$: ${ele.price},00` }</h4>
              </div>
            </div>
            ))}
        </div>
      
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
