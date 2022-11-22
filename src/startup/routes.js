const express = require("express");
const cors = require("cors");
const path = require("path");
const errorMiddleware = require('../middleware/error.middleware');
const userAdminAppRouter = require('../routes/admin-app/user.route');
const userRouter = require('../routes/admin-app/user.route');
const ProductRouter = require('../routes/admin-app/product.route');
const deliverRouter = require('../routes/admin-app/deliver.route');
const telefonRouter = require('../routes/admin-app/telefon.route');
const mebelRouter = require('../routes/admin-app/mebel.route');
const kompyuterRouter = require('../routes/admin-app/kompyuter.route');
const konditsionerRouter = require('../routes/admin-app/konditsioner.route');
const districtRouter = require('../routes/admin-app/district.route');
const regionRouter = require('../routes/admin-app/region.route');
const kitobRouter = require('../routes/admin-app/kitob.route')
const buyurtmaRouter = require('../routes/admin-app/buyurtma.route');
const HttpException = require('../utils/HttpException.utils');

module.exports = function(app){
        // parse requests of content-type: application/json
        // parses incoming requests with JSON payloads
        app.use(express.json());
        // enabling cors for all requests by using cors middleware
        app.use(cors());
        // Enable pre-flight
        app.options("*", cors());
        //mobile admin app
        app.use(`/api/v1/admin-app`, userAdminAppRouter);
        //frontend
        app.use(`/api/v1/admin-app/user`, userRouter); 
        app.use(`/api/v1/admin-app/product`, ProductRouter); 
        app.use(`/api/v1/admin-app/deliver`, deliverRouter); 
        app.use(`/api/v1/admin-app/telefon`, telefonRouter); 
        app.use(`/api/v1/admin-app/mebel`, mebelRouter); 
        app.use(`/api/v1/admin-app/kompyuter`, kompyuterRouter); 
        app.use(`/api/v1/admin-app/kitob`, kitobRouter); 
        app.use(`/api/v1/admin-app/konditsioner`, konditsionerRouter); 
        app.use(`/api/v1/admin-app/region`, regionRouter); 
        app.use(`/api/v1/admin-app/district`, districtRouter); 
        app.use(`/api/v1/admin-app/buyurtma`, buyurtmaRouter); 
        app.use(`/api/v1/uploads`, express.static('uploads'));

        // 404 error
        app.all('*', (req, res, next) => {
            const err = new HttpException(404, 'Endpoint Not Found');
            next(err);
        });
        
        app.use(errorMiddleware);
}