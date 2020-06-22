"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var add = function (a, b) { return Math.pow(a, b); };
app.get('/', function (req, res, next) {
    res.send("Hasil dari 2 <sup>2</sup> adalah " + add(2, 2));
});
app.listen(5000, function () { return console.log('Server Running...'); });
