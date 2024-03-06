/*******************************************************************************
 * Copyright (c) iamsouravganguli 2023.
 * @author Sourav Ganguli <mysganguli@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 ******************************************************************************/

import EventEmitter from 'events';
import { UserModel } from '../../database/models/user/user.model.js';
import { Request } from 'express';
import { User } from '../../database/models/user/types.js';
import moment from 'moment/moment.js';
import { OnboardedModel } from '../../database/models/onboarded/onboarded.model.js';
import { BusinessModel } from '../../database/models/business_credit/business.model.js';

class ModuleOneEvent extends EventEmitter {}
export const moduleOneEvent = new ModuleOneEvent();
const moduleOneSignUpParts = async (
  req: Request,
  Credentials: User.Credentials,
) => {
  try {
    const newUserAddress = new UserModel.AddressModel({
      user_id: Credentials._id,
      cityName: req?.body?.cityName,
      zipCode: req?.body?.zipCode,
      state: req?.body?.state,
    });
    const newUserDetails = new UserModel.IndividualDetailsModel({
      user_id: Credentials._id,
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      gender: req?.body?.gender,
      dob: moment(req?.body?.dob).toISOString(),
    });
    const newIndividualIdentity = new UserModel.IndividualIdentityModel({
      user_id: Credentials._id,
      socialSecurityCardDetails: req?.body?.ssn,
    });
    const newModuleOneStatus = new OnboardedModel.ModuleOneModel({
      user_id: Credentials._id,
      signUp: true,
    });
    const newEinFile = new BusinessModel.EinFileModel({
      user_id: Credentials._id,
    });
    const newMonitorDunsFile = new BusinessModel.MonitorDunsFileModel({
      user_id: Credentials._id,
    });
    const newMonitorExperianFile = new BusinessModel.MonitorExperianFileModel({
      user_id: Credentials._id,
    });
    const newMonitorEquifaxFile = new BusinessModel.MonitorEquifaxFileModel({
      user_id: Credentials._id,
    });
    const newLexisFile = new BusinessModel.LexisFileModel({
      user_id: Credentials._id,
    });
    const newChexSystemFile = new BusinessModel.ChexSystemFileModel({
      user_id: Credentials._id,
    });
    const newStartBuildingTierOneFile = new BusinessModel.StartBuildingTierOneFileModel({
      user_id: Credentials._id,
    });
    const newStartBuildingTierTwoFile = new BusinessModel.StartBuildingTierTwoFileModel({
      user_id: Credentials._id,
    });
    const newStartBuildingTierThreeFile = new BusinessModel.StartBuildingTierThreeFileModel({
      user_id: Credentials._id,
    });
    const newStartBuildingTierFourFile = new BusinessModel.StartBuildingTierFourFileModel({
      user_id: Credentials._id,
    });

    const userAddress = await newUserAddress.save();
    const userDetails = await newUserDetails.save();
    const individualIdentity = await newIndividualIdentity.save();
    const moduleOneStatus = await newModuleOneStatus.save();
    const einFile = await newEinFile.save();
    const monitorDunsFile = await newMonitorDunsFile.save();
    const monitorExperianFile = await newMonitorExperianFile.save();
    const monitorEquifaxFile = await newMonitorEquifaxFile.save();
    const lexisFile = await newLexisFile.save();
    const chexSystemFile = await newChexSystemFile.save();
    const startBuildingTierOneFile = await newStartBuildingTierOneFile.save();
    const startBuildingTierTwoFile = await newStartBuildingTierTwoFile.save();
    const startBuildingTierThreeFile = await newStartBuildingTierThreeFile.save();
    const startBuildingTierFourFile = await newStartBuildingTierFourFile.save();
    console.log('User Address saved:', userAddress);
    console.log('User Details saved:', userDetails);
    console.log('User Individual Identity saved:', individualIdentity);
    console.log('moduleOneStatus :', moduleOneStatus);
  } catch (e) {
    console.error('Error saving user data:', e);
  }
};

moduleOneEvent.on('PasswordSave', moduleOneSignUpParts);
