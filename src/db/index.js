const { Sequelize, DataTypes } = require("sequelize")
const Article = require("./article")
const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
    host: process.env.PGHOST,
    dialect: "postgres",
    })

    //once model is created
const models = {
    Article: Article(sequelize, DataTypes)
    }
    
    models.sequelize = sequelize;
    models.Sequelize = Sequelize;

    sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));
//from sequelize getting started doc + test Connection

module.exports = models;


