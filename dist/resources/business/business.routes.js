import { Router } from 'express';
import { CheckToken } from '../../helper/check/token/check.token.js';
import { BusinessController } from './business.controller.js';
export var BusinessRoutes;
(function (BusinessRoutes) {
    BusinessRoutes.index = Router();
    BusinessRoutes.index.use(CheckToken);
    BusinessRoutes.index.post('/business/name', [BusinessController.Name]);
    BusinessRoutes.index.get('/business/name', [BusinessController.GetName]);
    BusinessRoutes.index.post('/business/address', [BusinessController.Address]);
    BusinessRoutes.index.get('/business/address', [BusinessController.GetAddress]);
    BusinessRoutes.index.post('/business/entity', [BusinessController.Entity]);
    BusinessRoutes.index.get('/business/entity', [BusinessController.GetEntity]);
    BusinessRoutes.index.post('/business/ein', [BusinessController.Ein]);
    BusinessRoutes.index.get('/business/ein', [BusinessController.GetEin]);
    // index.post('/business/ein.file', [
    //   OneUpload.fields([{ name: 'einFile', maxCount: 1 }]),
    //   BusinessController.GetEin,
    // ]);
    BusinessRoutes.index.post('/business/phone.detail', [BusinessController.PhoneDetails]);
    BusinessRoutes.index.get('/business/phone.detail', [BusinessController.GetPhoneDetails]);
})(BusinessRoutes = BusinessRoutes || (BusinessRoutes = {}));
