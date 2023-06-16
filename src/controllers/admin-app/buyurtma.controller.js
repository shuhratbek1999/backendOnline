const HttpException = require('../../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const buyurtmaModel = require('../../models/buyurtma.model');
const ProductModel = require('../../models/product.model');
const regionModel = require('../../models/region.model');
const districtModel = require('../../models/district.model');

class buyurtmaController {
    getAll = async(req, res, next) => {
        const model = await buyurtmaModel.findAll({
            include:[
                {model: ProductModel, as: 'product'},
                {model: regionModel, as: 'region'},
                {model: districtModel, as: 'district'},
            ]
        })
        res.send({
            error_code: 201,
            error: false,
            message: "malumotlar chiqdi",
            data: model
        })
    }
     
     getOne = async(req, res, next) => {
        const model = await buyurtmaModel.findOne({
            where:{
                id: req.params.id
            },
            include:[
                {model: ProductModel, as: 'product'},
                {model: regionModel, as: 'region'},
                {model: districtModel, as: 'district'},
            ]
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
    const model = await buyurtmaModel.create(req.body);
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
    const model = await buyurtmaModel.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!model){
        new HttpException(404, "bunday id mavjud emas")
    }
    let body = req.body;
    model.product_id = body.product_id,
    model.phone_number = body.phone_number,
    model.full_name = body.full_name,
    model.region_id = body.region_id,
    model.district_id = body.district_id,
    model.adress = body.adress,
    model.date_time = body.date_time,
    model.pay_type = body.pay_type
    model.save();
    res.send({
        error_code: 201,
        error: false,
        message: "malumotlar tahrirlandi",
        data: model 
    })
   }
  delete = async(req,res, next) => {
    const model = await buyurtmaModel.destroy({
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

module.exports = new buyurtmaController;