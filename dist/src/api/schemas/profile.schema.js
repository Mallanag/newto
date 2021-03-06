"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const addProfile = new Schema({ name: { type: String, required: true },
    age: String,
    mobile: { type: Number, required: true },
    company: String,
});
exports.User = mongoose_1.default.model('user', addProfile);
