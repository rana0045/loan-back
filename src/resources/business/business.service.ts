import { Request, Response } from 'express';
import { deleteFilesForIdentity } from '../../utils/delete/delete.utils.js';
import { Business } from '../../database/models/business_credit/types.js';
import { BusinessModel } from '../../database/models/business_credit/business.model.js';
import { UserModel } from '../../database/models/user/user.model.js';

export namespace BusinessService {
  export const Name = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const userId = res.locals.decode._id;
      const newBusinessName = new BusinessModel.NameModel({
        user_id: userId,
        name,
      });
      await newBusinessName.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Name saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetName = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const businessName = await BusinessModel.NameModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Name get successfully',
        data: businessName,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const Business = async (req: Request, res: Response) => {
    try {
      const {
        street,
        buildingAddress,
        cityName,
        zipCode,
        state,
        businessAddressType,
        policy,
      } = req.body;
      const userId = res.locals.decode._id;
      const newBusinessAddress = new BusinessModel.AddressModel({
        user_id: userId,
        street,
        buildingAddress,
        cityName,
        zipCode,
        state,
        businessAddressType,
        policy,
      });
      await newBusinessAddress.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Address saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetBusiness = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const businessAddress = await BusinessModel.AddressModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Address get successfully',
        data: businessAddress,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const Entity = async (req: Request, res: Response) => {
    try {
      const { entityType, industry, dateIncorporated, policyOne, policyTwo } =
        req.body;
      const userId = res.locals.decode._id;
      const newBusinessEntity = new BusinessModel.EntityModel({
        user_id: userId,
        entityType,
        industry,
        dateIncorporated,
        policyOne,
        policyTwo,
      });
      await newBusinessEntity.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Entity saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetEntity = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const businessEntity = await BusinessModel.EntityModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Entity get successfully',
        data: businessEntity,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const Ein = async (req: Request, res: Response) => {
    try {
      const { number } = req.body;
      const userId = res.locals.decode._id;
      const newBusinessEin = new BusinessModel.EinModel({
        user_id: userId,
        number,
      });
      await newBusinessEin.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Ein number saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetEin = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const businessEinNumber = await BusinessModel.EinModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business Ein number get successfully',
        data: businessEinNumber,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const PhoneDetails = async (req: Request, res: Response) => {
    try {
      const { phoneNumber, serviceProvider, faxNumber } = req.body;
      const userId = res.locals.decode._id;
      const newPhoneDetails = new BusinessModel.PhoneDetailsModel({
        user_id: userId,
        phoneNumber,
        serviceProvider,
        faxNumber,
      });
      await newPhoneDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Phone Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetPhoneDetails = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.PhoneDetailsModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Phone Details get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const EmailDetails = async (req: Request, res: Response) => {
    try {
      const { website, email } = req.body;
      const userId = res.locals.decode._id;
      const newEmailDetails = new BusinessModel.EmailDetailsModel({
        user_id: userId,
        website,
        email,
      });
      await newEmailDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Email Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetEmailDetails = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.EmailDetailsModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Email Details get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const License = async (req: Request, res: Response) => {
    try {
      const { businessLicense } = req.body;
      const userId = res.locals.decode._id;
      const newEmailDetails = new BusinessModel.LicenseModel({
        user_id: userId,
        businessLicense,
      });
      await newEmailDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business License saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetLicense = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.LicenseModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Business License get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const BankAccount = async (req: Request, res: Response) => {
    try {
      const { account } = req.body;
      const userId = res.locals.decode._id;
      const newBankDetails = new BusinessModel.BankModel({
        user_id: userId,
        account,
      });
      await newBankDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Bank Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetBankAccount = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.BankModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Bank Details get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const MerchantBankAccount = async (req: Request, res: Response) => {
    try {
      const { account } = req.body;
      const userId = res.locals.decode._id;
      const newBankDetails = new BusinessModel.MerchantModel({
        user_id: userId,
        account,
      });
      await newBankDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Merchant Bank Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetMerchantBankAccount = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.MerchantModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Merchant Bank Details get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const Duns = async (req: Request, res: Response) => {
    try {
      const { address, policy } = req.body;
      const userId = res.locals.decode._id;
      const newBankDetails = new BusinessModel.DunsModel({
        user_id: userId,
        address,
        policy,
      });
      await newBankDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Duns Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetDuns = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.DunsModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Duns Details get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const Experian = async (req: Request, res: Response) => {
    try {
      const { identificationNumber, policy } = req.body;
      const userId = res.locals.decode._id;
      const newBankDetails = new BusinessModel.ExperianModel({
        user_id: userId,
        identificationNumber,
        policy,
      });
      await newBankDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Experian Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetExperian = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.ExperianModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Experian Details get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const Equifax = async (req: Request, res: Response) => {
    try {
      const { identificationNumber, policy } = req.body;
      const userId = res.locals.decode._id;
      const newBankDetails = new BusinessModel.EquifaxModel({
        user_id: userId,
        identificationNumber,
        policy,
      });
      await newBankDetails.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Equifax Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetEquifax = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const phoneDetails = await BusinessModel.EquifaxModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'Equifax Details get successfully',
        data: phoneDetails,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierOne = async (req: Request, res: Response) => {
    try {
      const {
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      } = req.body;
      const userId = res.locals.decode._id;
      const newStartBuildingTierOne = new BusinessModel.StartBuildingTierOneModel({
        user_id: userId,
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      });
      await newStartBuildingTierOne.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierOne Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetStartBuildingTierOne = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const details = await BusinessModel.StartBuildingTierOneModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierOne Details get successfully',
        data: details,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierTwo = async (req: Request, res: Response) => {
    try {
      const {
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      } = req.body;
      const userId = res.locals.decode._id;
      const newStartBuildingTierTwo = new BusinessModel.StartBuildingTierTwoModel({
        user_id: userId,
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      });
      await newStartBuildingTierTwo.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierTwo Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetStartBuildingTierTwo = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const details = await BusinessModel.StartBuildingTierTwoModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierTwo Details get successfully',
        data: details,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierThree = async (req: Request, res: Response) => {
    try {
      const {
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      } = req.body;
      const userId = res.locals.decode._id;
      const newStartBuildingTierThree = new BusinessModel.StartBuildingTierThreeModel({
        user_id: userId,
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      });
      await newStartBuildingTierThree.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierThree Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetStartBuildingTierThree = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const details = await BusinessModel.StartBuildingTierThreeModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierThree Details get successfully',
        data: details,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierFour = async (req: Request, res: Response) => {
    try {
      const {
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      } = req.body;
      const userId = res.locals.decode._id;
      const newStartBuildingTierFour = new BusinessModel.StartBuildingTierFourModel({
        user_id: userId,
        tradeAccount,
        appliedDate,
        paymentDate,
        approvedAmount,
        personalGrant,
      });
      await newStartBuildingTierFour.save();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierFour Details saved successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const GetStartBuildingTierFour = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      const details = await BusinessModel.StartBuildingTierFourModel.findOne({
        user_id: userId,
      });
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'StartBuildingTierFour Details get successfully',
        data: details,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const EinFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.EinFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const einFile = [...fileUploads?.einFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.EinFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.einFile?.map((file) => file?.filename as string),
          einFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser = await BusinessModel.EinFileModel.findOneAndUpdate(
        { user_id: userId },
        {
          $set: {
            einFile: einFile,
          },
        },
        { new: true },
      );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const MonitorDunsFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.MonitorDunsFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const monitorDunsFile = [...fileUploads?.monitorDunsFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.MonitorDunsFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.monitorDunsFile?.map((file) => file?.filename as string),
          monitorDunsFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.MonitorDunsFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              monitorDunsFile: monitorDunsFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const MonitorExperianFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.MonitorExperianFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const monitorExperianFile = [...fileUploads?.monitorExperianFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.MonitorExperianFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.monitorExperianFile?.map(
            (file) => file?.filename as string,
          ),
          monitorExperianFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.MonitorExperianFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              monitorExperianFile: monitorExperianFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const MonitorEquifaxFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.MonitorEquifaxFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const monitorEquifaxFile = [...fileUploads?.monitorEquifaxFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.MonitorEquifaxFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.monitorEquifaxFile?.map(
            (file) => file?.filename as string,
          ),
          monitorEquifaxFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.MonitorEquifaxFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              monitorEquifaxFile: monitorEquifaxFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const LexisFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.LexisFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const lexisFile = [...fileUploads?.lexisFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.LexisFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.lexisFile?.map((file) => file?.filename as string),
          lexisFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser = await BusinessModel.LexisFileModel.findOneAndUpdate(
        { user_id: userId },
        {
          $set: {
            lexisFile: lexisFile,
          },
        },
        { new: true },
      );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const ChexSystemFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.ChexSystemFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const chexSystemFile = [...fileUploads?.chexSystemFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.ChexSystemFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.chexSystemFile?.map((file) => file?.filename as string),
          chexSystemFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.ChexSystemFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              chexSystemFile: chexSystemFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierOneFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.StartBuildingTierOneFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const startBuildingTierOneFile = [...fileUploads?.startBuildingTierOneFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.StartBuildingTierOneFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.startBuildingTierOneFile?.map(
            (file) => file?.filename as string,
          ),
          startBuildingTierOneFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.StartBuildingTierOneFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              startBuildingTierOneFile: startBuildingTierOneFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierTwoFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.StartBuildingTierTwoFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const startBuildingTierTwoFile = [...fileUploads?.startBuildingTierTwoFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.StartBuildingTierTwoFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.startBuildingTierTwoFile?.map(
            (file) => file?.filename as string,
          ),
          startBuildingTierTwoFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.StartBuildingTierTwoFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              startBuildingTierTwoFile: startBuildingTierTwoFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierThreeFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.StartBuildingTierThreeFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const startBuildingTierThreeFile = [...fileUploads?.startBuildingTierThreeFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.StartBuildingTierThreeFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.startBuildingTierThreeFile?.map(
            (file) => file?.filename as string,
          ),
          startBuildingTierThreeFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.StartBuildingTierThreeFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              startBuildingTierThreeFile: startBuildingTierThreeFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const StartBuildingTierFourFile = async (req: Request, res: Response) => {
    try {
      const fileUploads = req.files as unknown as Business.StartBuildingTierFourFile;

      if (!fileUploads || !Object.keys(fileUploads).length) {
        return Promise.reject({
          success: false,
          error: {
            code: 400,
            message: 'No files were provided in the request.',
          },
        });
      }
      const startBuildingTierFourFile = [...fileUploads?.startBuildingTierFourFile];
      const userId = res.locals.decode._id;
      const oldUserData = await BusinessModel.StartBuildingTierFourFileModel.findOne({
        user_id: userId,
      });
      if (oldUserData) {
        await deleteFilesForIdentity(
          oldUserData?.startBuildingTierFourFile?.map(
            (file) => file?.filename as string,
          ),
          startBuildingTierFourFile?.map((file) => file?.filename as string),
        );
      }
      const updatedUser =
        await BusinessModel.StartBuildingTierFourFileModel.findOneAndUpdate(
          { user_id: userId },
          {
            $set: {
              startBuildingTierFourFile: startBuildingTierFourFile,
            },
          },
          { new: true },
        );

      if (!updatedUser) {
        return Promise.reject({
          code: 404,
          Success: false,
          message: 'User not found',
        });
      }

      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'File uploaded successfully',
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };

  export const GetAllUsers = async (req: Request, res: Response) => {
    try {
      const userId = res.locals.decode._id;
      // const details = await  UserModel.IndividualDetailsModel.find({});
      // const details2 = await  UserModel.CredentialModel.find({}, { password: 0 });

      const userDetailsWithCredentials = await UserModel.IndividualDetailsModel.find({}).populate('user_id', '-password').exec();
      return Promise.resolve({
        code: 200,
        Success: true,
        message: 'get successfully',
        data: userDetailsWithCredentials,
      });
    } catch (e) {
      console.error('Error:', e);
      return Promise.reject({
        code: 500,
        Success: false,
        message: 'Internal Server Error',
      });
    }
  };
}
