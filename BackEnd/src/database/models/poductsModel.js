module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Products',
  });

  return Product;
};
