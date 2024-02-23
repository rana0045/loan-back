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

  export interface Name {
    _id: TString;
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
  export interface EIN{
    _id: TString;
    user_id: TUser;
    
  }
}
