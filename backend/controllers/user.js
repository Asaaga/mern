const User = require('../models/users');
const bcrypt = require('bcrypt');
// Update User

exports.postUpdateUser = async (req, res, next) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true})
            res.status(200).json('user updated')
        } catch(err) {
        }
    } else {
        res.status(401).json("you can only update your product");
    }  
}

//Delete User

exports.postDeleteUser = (req, res, next) => {

}