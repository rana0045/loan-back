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
})(BusinessController = BusinessController || (BusinessController = {}));
