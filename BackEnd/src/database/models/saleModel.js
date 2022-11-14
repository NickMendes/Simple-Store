module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true, field: 'user_id' },
    totalPrice: { type: DataTypes.INTEGER, field: 'total_price' },
    saleDate: { type: DataTypes.DATE, field: 'sale_date' },
    status: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'Sales',
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' }
    );
  };

  return Sales;
};
