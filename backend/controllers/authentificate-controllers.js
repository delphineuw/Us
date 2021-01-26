const bcrypt = require('bcrypt');
const { User } = require('../models');


const register = async (req, res, next) => {
    const data = {...req.body}
    console.log(data)
    let newuser;
    try {
        const hashPassword = await bcrypt.hash(data.password ,10)
        newuser = await User.create({...data, password: hashPassword});
        console.log(data)
    } catch (error) {
        console.log(error)
        return next(new Error('Could not save User.'));
    }
    res.json({newuser})
}
const authentificate = async (req, res, next) => {
   
}


module.exports = {
    register,
    authentificate
}