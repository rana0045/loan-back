import { BusinessModel } from '../../database/models/business_credit/business.model.js';
export var BusinessService;
(function (BusinessService) {
    BusinessService.Name = async (req, res) => {
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
            const { street, buildingAddress, cityName, zipCode, state, businessAddressType, policy, } = req.body;
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
            const { entityType, industry, dateIncorporated, policyOne, policyTwo } = req.body;
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
})(BusinessService = BusinessService || (BusinessService = {}));
