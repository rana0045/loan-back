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
  export const EmailDetails = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.EmailDetails(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetEmailDetails = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetEmailDetails(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const License = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.License(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetLicense = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetLicense(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const BankAccount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.BankAccount(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetBankAccount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetBankAccount(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const MerchantBankAccount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.MerchantBankAccount(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetMerchantBankAccount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.GetMerchantBankAccount(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const Duns = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.Duns(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetDuns = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetDuns(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const Experian = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.Experian(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetExperian = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetExperian(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const Equifax = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.Equifax(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetEquifax = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.GetEquifax(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierOne(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetStartBuildingTierOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.GetStartBuildingTierOne(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierTwo = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierTwo(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetStartBuildingTierTwo = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.GetStartBuildingTierTwo(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierThree = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierThree(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetStartBuildingTierThree = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.GetStartBuildingTierThree(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierFour = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierFour(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const GetStartBuildingTierFour = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.GetStartBuildingTierFour(req, res));
    } catch (e) {
      next(e);
    }
  };

  export const EinFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.EinFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const MonitorDunsFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.MonitorDunsFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const MonitorExperianFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.MonitorExperianFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const MonitorEquifaxFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.MonitorEquifaxFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const LexisFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.LexisFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const ChexSystemFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.status(201).json(await BusinessService.ChexSystemFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierOneFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierOneFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierTwoFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierTwoFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierThreeFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierThreeFile(req, res));
    } catch (e) {
      next(e);
    }
  };
  export const StartBuildingTierFourFile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res
        .status(201)
        .json(await BusinessService.StartBuildingTierFourFile(req, res));
    } catch (e) {
      next(e);
    }
  };
}
