import mongoose, { Types } from 'mongoose';
export var BusinessSchema;
(function (BusinessSchema) {
    BusinessSchema.NameSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        name: {
            type: String,
            default: null,
        },
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.AddressSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.EntitySchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.EinSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        number: {
            type: String,
            default: null,
        },
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.EinFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        einFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.PhoneDetailsSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.EmailDetailsSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.LicenseSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        businessLicense: {
            type: String,
            default: null,
        },
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.BankSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        account: {
            type: String,
            default: null,
            unique: true,
        },
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.MerchantSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        account: {
            type: String,
            default: null,
            unique: true,
        },
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.DunsSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.ExperianSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.EquifaxSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.MonitorDunsFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        monitorDunsFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.MonitorExperianFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        monitorExperianFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.MonitorEquifaxFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        monitorEquifaxFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.LexisFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        lexisFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.ChexSystemFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        chexSystemFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierOneSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierOneFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        startBuildingTierOneFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierTwoSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierTwoFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        startBuildingTierTwoFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierThreeSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierThreeFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        startBuildingTierThreeFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierFourSchema = new mongoose.Schema({
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
    }, {
        timestamps: true,
        versionKey: false,
    });
    BusinessSchema.StartBuildingTierFourFileSchema = new mongoose.Schema({
        user_id: {
            type: Types.ObjectId,
            ref: 'user_credentials',
        },
        startBuildingTierFourFile: [],
    }, {
        timestamps: true,
        versionKey: false,
    });
})(BusinessSchema || (BusinessSchema = {}));
