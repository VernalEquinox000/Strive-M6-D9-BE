module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        headline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subhead: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },{
        timestamps: true,
    })
    
    return Article
}

