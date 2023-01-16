const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

const DB_URL = process.env.DB_URL;
//ESTA URL CAMBIARÁ SEGUN VUESTRO PROYECTO
//Tenemos que sustituir <password> por nuestra password
//Detrás del .net/ podemos poner un nombre para nuestra BBDD por defecto es test


const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        const DB = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = DB.connection;
        console.log(`Connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(`Error connecting to my database: ${error}`);
    }
}

module.exports = {connect}