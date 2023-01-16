const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
    // console.log('generando sign...',process.env.JWT_KEY);
    return jwt.sign({id,email}, process.env.JWT_KEY, {expiresIn: '1d'});
}

const verifySign = (token) => {
    console.log('verificando sign...');
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports ={generateSign, verifySign};