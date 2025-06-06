module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      quantity: DataTypes.INTEGER,
    });
  
    Cart.associate = (models) => {
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Product);
    };
  
    return Cart;
  };
  