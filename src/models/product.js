module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL(10, 2),
      stock: DataTypes.INTEGER,
    });
  
    Product.associate = (models) => {
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
    };
  
    return Product;
  };
  