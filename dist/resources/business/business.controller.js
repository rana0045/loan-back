import { BusinessService } from './business.service.js';
export var BusinessController;
(function (BusinessController) {
    BusinessController.Name = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.Name(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetName = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetName(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.Address = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.Business(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetAddress = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetBusiness(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.Entity = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.Entity(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetEntity = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetEntity(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.Ein = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.Ein(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetEin = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetEin(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.PhoneDetails = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.PhoneDetails(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetPhoneDetails = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetPhoneDetails(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.EmailDetails = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.EmailDetails(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetEmailDetails = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetEmailDetails(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.License = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.License(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetLicense = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetLicense(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.BankAccount = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.BankAccount(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetBankAccount = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetBankAccount(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.MerchantBankAccount = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.MerchantBankAccount(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetMerchantBankAccount = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.GetMerchantBankAccount(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.Duns = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.Duns(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetDuns = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetDuns(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.Experian = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.Experian(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetExperian = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetExperian(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.Equifax = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.Equifax(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetEquifax = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.GetEquifax(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierOne = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierOne(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetStartBuildingTierOne = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.GetStartBuildingTierOne(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierTwo = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierTwo(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetStartBuildingTierTwo = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.GetStartBuildingTierTwo(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierThree = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierThree(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetStartBuildingTierThree = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.GetStartBuildingTierThree(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierFour = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierFour(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetStartBuildingTierFour = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.GetStartBuildingTierFour(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.EinFile = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.EinFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.MonitorDunsFile = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.MonitorDunsFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.MonitorExperianFile = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.MonitorExperianFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.MonitorEquifaxFile = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.MonitorEquifaxFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.LexisFile = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.LexisFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.ChexSystemFile = async (req, res, next) => {
        try {
            res.status(201).json(await BusinessService.ChexSystemFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierOneFile = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierOneFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierTwoFile = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierTwoFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierThreeFile = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierThreeFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.StartBuildingTierFourFile = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.StartBuildingTierFourFile(req, res));
        }
        catch (e) {
            next(e);
        }
    };
    BusinessController.GetAllUsers = async (req, res, next) => {
        try {
            res
                .status(201)
                .json(await BusinessService.GetAllUsers(req, res));
        }
        catch (e) {
            next(e);
        }
    };
})(BusinessController || (BusinessController = {}));
