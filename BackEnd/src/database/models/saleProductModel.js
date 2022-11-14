module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    saleId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
      field: 'sale_id'
    },
    productId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
      field: 'product_id',
    },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'sales_products',
  });

  SalesProduct.associate = (models) => {
    models.Products.belongsToMany(models.Sales, { 
      as: 'sale',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });

    models.Sales.belongsToMany(models.Products, {
      as: 'product',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  };

  return SalesProduct;
};
