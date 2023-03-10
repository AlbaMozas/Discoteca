const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');

const {validationEmail, validationPassword} = require('../../validators/validation');
const {generateSign} = require('../../jwt/jwt');

const register = async(req, res, next) => {
    try {
        const newUser = new Usuario(req.body);
        if(!validationEmail(newUser.email)){
            res.status(400).send({code:400, message:'Invalid Email'})
            return next();
        }
        if(!validationPassword(newUser.password)){
            res.status(400).send({code:400, message:'Invalid password'})
            return next();
        }
        const usuarios = await Usuario.find({email:newUser.email})
        if(usuarios.length > 0){
            res.status(400).send({code:400, message:'Duplicated Email'})
            return next();
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);   /////Encriptamos nuestra contraseña para que no nos la puedan robar
        const createdUser = await newUser.save();
        return res.status(200).json(createdUser);   
    } catch (error) {
        return res.status(500).json(error);
    }
}

const login = async(req, res, next) => {
     //console.log(req.body);
    try {
        const myUser = await Usuario.findOne({email: req.body.email});
        // console.log('myuser',myUser);
        // console.log('rec body pass',req.body.password);
        // console.log('my user pasword',myUser.password);
        // console.log('bcr compare y parentesis',bcrypt.compareSync(req.body.password, myUser.password));
        if(bcrypt.compareSync(req.body.password, myUser.password)){
            // console.log('myUser._id',myUser._id);
            // console.log('myUser.email',myUser.email);
            const token = generateSign(myUser._id, myUser.email);
            // console.log('token',token);
            return res.status(200).json({myUser, token});
        }else{
            // console.log('rechazado');
            res.status(400).send({code:400, message:'Password Error'})
            return next()
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {register, login}