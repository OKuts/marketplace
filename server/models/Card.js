"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = require("mongoose");
const cardSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true },
});
exports.Card = (0, mongoose_1.model)('Card', cardSchema);
