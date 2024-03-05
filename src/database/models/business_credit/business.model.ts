import mongoose from 'mongoose';
import { Business } from './types.js';
import { BusinessSchema } from './business.schema.js';

export namespace BusinessModel {
  export const NameModel = mongoose.model<Business.Name>(
    'business_name',
    BusinessSchema.NameSchema,
  );
  export const AddressModel = mongoose.model<Business.Address>(
    'business_address',
    BusinessSchema.AddressSchema,
  );
  export const EntityModel = mongoose.model<Business.Entity>(
    'business_entity',
    BusinessSchema.EntitySchema,
  );
  export const EinModel = mongoose.model<Business.Ein>(
    'business_ein',
    BusinessSchema.EinSchema,
  );
  export const EinFileModel = mongoose.model<Business.EinFile>(
    'business_ein_file',
    BusinessSchema.EinFileSchema,
  );
  export const PhoneDetailsModel = mongoose.model<Business.PhoneDetails>(
    'business_phone_details',
    BusinessSchema.PhoneDetailsSchema,
  );
  export const EmailDetailsModel = mongoose.model<Business.EmailDetails>(
    'business_email_details',
    BusinessSchema.EmailDetailsSchema,
  );
  export const LicenseModel = mongoose.model<Business.License>(
    'business_license',
    BusinessSchema.LicenseSchema,
  );
  export const BankModel = mongoose.model<Business.Bank>(
    'business_bank',
    BusinessSchema.BankSchema,
  );
  export const MerchantModel = mongoose.model<Business.Merchant>(
    'business_merchant',
    BusinessSchema.MerchantSchema,
  );
  export const DunsModel = mongoose.model<Business.Duns>(
    'business_duns',
    BusinessSchema.DunsSchema,
  );
  export const ExperianModel = mongoose.model<Business.Experian>(
    'business_experian',
    BusinessSchema.ExperianSchema,
  );
  export const EquifaxModel = mongoose.model<Business.Equifax>(
    'business_equifax',
    BusinessSchema.EquifaxSchema,
  );
  export const MonitorDunsFileModel = mongoose.model<Business.MonitorDunsFile>(
    'business_monitor_duns_file',
    BusinessSchema.MonitorDunsFileSchema,
  );
  export const MonitorExperianFileModel =
    mongoose.model<Business.MonitorExperianFile>(
      'business_monitor_experian_file',
      BusinessSchema.MonitorExperianFileSchema,
    );
  export const MonitorEquifaxFileModel =
    mongoose.model<Business.MonitorEquifaxFile>(
      'business_monitor_equifax_file',
      BusinessSchema.MonitorEquifaxFileSchema,
    );
  export const LexisFileModel = mongoose.model<Business.LexisFile>(
    'business_lexis_file',
    BusinessSchema.LexisFileSchema,
  );
  export const ChexSystemFileModel = mongoose.model<Business.ChexSystemFile>(
    'business_chex_system_file',
    BusinessSchema.ChexSystemFileSchema,
  );
  export const StartBuildingModel = mongoose.model<Business.StartBuilding>(
    'business_start_building',
    BusinessSchema.StartBuildingSchema,
  );
  export const StartBuildingFileModel =
    mongoose.model<Business.StartBuildingFile>(
      'business_start_building_file',
      BusinessSchema.StartBuildingFileSchema,
    );
}
