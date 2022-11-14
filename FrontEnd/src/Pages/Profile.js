import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();

  const [user, setUser] = useState(null);
  const [salesRender, serSalesRender] = useState([]);


  useEffect(() => {
    const getSales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const userEmail = user.email
      setUser(user);
      
      const userIdData = await axios.get(`http://localhost:3002/user/email/${userEmail}`);
      const userId = userIdData.data;

      const salesData = await axios.get(`http://localhost:3002/sale/usersale/${userId}`);
      const sale = salesData.data;
      
      const arr = [];

      sale.forEach((ele) => {
        const date = ele.saleDate.slice(0, 10).split('-').reverse().join('/');

        const render = {
          id: ele.id,
          status: ele.status,
          data: date,
          total: ele.totalPrice,
        };

        arr.push(render);
      });
      serSalesRender(arr);
    };

    getSales();
  }, []);

  const handleSairBtn = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  const handleDeleteBnt = async () => {
    await axios.delete(`http://localhost:3002/user/${user.id}`);
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <div>
      <Header />
      <div className="profile-all">
        <h1>{ `Olá` }</h1>
        <div className="profile-btns">
        <button
            type="button"
            className="btn btn-secondary"
            onClick={ handleSairBtn }
          >
            Sair
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={ handleDeleteBnt }
          >
            Deletar Perfil
          </button>
        </div>


        <h2>Acompanhe seus pedidos:</h2>
        <div className="order-all">
          { salesRender.map((ele, i) => (
            <div className="order-uni" key={ ele.id }>
              <h4>{ `Pedido ${i + 1}` }</h4>
              <span>{ `Data do pedido: ${ele.data}` }</span>
              <span>{ `R$: ${ele.total.replace('.', ',')}` }</span>
              <span>{ ele.status }</span>
            </div>
            ))}
        </div>
      
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
