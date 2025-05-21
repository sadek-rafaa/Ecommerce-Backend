module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      comment: DataTypes.TEXT,
    });
  
    Review.associate = (models) => {
      Review.belongsTo(models.User);
      Review.belongsTo(models.Product);
    };
  
    return Review;
  };
  