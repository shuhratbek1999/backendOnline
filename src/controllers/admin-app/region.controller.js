const HttpException = require('../../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const regionModel = require('../../models/region.model');

class regionController {
    getAll = async(req, res, next) => {
        const model = await regionModel.findAll(req.body)
        res.send({
            error_code: 201,
            error: false,
            message: "malumotlar chiqdi",
            data: model
        })
    }
     
     getOne = async(req, res, next) => {
        const model = await regionModel.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!model){
            new HttpException(404, "bunday id yoq boshqa kriting")
        }
        res.send({
            error_code: 201,
            error: false,
            message: "malumot chiqdi",
            data: model
        })
     }
   create = async(req, res, next) =>{
    this.checkValidation(req)
    const model = await regionModel.create(req.body);
    if(!model){
        new HttpException(404, "model topilmadi")
    }
    else{
        res.send({
            error_code: 201,
            error: false,
            message: "malumotlar qoshildi",
            data: model
        })
    }
   }
   update = async(req, res, next) => {
    this.checkValidation(req)
    const model = await regionModel.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!model){
        new HttpException(404, "bunday id mavjud emas")
    }
    let body = req.body;
    model.name = body.name
    model.save();
    res.send({
        error_code: 201,
        error: false,
        message: "malumotlar tahrirlandi",
        data: model 
    })
   }
  delete = async(req,res, next) => {
    const model = await regionModel.destroy({
        where:{
            id: req.params.id
        }
    })
    if(!model){
        new HttpException(404, "bunday id mavjud emas boshqa kiriting")
    }
    res.send({
        error_code: 201,
        error: false,
        message: "malumot ochirildi"
    })
  }

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new regionController;