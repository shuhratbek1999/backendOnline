const UserModel = require('../../models/user.model');
const HttpException = require('../../utils/HttpException.utils');
const status = require('../../utils/status.utils')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret_jwt} = require('../../startup/config');

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class UserController {
    getAll = async(req, res, next) => {
        const model = await UserModel.findAll(req.body);
        if(!model){
          throw  new HttpException(404, "model topilmadi")
        }
        res.send({
            error_code: 201,
            error: false,
            message: 'malumotlar chiqdi',
            data: model
        })
    }
 getOne = async(req, res, next) =>{
    const model = await UserModel.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!model){
       throw new HttpException(404, "bu id topilmadi boshqa tanleng")
    }
 }

    userLogin = async (req, res, next) => {
        this.checkValidation(req);

        const { phone_number, password: pass } = req.body;
        
        const user = await UserModel.findOne({
            where:{ 
                phone_number: phone_number
            }
        });

        if (!user) {
            throw new HttpException(404, 'nomer hato');
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new HttpException(404, 'parol xato');
        }

        // user matched!
        const token = jwt.sign({ user_id: user.id.toString() }, secret_jwt, {
            expiresIn: '24h'
        });

        user.token = token;
        
        res.send({
            error_code: 201,
            error: false,
            message: 'royhatdan o\'tdingiz',
            data: user
        });
    };
    create = async (req, res, next) => {
        this.checkValidation(req);
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
        const model = await UserModel.create(req.body)
        delete req.body['password']
        if(!model){
            throw new HttpException(404, 'model topilmadii')
        }
        res.send({
            error: false,
            error_code: 201,
            message: "malumot qoshildi",
            data: model
        })
    }
    update = async(req, res, next)=>{
        let salt = await bcrypt.genSalt();
        let data = req.body;
        const pasXash = await bcrypt.hash(data.password.toString(), salt);
        delete data['password'];
        data['password_hash'] = pasXash;
        const model = await UserModel.findOne({
           where:{
            id: req.params.id
           }
        })
        model.full_name = req.body.full_name;
        model.phone_number = req.body.phone_number;
        model.password = req.body.password;
        model.save();
        res.send({
            error_code: 201,
            error: false,
            message: "tahrirlandi",
            data: model
        })
    }
    delete = async (req, res, next) =>{
        const model = await UserModel.destroy({
            where:{
                id: req.params.id
            }
        });
        if(!model){
            throw new HttpException(404, "bunday id yoq")
        }
        else{
        res.status(200).send({
            error: false,
            error_code: 200,
            message: 'Malumot ochirildi',
            data: model
        });
    }
    }
    
    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

    // hash password if it exists
    
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new UserController;