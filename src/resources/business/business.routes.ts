import { Router } from 'express';
import { OneUpload } from '../../vendor/multer/config.js';
import { validateRequest } from 'zod-express-middleware';
import { BusinessValidation } from './business.validation.js';

import { CheckToken } from '../../helper/check/token/check.token.js';
import { BusinessController } from './business.controller.js';

export namespace BusinessRoutes {
  export const index = Router();

  index.use(CheckToken);
  index.post('/business/name', [BusinessController.Name]);
  index.get('/business/name', [BusinessController.GetName]);
  index.post('/business/address', [BusinessController.Address]);
  index.get('/business/address', [BusinessController.GetAddress]);
  index.post('/business/entity', [BusinessController.Entity]);
  index.get('/business/entity', [BusinessController.GetEntity]);
  index.post('/business/ein', [BusinessController.Ein]);
  index.get('/business/ein', [BusinessController.GetEin]);
  index.post('/business/phone.detail', [BusinessController.PhoneDetails]);
  index.get('/business/phone.detail', [BusinessController.GetPhoneDetails]);
  index.post('/business/email.detail', [BusinessController.EmailDetails]);
  index.get('/business/email.detail', [BusinessController.GetEmailDetails]);
  index.post('/business/license', [BusinessController.License]);
  index.get('/business/license', [BusinessController.GetLicense]);
  index.post('/business/bank', [BusinessController.BankAccount]);
  index.get('/business/bank', [BusinessController.GetBankAccount]);
  index.post('/business/merchant.bank', [
    BusinessController.MerchantBankAccount,
  ]);
  index.get('/business/merchant.bank', [
    BusinessController.GetMerchantBankAccount,
  ]);
  index.post('/business/duns', [BusinessController.Duns]);
  index.get('/business/duns', [BusinessController.GetDuns]);
  index.post('/business/experian', [BusinessController.Experian]);
  index.get('/business/experian', [BusinessController.GetExperian]);
  index.post('/business/equifax', [BusinessController.Equifax]);
  index.get('/business/equifax', [BusinessController.GetEquifax]);
  index.post('/business/start.building/tier.one', [
    BusinessController.StartBuildingTierOne,
  ]);
  index.get('/business/start.building/tier.one', [
    BusinessController.GetStartBuildingTierOne,
  ]);
  index.post('/business/start.building/tier.two', [
    BusinessController.StartBuildingTierTwo,
  ]);
  index.get('/business/start.building/tier.two', [
    BusinessController.GetStartBuildingTierTwo,
  ]);
  index.post('/business/start.building/tier.three', [
    BusinessController.StartBuildingTierThree,
  ]);
  index.get('/business/start.building/tier.three', [
    BusinessController.GetStartBuildingTierThree,
  ]);
  index.post('/business/start.building/tier.four', [
    BusinessController.StartBuildingTierFour,
  ]);
  index.get('/business/start.building/tier.four', [
    BusinessController.GetStartBuildingTierFour,
  ]);
  index.post('/business/ein.file', [
    OneUpload.fields([{ name: 'einFile', maxCount: 1 }]),
    BusinessController.EinFile,
  ]);
  index.post('/business/monitor.duns.file', [
    OneUpload.fields([{ name: 'monitorDunsFile', maxCount: 1 }]),
    BusinessController.MonitorDunsFile,
  ]);
  index.post('/business/monitor.experian.file', [
    OneUpload.fields([{ name: 'monitorExperianFile', maxCount: 1 }]),
    BusinessController.MonitorExperianFile,
  ]);
  index.post('/business/monitor.equifax.file', [
    OneUpload.fields([{ name: 'monitorEquifaxFile', maxCount: 1 }]),
    BusinessController.MonitorEquifaxFile,
  ]);
  index.post('/business/lexis.file', [
    OneUpload.fields([{ name: 'lexisFile', maxCount: 1 }]),
    BusinessController.LexisFile,
  ]);
  index.post('/business/chex.system.file', [
    OneUpload.fields([{ name: 'chexSystemFile', maxCount: 1 }]),
    BusinessController.ChexSystemFile,
  ]);
  index.post('/business/start.building/tier.one.file', [
    OneUpload.fields([{ name: 'startBuildingTierOneFile', maxCount: 1 }]),
    BusinessController.StartBuildingTierOneFile,
  ]);
  index.post('/business/start.building/tier.two.file', [
    OneUpload.fields([{ name: 'startBuildingTierTwoFile', maxCount: 1 }]),
    BusinessController.StartBuildingTierTwoFile,
  ]);
  index.post('/business/start.building/tier.three.file', [
    OneUpload.fields([{ name: 'startBuildingTierThreeFile', maxCount: 1 }]),
    BusinessController.StartBuildingTierThreeFile,
  ]);
  index.post('/business/start.building/tier.four.file', [
    OneUpload.fields([{ name: 'startBuildingTierFourFile', maxCount: 1 }]),
    BusinessController.StartBuildingTierFourFile,
  ]);
}
