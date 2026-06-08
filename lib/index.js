"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;

// ---- استدعاء مكتبة cfonts لعمل الخط الكبير التلقائي مثل الصورة ----
const cfonts = require('cfonts');

// طباعة كلمة GOJO بخط البلوكات الكبير باللون الأصفر (مثل نمط الـ Block/Simple)
cfonts.say('GOJO', {
    font: 'block',              // نوع الخط الكبير (البلوكات الممتلئة)
    align: 'left',              // المحاذاة لليصار
    colors: ['yellow'],         // اللون الأصفر المطلوب
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
});

// طباعة بقية النصوص الملونة بالطريقة القياسية المتوافقة مع جهازك
console.log("\x1b[1;32m%s\x1b[0m", "Welcome to Gojo's World");
console.log("\x1b[1;34m%s\x1b[0m", "The Bayless DB has been updated with very luxurious ADDITIONS");
console.log("\x1b[37m%s\x1b[0m", "Updated Date : 2026-6-6");
console.log(""); 
// -----------------------------------------------------------------

const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", { enumerable: true, get: function () { return WAProto_1.proto; } });
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;
