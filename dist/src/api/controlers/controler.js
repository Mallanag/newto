"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_schema_1 = require("../schemas/profile.schema");
class HealthController {
    health(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).json('Status up');
        });
    }
    ;
    main(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).json('Start up');
        });
    }
    ;
    profile(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.send('Start up' + request.params.id);
        });
    }
    ;
}
exports.HealthController = HealthController;
class Profile {
    addProfile(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const postData = request.body;
            const createdProfile = new profile_schema_1.User({
                name: postData.name,
                age: postData.age,
                mobile: postData.mobile,
                company: postData.company,
            });
            const user = yield createdProfile.save();
            response.status(201).json(user);
        });
    }
    ;
}
exports.Profile = Profile;
