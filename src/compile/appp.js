"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var Wrapper = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));\n  justify-content: center;\n  align-items: center;\n"])));
var WrapperBox = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var BoxContainer = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 200px;\n  height: 300px;\n  position: relative;\n  perspective: 1000px; /* 3D \uD6A8\uACFC\uB97C \uC704\uD574 \uC6D0\uADFC\uBC95 \uC124\uC815 */\n"], ["\n  width: 200px;\n  height: 300px;\n  position: relative;\n  perspective: 1000px; /* 3D \uD6A8\uACFC\uB97C \uC704\uD574 \uC6D0\uADFC\uBC95 \uC124\uC815 */\n"])));
var BoxFace = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 40px;\n  box-shadow:\n    0 2px 3px rgba(0, 0, 0, 0.1),\n    0 10px 20px rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backface-visibility: hidden; /* \uB4B7\uBA74 \uC228\uAE40 \uCC98\uB9AC */\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 40px;\n  box-shadow:\n    0 2px 3px rgba(0, 0, 0, 0.1),\n    0 10px 20px rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backface-visibility: hidden; /* \uB4B7\uBA74 \uC228\uAE40 \uCC98\uB9AC */\n"])));
var Front = styled_components_1["default"](BoxFace)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: rgba(255, 255, 255, 1); /* \uC55E\uBA74 \uC0C9\uC0C1 */\n  transform: rotateY(0deg); /* \uC55E\uBA74\uC740 \uAE30\uBCF8 \uC0C1\uD0DC */\n"], ["\n  background-color: rgba(255, 255, 255, 1); /* \uC55E\uBA74 \uC0C9\uC0C1 */\n  transform: rotateY(0deg); /* \uC55E\uBA74\uC740 \uAE30\uBCF8 \uC0C1\uD0DC */\n"])));
var Back = styled_components_1["default"](BoxFace)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 1); /* \uB4B7\uBA74 \uC0C9\uC0C1 */\n  transform: rotateY(180deg); /* \uB4B7\uBA74\uC740 180\uB3C4 \uD68C\uC804 \uC0C1\uD0DC */\n"], ["\n  background-color: rgba(0, 0, 0, 1); /* \uB4B7\uBA74 \uC0C9\uC0C1 */\n  transform: rotateY(180deg); /* \uB4B7\uBA74\uC740 180\uB3C4 \uD68C\uC804 \uC0C1\uD0DC */\n"])));
var RotatingCard = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(WrapperBox, { initial: { y: 200 }, animate: { y: 0 }, transition: { duration: 5 } },
            React.createElement(BoxContainer, { animate: { rotateY: 1800, rotateZ: 45 }, transition: { repeat: Infinity, duration: 15, ease: "linear" } },
                React.createElement(Front, null),
                " \uC55E\uBA74",
                React.createElement(Back, null)))));
};
exports["default"] = RotatingCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
