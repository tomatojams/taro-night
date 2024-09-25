"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var Wrapper = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));\n  justify-content: center;\n  align-items: center;\n\n  background-image: url(\"/back1.jpg\"); /* \uBC14\uD0D5\uD654\uBA74\uC5D0 \uC774\uBBF8\uC9C0 \uC124\uC815 */\n  background-size: cover; /* \uC774\uBBF8\uC9C0\uAC00 \uD654\uBA74 \uC804\uCCB4\uB97C \uB36E\uB3C4\uB85D \uC124\uC815 */\n  background-position: center; /* \uC774\uBBF8\uC9C0\uB97C \uC911\uC559\uC5D0 \uC704\uCE58\uC2DC\uD0B4 */\n  background-repeat: no-repeat; /* \uC774\uBBF8\uC9C0\uAC00 \uBC18\uBCF5\uB418\uC9C0 \uC54A\uB3C4\uB85D \uC124\uC815 */\n"], ["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));\n  justify-content: center;\n  align-items: center;\n\n  background-image: url(\"/back1.jpg\"); /* \uBC14\uD0D5\uD654\uBA74\uC5D0 \uC774\uBBF8\uC9C0 \uC124\uC815 */\n  background-size: cover; /* \uC774\uBBF8\uC9C0\uAC00 \uD654\uBA74 \uC804\uCCB4\uB97C \uB36E\uB3C4\uB85D \uC124\uC815 */\n  background-position: center; /* \uC774\uBBF8\uC9C0\uB97C \uC911\uC559\uC5D0 \uC704\uCE58\uC2DC\uD0B4 */\n  background-repeat: no-repeat; /* \uC774\uBBF8\uC9C0\uAC00 \uBC18\uBCF5\uB418\uC9C0 \uC54A\uB3C4\uB85D \uC124\uC815 */\n"])));
var BoxWrapper = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 200px;\n  height: 300px;\n  position: relative;\n  perspective: 1000px; /* 3D \uD6A8\uACFC\uB97C \uC704\uD574 \uC6D0\uADFC\uBC95 \uC124\uC815 */\n"], ["\n  width: 200px;\n  height: 300px;\n  position: relative;\n  perspective: 1000px; /* 3D \uD6A8\uACFC\uB97C \uC704\uD574 \uC6D0\uADFC\uBC95 \uC124\uC815 */\n"])));
var BoxContainer = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 200px;\n  height: 300px;\n  position: relative;\n  perspective: 1000px; /* 3D \uD6A8\uACFC\uB97C \uC704\uD574 \uC6D0\uADFC\uBC95 \uC124\uC815 */\n"], ["\n  width: 200px;\n  height: 300px;\n  position: relative;\n  perspective: 1000px; /* 3D \uD6A8\uACFC\uB97C \uC704\uD574 \uC6D0\uADFC\uBC95 \uC124\uC815 */\n"])));
var BoxFace = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 10px;\n  box-shadow:\n    0 2px 3px rgba(0, 0, 0, 0.15),\n    0 10px 20px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 10px;\n  box-shadow:\n    0 2px 3px rgba(0, 0, 0, 0.15),\n    0 10px 20px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Card1 = styled_components_1["default"](BoxFace)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-image: url(\"/card/front.png\"); /* \uC774\uBBF8\uC9C0 \uACBD\uB85C */\n  background-size: cover; /* \uC774\uBBF8\uC9C0\uB97C \uCE74\uB4DC\uC5D0 \uB9DE\uAC8C \uD06C\uAE30 \uC870\uC815 */\n  background-position: center; /* \uC774\uBBF8\uC9C0\uAC00 \uCE74\uB4DC\uC758 \uC911\uC559\uC5D0 \uC704\uCE58\uD558\uB3C4\uB85D \uC124\uC815 */\n"], ["\n  background-image: url(\"/card/front.png\"); /* \uC774\uBBF8\uC9C0 \uACBD\uB85C */\n  background-size: cover; /* \uC774\uBBF8\uC9C0\uB97C \uCE74\uB4DC\uC5D0 \uB9DE\uAC8C \uD06C\uAE30 \uC870\uC815 */\n  background-position: center; /* \uC774\uBBF8\uC9C0\uAC00 \uCE74\uB4DC\uC758 \uC911\uC559\uC5D0 \uC704\uCE58\uD558\uB3C4\uB85D \uC124\uC815 */\n"])));
var Card2 = styled_components_1["default"](BoxFace)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-image: url(\"/card/back.png\"); /* \uC774\uBBF8\uC9C0 \uACBD\uB85C */\n  background-size: cover; /* \uC774\uBBF8\uC9C0\uB97C \uCE74\uB4DC\uC5D0 \uB9DE\uAC8C \uD06C\uAE30 \uC870\uC815 */\n  background-position: center; /* \uB450 \uBC88\uC9F8 \uCE74\uB4DC \uC0C9\uC0C1 (\uAC80\uC815\uC0C9) */\n"], ["\n  background-image: url(\"/card/back.png\"); /* \uC774\uBBF8\uC9C0 \uACBD\uB85C */\n  background-size: cover; /* \uC774\uBBF8\uC9C0\uB97C \uCE74\uB4DC\uC5D0 \uB9DE\uAC8C \uD06C\uAE30 \uC870\uC815 */\n  background-position: center; /* \uB450 \uBC88\uC9F8 \uCE74\uB4DC \uC0C9\uC0C1 (\uAC80\uC815\uC0C9) */\n"])));
var Svg = styled_components_1["default"].svg(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 300px;\n  height: 300px;\n"], ["\n  width: 300px;\n  height: 300px;\n"])));
// 애니메이션 변수
var SvgVariants = {
    start: {
        pathLength: 0,
        fill: "rgba(255,255,255,0.1)"
    },
    end: {
        pathLength: 1,
        fill: "rgba(255,255,255,1)",
        transition: {
            "default": { duration: 5 },
            fill: {
                // 개개별 타이밍 설정 가능
                duration: 10,
                delay: 5
            }
        }
    },
    // path 속성에 바로 들어감
    path: {
        strokeWidth: 5
    }
};
var RotatingCard = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Wrapper, null,
            React.createElement(BoxWrapper, { initial: { y: 300 }, animate: { y: 50 }, transition: { duration: 5 } },
                React.createElement(BoxContainer, { animate: { rotateY: 1800, rotateZ: 45 }, transition: { repeat: Infinity, duration: 25, ease: "linear" } },
                    React.createElement(Card1, { animate: {
                            opacity: [
                                1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
                            ]
                        }, transition: { repeat: Infinity, duration: 5, times: [0, 0.25, 0.5, 0.75, 1] } }),
                    React.createElement(Card2, { animate: {
                            opacity: [
                                0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0,
                            ]
                        }, transition: { repeat: Infinity, duration: 5, times: [0, 0.25, 0.5, 0.75, 1] } }))))));
};
exports["default"] = RotatingCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
