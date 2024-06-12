import { deleteFilesForIdentity } from '../../utils/delete/delete.utils.js';
import { BusinessModel } from '../../database/models/business_credit/business.model.js';
import { UserModel } from '../../database/models/user/user.model.js';
export var BusinessService;
(function (BusinessService) {
    BusinessService.Name = async (req, res) => {
        try {
            const { name, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetName = async (req, res) => {
        try {
            const userId = req.params.id;
            const businessName = await BusinessModel.NameModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Business Name get successfully',
                data: businessName,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.Business = async (req, res) => {
        try {
            const { street, buildingAddress, cityName, zipCode, state, businessAddressType, policy, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetBusiness = async (req, res) => {
        try {
            const userId = req.params.id;
            const businessAddress = await BusinessModel.AddressModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Business Address get successfully',
                data: businessAddress,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.Entity = async (req, res) => {
        try {
            const { entityType, industry, dateIncorporated, policyOne, policyTwo, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetEntity = async (req, res) => {
        try {
            const userId = req.params.id;
            const businessEntity = await BusinessModel.EntityModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Business Entity get successfully',
                data: businessEntity,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.Ein = async (req, res) => {
        try {
            const { number, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetEin = async (req, res) => {
        try {
            const userId = req.params.id;
            const businessEinNumber = await BusinessModel.EinModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Business Ein number get successfully',
                data: businessEinNumber,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.PhoneDetails = async (req, res) => {
        try {
            const { phoneNumber, serviceProvider, faxNumber, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetPhoneDetails = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.PhoneDetailsModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Phone Details get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.EmailDetails = async (req, res) => {
        try {
            const { website, email, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetEmailDetails = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.EmailDetailsModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Email Details get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.License = async (req, res) => {
        try {
            const { businessLicense, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetLicense = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.LicenseModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Business License get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.BankAccount = async (req, res) => {
        try {
            const { account, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetBankAccount = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.BankModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Bank Details get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.MerchantBankAccount = async (req, res) => {
        try {
            const { account, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetMerchantBankAccount = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.MerchantModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Merchant Bank Details get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.Duns = async (req, res) => {
        try {
            const { address, policy, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetDuns = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.DunsModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Duns Details get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.Experian = async (req, res) => {
        try {
            const { identificationNumber, policy, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetExperian = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.ExperianModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Experian Details get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.Equifax = async (req, res) => {
        try {
            const { identificationNumber, policy, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetEquifax = async (req, res) => {
        try {
            const userId = req.params.id;
            const phoneDetails = await BusinessModel.EquifaxModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'Equifax Details get successfully',
                data: phoneDetails,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierOne = async (req, res) => {
        try {
            const { tradeAccount, appliedDate, paymentDate, approvedAmount, personalGrant, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetStartBuildingTierOne = async (req, res) => {
        try {
            const userId = req.params.id;
            const details = await BusinessModel.StartBuildingTierOneModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'StartBuildingTierOne Details get successfully',
                data: details,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierTwo = async (req, res) => {
        try {
            const { tradeAccount, appliedDate, paymentDate, approvedAmount, personalGrant, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetStartBuildingTierTwo = async (req, res) => {
        try {
            const userId = req.params.id;
            const details = await BusinessModel.StartBuildingTierTwoModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'StartBuildingTierTwo Details get successfully',
                data: details,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierThree = async (req, res) => {
        try {
            const { tradeAccount, appliedDate, paymentDate, approvedAmount, personalGrant, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetStartBuildingTierThree = async (req, res) => {
        try {
            const userId = req.params.id;
            const details = await BusinessModel.StartBuildingTierThreeModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'StartBuildingTierThree Details get successfully',
                data: details,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierFour = async (req, res) => {
        try {
            const { tradeAccount, appliedDate, paymentDate, approvedAmount, personalGrant, id } = req.body;
            const userId = id;
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetStartBuildingTierFour = async (req, res) => {
        try {
            const userId = req.params.id;
            const details = await BusinessModel.StartBuildingTierFourModel.findOne({
                user_id: userId,
            });
            return Promise.resolve({
                code: 200,
                Success: true,
                message: 'StartBuildingTierFour Details get successfully',
                data: details,
            });
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.EinFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.EinFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.einFile?.map((file) => file?.filename), einFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.EinFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    einFile: einFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.MonitorDunsFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.MonitorDunsFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.monitorDunsFile?.map((file) => file?.filename), monitorDunsFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.MonitorDunsFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    monitorDunsFile: monitorDunsFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.MonitorExperianFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.MonitorExperianFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.monitorExperianFile?.map((file) => file?.filename), monitorExperianFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.MonitorExperianFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    monitorExperianFile: monitorExperianFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.MonitorEquifaxFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.MonitorEquifaxFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.monitorEquifaxFile?.map((file) => file?.filename), monitorEquifaxFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.MonitorEquifaxFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    monitorEquifaxFile: monitorEquifaxFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.LexisFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.LexisFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.lexisFile?.map((file) => file?.filename), lexisFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.LexisFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    lexisFile: lexisFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.ChexSystemFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.ChexSystemFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.chexSystemFile?.map((file) => file?.filename), chexSystemFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.ChexSystemFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    chexSystemFile: chexSystemFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierOneFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.StartBuildingTierOneFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.startBuildingTierOneFile?.map((file) => file?.filename), startBuildingTierOneFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.StartBuildingTierOneFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    startBuildingTierOneFile: startBuildingTierOneFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierTwoFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.StartBuildingTierTwoFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.startBuildingTierTwoFile?.map((file) => file?.filename), startBuildingTierTwoFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.StartBuildingTierTwoFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    startBuildingTierTwoFile: startBuildingTierTwoFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierThreeFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.StartBuildingTierThreeFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.startBuildingTierThreeFile?.map((file) => file?.filename), startBuildingTierThreeFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.StartBuildingTierThreeFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    startBuildingTierThreeFile: startBuildingTierThreeFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.StartBuildingTierFourFile = async (req, res) => {
        try {
            const fileUploads = req.files;
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
            const userId = req.params.id;
            const oldUserData = await BusinessModel.StartBuildingTierFourFileModel.findOne({
                user_id: userId,
            });
            if (oldUserData) {
                await deleteFilesForIdentity(oldUserData?.startBuildingTierFourFile?.map((file) => file?.filename), startBuildingTierFourFile?.map((file) => file?.filename));
            }
            const updatedUser = await BusinessModel.StartBuildingTierFourFileModel.findOneAndUpdate({ user_id: userId }, {
                $set: {
                    startBuildingTierFourFile: startBuildingTierFourFile,
                },
            }, { new: true });
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
    BusinessService.GetAllUsers = async (req, res) => {
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
        }
        catch (e) {
            console.error('Error:', e);
            return Promise.reject({
                code: 500,
                Success: false,
                message: 'Internal Server Error',
            });
        }
    };
})(BusinessService || (BusinessService = {}));
