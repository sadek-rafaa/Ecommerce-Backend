module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      total_price: DataTypes.DECIMAL(10, 2),
      status: {
        type: DataTypes.ENUM('pending', 'paid', 'shipped', 'delivered'),
        defaultValue: 'pending',
      },
    });
  
    Order.associate = (models) => {
      Order.belongsTo(models.User, { foreignKey: 'userId' });
      Order.hasMany(models.OrderItem);
    };
  
    return Order;
  };
  