module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define("author", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    )
    
    return Author
}
