"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    phone: { type: Number, require: true }
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
