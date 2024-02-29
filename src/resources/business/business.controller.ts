import { NextFunction, Request, Response } from 'express';
import { BusinessService } from './business.service.js';

export namespace BusinessController {
  export const Name = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.Name(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetName(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const Address = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.Business(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetAddress = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetBusiness(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const Entity = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.Entity(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetEntity = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetEntity(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const Ein = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.Ein(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetEin = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetEin(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const PhoneDetails = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.PhoneDetails(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetPhoneDetails = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetPhoneDetails(req, res));
    } catch (e) {
      next(e);
    }
  };
}
