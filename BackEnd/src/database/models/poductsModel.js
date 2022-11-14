module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
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

  return Products;
};
