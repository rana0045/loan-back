/*******************************************************************************
 * Copyright (c) iamsouravganguli 2024.
 * @author Sourav Ganguli <mysganguli@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 ******************************************************************************/

import { Types } from 'mongoose';

export namespace Business {
  type TString = string | null | undefined;
  type TUser = Types.ObjectId | null | undefined;
  type TFileInfo = {
    fieldname: TString;
    originalname: TString;
    encoding: TString;
    mimetype: TString;
    destination: TString;
    filename: TString;
    path: TString;
    size: number;
  };

  export interface Name {
    _id: TString;
    user_id: TUser;
    name: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Address {
    _id: TString;
    user_id: TUser;
    street: TString;
    buildingAddress: TString;
    cityName: TString;
    zipCode: TString;
    state: TString;
    businessAddressType: TString;
    policy: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Entity {
    _id: TString;
    user_id: TUser;
    entityType: TString;
    industry: TString;
    dateIncorporated: TString;
    policyOne: boolean;
    policyTwo: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Ein {
    _id: TString;
    user_id: TUser;
    number: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface EinFile {
    _id: TString;
    user_id: TUser;
    einFile: [TFileInfo];
  }
  export interface PhoneDetails {
    _id: TString;
    user_id: TUser;
    phoneNumber: TString;
    serviceProvider: TString;
    faxNumber: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface EmailDetails {
    _id: TString;
    user_id: TUser;
    website: TString;
    email: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface License {
    _id: TString;
    user_id: TUser;
    businessLicense: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Bank {
    _id: TString;
    user_id: TUser;
    account: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Merchant {
    _id: TString;
    user_id: TUser;
    account: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Duns {
    _id: TString;
    user_id: TUser;
    address: TString;
    policy: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Experian {
    _id: TString;
    user_id: TUser;
    identificationNumber: TString;
    policy: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface Equifax {
    _id: TString;
    user_id: TUser;
    identificationNumber: TString;
    policy: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface MonitorDunsFile {
    _id: TString;
    user_id: TUser;
    file: [TFileInfo];
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface MonitorExperianFile {
    _id: TString;
    user_id: TUser;
    file: [TFileInfo];
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface MonitorEquifaxFile {
    _id: TString;
    user_id: TUser;
    file: [TFileInfo];
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface LexisFile {
    _id: TString;
    user_id: TUser;
    file: [TFileInfo];
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }

  export interface ChexSystemFile {
    _id: TString;
    user_id: TUser;
    file: [TFileInfo];
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface StartBuilding {
    _id: TString;
    user_id: TUser;
    tradeAccount: TString;
    appliedDate: TString;
    paymentDate: TString;
    approvedAmount: TString;
    personalGrant: TString;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
  export interface StartBuildingFile {
    _id: TString;
    user_id: TUser;
    file: [TFileInfo];
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
  }
}
