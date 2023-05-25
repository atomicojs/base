"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component1 = void 0;
var atomico_1 = require("atomico");
function component1() {
    return (<host shadowDom>
            <h1>Hi <slot /></h1>
        </host>);
}
component1.props = {
    myProp: String
};
component1.styles = (0, atomico_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    :host {\n        display: block;\n    }\n"], ["\n    :host {\n        display: block;\n    }\n"])));
exports.Component1 = (0, atomico_1.c)(component1);
var templateObject_1;
