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
  // index.post('/business/ein.file', [
  //   OneUpload.fields([{ name: 'einFile', maxCount: 1 }]),
  //   BusinessController.GetEin,
  // ]);
  index.post('/business/phone.detail', [BusinessController.PhoneDetails]);
  index.get('/business/phone.detail', [BusinessController.GetPhoneDetails]);
}
