Documentação da API

Essa API tem como objetivo listar os produtos a serem renderizados no site da lojinha avulsa

Paths:
 Para visualizar todos os produtos - GET '/product';
 Para visualizar apenas um produto - GET 'product/{id do produto}';
 Para criar um produto - POST '/product' (seu body deve ter "name", "price", "description" e "url");
 Para atualizar um produto - PUT '/product/{id do produto}' (seu body deve ter "name", "price", "description" e "url");
 Para deletar um produto - GET 'product/{id do produto}';
 
 