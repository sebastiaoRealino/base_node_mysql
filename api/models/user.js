export default (sequelize, DataType) => {
    const User = sequelize.define('User', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      idade: {
        type: DataType.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },      
    });
    return User;
  };
  
  