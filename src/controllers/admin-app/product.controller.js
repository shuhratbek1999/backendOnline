const HttpException = require('../../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const ProductModel = require('../../models/product.model');

class ProductControler {
    getAll = async(req, res, next) => {
        const model = await ProductModel.findAll()
        res.send({
            error_code: 201,
            error: false,
            message: "malumotlar chiqdi",
            data: model
        })
    }
     
     getOne = async(req, res, next) => {
        const model = await ProductModel.findOne({
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
    let data= req.body;
    console.log(data)
    const model = await ProductModel.create({
        "title": data.title,
        "desc": data.desc,
        "img": data.file,
        "categories": data.categories,
        "size": data.size,
        "price": data.price,
        "color": data.color,
    });
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
    const model = await ProductModel.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!model){
        new HttpException(404, "bunday id mavjud emas")
    }
    let body = req.body;
    model.title = body.title,
    model.desc = body.desc,
    model.img = body.file,
    model.categories = body.categories,
    model.size = body.size,
    model.price = body.price,
    model.color = body.color
    model.save();
    res.send({
        error_code: 201,
        error: false,
        message: "malumotlar tahrirlandi",
        data: model 
    })
   }
  delete = async(req,res, next) => {
    const model = await ProductModel.destroy({
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

module.exports = new ProductControler;