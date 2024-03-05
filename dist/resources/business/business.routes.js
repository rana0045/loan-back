import { Router } from 'express';
import { OneUpload } from '../../vendor/multer/config.js';
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
    BusinessRoutes.index.post('/business/phone.detail', [BusinessController.PhoneDetails]);
    BusinessRoutes.index.get('/business/phone.detail', [BusinessController.GetPhoneDetails]);
    BusinessRoutes.index.post('/business/email.detail', [BusinessController.EmailDetails]);
    BusinessRoutes.index.get('/business/email.detail', [BusinessController.GetEmailDetails]);
    BusinessRoutes.index.post('/business/license', [BusinessController.License]);
    BusinessRoutes.index.get('/business/license', [BusinessController.GetLicense]);
    BusinessRoutes.index.post('/business/bank', [BusinessController.BankAccount]);
    BusinessRoutes.index.get('/business/bank', [BusinessController.GetBankAccount]);
    BusinessRoutes.index.post('/business/merchant.bank', [
        BusinessController.MerchantBankAccount,
    ]);
    BusinessRoutes.index.get('/business/merchant.bank', [
        BusinessController.GetMerchantBankAccount,
    ]);
    BusinessRoutes.index.post('/business/duns', [BusinessController.Duns]);
    BusinessRoutes.index.get('/business/duns', [BusinessController.GetDuns]);
    BusinessRoutes.index.post('/business/experian', [BusinessController.Experian]);
    BusinessRoutes.index.get('/business/experian', [BusinessController.GetExperian]);
    BusinessRoutes.index.post('/business/equifax', [BusinessController.Equifax]);
    BusinessRoutes.index.get('/business/equifax', [BusinessController.GetEquifax]);
    BusinessRoutes.index.post('/business/start.building', [BusinessController.StartBuilding]);
    BusinessRoutes.index.get('/business/start.building', [BusinessController.GetStartBuilding]);
    BusinessRoutes.index.post('/business/ein.file', [
        OneUpload.fields([{ name: 'einFile', maxCount: 1 }]),
        BusinessController.EinFile,
    ]);
    BusinessRoutes.index.post('/business/monitor.duns.file', [
        OneUpload.fields([{ name: 'monitorDunsFile', maxCount: 1 }]),
        BusinessController.MonitorDunsFile,
    ]);
    BusinessRoutes.index.post('/business/monitor.experian.file', [
        OneUpload.fields([{ name: 'monitorExperianFile', maxCount: 1 }]),
        BusinessController.MonitorExperianFile,
    ]);
    BusinessRoutes.index.post('/business/monitor.equifax.file', [
        OneUpload.fields([{ name: 'monitorEquifaxFile', maxCount: 1 }]),
        BusinessController.MonitorEquifaxFile,
    ]);
    BusinessRoutes.index.post('/business/lexis.file', [
        OneUpload.fields([{ name: 'lexisFile', maxCount: 1 }]),
        BusinessController.LexisFile,
    ]);
    BusinessRoutes.index.post('/business/chex.system.file', [
        OneUpload.fields([{ name: 'chexSystemFile', maxCount: 1 }]),
        BusinessController.ChexSystemFile,
    ]);
    BusinessRoutes.index.post('/business/start.building.file', [
        OneUpload.fields([{ name: 'startBuildingFile', maxCount: 1 }]),
        BusinessController.StartBuildingFile,
    ]);
})(BusinessRoutes = BusinessRoutes || (BusinessRoutes = {}));
