"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_validator_1 = require("express-validator");
require("dotenv/config");
const Card_1 = require("./models/Card");
const Order_1 = require("./models/Order");
const env_config_1 = require("./services/env.config");
const index = (0, express_1.default)();
const env = new env_config_1.EnvConfig();
index.use(express_1.default.json());
index.use(express_1.default.urlencoded({ extended: true }));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(env.get('MONGO_URL'));
        index.listen(env.get('PORT'), () => {
            console.log('Server start ...');
        });
    }
    catch (e) {
        console.log('Error connecting to DB...');
        process.exit(1);
    }
});
index.get('/', (req, res) => {
    res.send('Root route...');
});
index.get('/api/cards', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cards = yield Card_1.Card.find();
        res.json(cards);
        console.log(cards);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}));
index.get('/api/order', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cards = yield Order_1.Order.find();
        console.log(cards);
        res.json(cards);
    }
    catch (error) {
        res
            .status(500)
            .json({ error });
    }
}));
index.post('/api/order', (0, express_validator_1.body)('name').isLength({ min: 6 }), (0, express_validator_1.body)('phone').isNumeric(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        const { name, phone } = req.body;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        const order = new Order_1.Order({ name, phone });
        yield order.save();
        res.json(order);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}));
start();
