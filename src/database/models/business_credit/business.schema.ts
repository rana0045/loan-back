import mongoose, { Types } from 'mongoose';
import { Business } from './types.js';

export namespace BusinessSchema {
  export const NameSchema = new mongoose.Schema<Business.Name>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      name: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const AddressSchema = new mongoose.Schema<Business.Address>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      street: {
        type: String,
        default: null,
      },
      buildingAddress: {
        type: String,
        default: null,
      },
      cityName: {
        type: String,
        default: null,
      },
      zipCode: {
        type: String,
        default: null,
      },
      state: {
        type: String,
        default: null,
      },
      businessAddressType: {
        type: String,
        default: null,
      },
      policy: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const EntitySchema = new mongoose.Schema<Business.Entity>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      entityType: {
        type: String,
        default: null,
      },
      industry: {
        type: String,
        default: null,
      },
      dateIncorporated: {
        type: String,
        default: null,
      },
      policyOne: {
        type: Boolean,
        default: false,
      },
      policyTwo: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const EinSchema = new mongoose.Schema<Business.Ein>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      number: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const EinFileSchema = new mongoose.Schema<Business.EinFile>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      einFile: [],
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const PhoneDetailsSchema = new mongoose.Schema<Business.PhoneDetails>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      phoneNumber: {
        type: String,
        default: null,
      },
      serviceProvider: {
        type: String,
        default: null,
      },
      faxNumber: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const EmailDetailsSchema = new mongoose.Schema<Business.EmailDetails>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      website: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const LicenseSchema = new mongoose.Schema<Business.License>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      businessLicense: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const BankSchema = new mongoose.Schema<Business.Bank>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      account: {
        type: String,
        default: null,
        unique: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const MerchantSchema = new mongoose.Schema<Business.Merchant>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      account: {
        type: String,
        default: null,
        unique: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const DunsSchema = new mongoose.Schema<Business.Duns>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      address: {
        type: String,
        default: null,
      },
      policy: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const ExperianSchema = new mongoose.Schema<Business.Experian>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      identificationNumber: {
        type: String,
        default: null,
      },
      policy: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const EquifaxSchema = new mongoose.Schema<Business.Equifax>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      identificationNumber: {
        type: String,
        default: null,
      },
      policy: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const MonitorDunsFileSchema =
    new mongoose.Schema<Business.MonitorDunsFile>(
      {
        user_id: {
          type: Types.ObjectId,
          ref: 'user_credentials',
        },
        monitorDunsFile: [],
      },
      {
        timestamps: true,
        versionKey: false,
      },
    );

  export const MonitorExperianFileSchema =
    new mongoose.Schema<Business.MonitorExperianFile>(
      {
        user_id: {
          type: Types.ObjectId,
          ref: 'user_credentials',
        },
        monitorExperianFile: [],
      },
      {
        timestamps: true,
        versionKey: false,
      },
    );
  export const MonitorEquifaxFileSchema =
    new mongoose.Schema<Business.MonitorEquifaxFile>(
      {
        user_id: {
          type: Types.ObjectId,
          ref: 'user_credentials',
        },
        monitorEquifaxFile: [],
      },
      {
        timestamps: true,
        versionKey: false,
      },
    );
  export const LexisFileSchema = new mongoose.Schema<Business.LexisFile>(
    {
      user_id: {
        type: Types.ObjectId,
        ref: 'user_credentials',
      },
      lexisFile: [],
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const ChexSystemFileSchema =
    new mongoose.Schema<Business.ChexSystemFile>(
      {
        user_id: {
          type: Types.ObjectId,
          ref: 'user_credentials',
        },
        chexSystemFile: [],
      },
      {
        timestamps: true,
        versionKey: false,
      },
    );
  export const StartBuildingSchema =
    new mongoose.Schema<Business.StartBuilding>(
      {
        user_id: {
          type: Types.ObjectId,
          ref: 'user_credentials',
        },
        tradeAccount: {
          type: String,
          default: null,
        },
        appliedDate: {
          type: String,
          default: null,
        },
        paymentDate: {
          type: String,
          default: null,
        },
        approvedAmount: {
          type: String,
          default: null,
        },
        personalGrant: {
          type: String,
          default: null,
        },
      },
      {
        timestamps: true,
        versionKey: false,
      },
    );
  export const StartBuildingFileSchema =
    new mongoose.Schema<Business.StartBuildingFile>(
      {
        user_id: {
          type: Types.ObjectId,
          ref: 'user_credentials',
        },
        startBuildingFile: [],
      },
      {
        timestamps: true,
        versionKey: false,
      },
    );
}
