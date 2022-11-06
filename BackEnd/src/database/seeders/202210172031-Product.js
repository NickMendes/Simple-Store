module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [{
        id: 1212,
        name: 'Pochita de Pelúcia',
        price: 75.00,
        description: 'Personagem Pochita do anime Chainsaw Man de pelúcia',
        url: 'https://http2.mlstatic.com/D_NQ_NP_833737-CBT49896750034_052022-O.jpg',
      },
      {
        id: 1213,
        name: 'Liquidificador',
        price: 530.00,
        description: 'Ele liquidifica as coisas',
        url: 'https://images-americanas.b2w.io/produtos/01/00/img/132774/8/132774825_1GG.jpg',
      },
      {
        id: 1214,
        name: 'Pistola de massagem',
        price: 1200.00,
        description: 'Pistola pneumática de massagem',
        url: 'https://cdn.leroymerlin.com.br/products/massageador_pistola_5_velocidades_corporal_bateria_recarregav_1567015300_f737_600x600.jpg',
      },
      {
        id: 1215,
        name: 'iPhone 12 Mini',
        price: 2750.10,
        description: 'Memória de 128GB e um processador bala',
        url: 'https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_12_purple-full-product-front-600.png',
      },
      {
        id: 1216,
        name: 'PlayStation 2',
        price: 2499.99,
        description: 'PlayStation! PlayStation! PlayStation!',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PlayStation_2.png/800px-PlayStation_2.png',
      },
      {
        id: 1217,
        name: 'Manga Tokyo Revengers',
        price: 2499.87,
        description: 'Historia de um menino que volta no tempo pra salvar a menina que ele',
        url: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/973/807/products/0411-cf2004b806bb0be79215955174286125-640-0.jpg',
      },
      {
        id: 1218,
        name: 'Melancia',
        price: 18.75,
        description: 'Melancia a fruta',
        url: 'https://www.mundoboaforma.com.br/wp-content/uploads/2016/01/melancia-cortada-na-tabua.jpg',
      },
      {
        id: 1219,
        name: 'Fantasia de Halloween',
        price: 110.00,
        description: 'Roupinha de bruxa para crianças de 1-5 anos',
        url: 'https://m.media-amazon.com/images/I/616aomLJs+L._AC_SX522_.jpg',
      },
      {
        id: 1220,
        name: 'Cartela de adesivos',
        price: 9.99,
        description: 'Cartela de adesivos ridiculos para se pregar no carro',
        url: 'https://cf.shopee.com.br/file/495c75963f8f1d97029fde104879b6f3',
      },
      {
        id: 1221,
        name: 'Capa de lençol',
        price: 90.50,
        description: 'Capa de lençol? Cinco reais (vezes 18)',
        url: 'https://http2.mlstatic.com/D_NQ_NP_961258-MLB48408390878_122021-O.jpg',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
