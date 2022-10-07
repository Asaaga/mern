const User = require('../models/users');
const bcrypt = require('bcrypt')
// Register
exports.postRegister = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    try {
            
        const salt = await bcrypt.genSalt(10)
        const hashPwd = await bcrypt.hash(password, salt);

        const user = new User({
            username:username,
            email:email,
            password: hashPwd
        })
        const save = await user.save()
        res.status(200).json(save)

    } catch(err) {
        res.status(422).json(err)
    }
    
}
// Login
exports.postLogin = async (req, res, next) => {
    try {

        const user = await User.findOne({email:req.body.email});
        !user && res.status(400).json("Invalid Email or Password")
        const match = await bcrypt.compare(req.body.password, user.password);
        !match && res.status(400).json("Invalid Email or Password")

        const {password, ...others} = user._doc

        res.status(200).json(others);
    } catch (error) {
        console.log(error)
    }



}