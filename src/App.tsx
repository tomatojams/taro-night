import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  justify-content: center;
  align-items: center;

  background-image: url("/back1.jpg"); /* 바탕화면에 이미지 설정 */
  background-size: cover; /* 이미지가 화면 전체를 덮도록 설정 */
  background-position: center; /* 이미지를 중앙에 위치시킴 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */
`;

const BoxWrapper = styled(motion.div)`
  width: 200px;
  height: 300px;
  position: relative;
  perspective: 1000px; /* 3D 효과를 위해 원근법 설정 */
`;
const BoxContainer = styled(motion.div)`
  width: 200px;
  height: 300px;
  position: relative;
  perspective: 1000px; /* 3D 효과를 위해 원근법 설정 */
`;

const BoxFace = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card1 = styled(BoxFace)`
  background-image: url("/card/front.png"); /* 이미지 경로 */
  background-size: cover; /* 이미지를 카드에 맞게 크기 조정 */
  background-position: center; /* 이미지가 카드의 중앙에 위치하도록 설정 */
`;

const Card2 = styled(BoxFace)`
  background-image: url("/card/back.png"); /* 이미지 경로 */
  background-size: cover; /* 이미지를 카드에 맞게 크기 조정 */
  background-position: center; /* 두 번째 카드 색상 (검정색) */
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
`;
// 애니메이션 변수
const SvgVariants: Variants = {
  start: {
    pathLength: 0, // 진행정도 0
    fill: "rgba(255,255,255,0.1)",
  },
  end: {
    pathLength: 1, // 진행정도 1
    fill: "rgba(255,255,255,1)",

    transition: {
      default: { duration: 5 },
      fill: {
        // 개개별 타이밍 설정 가능
        duration: 10,
        delay: 5,
      },
    },
  },
  // path 속성에 바로 들어감
  path: {
    strokeWidth: 5,
  },
};

const RotatingCard = () => {
  return (
    <>
      <Wrapper>
        {/* <Svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <motion.path
            variants={SvgVariants}
            initial="start"
            animate="end"
            stroke="white"
            d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
          />
        </Svg> */}
        <BoxWrapper initial={{ y: 300 }} animate={{ y: 50 }} transition={{ duration: 5 }}>
          <BoxContainer
            animate={{ rotateY: 1800, rotateZ: 45 }} // Y축을 기준으로 360도 회전
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }} // 회전 애니메이션 반복
          >
            <Card1
              animate={{
                opacity: [
                  1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
                ],
              }} // 0도와 180도에서 보이고, 90도와 270도에서 안 보임
              transition={{ repeat: Infinity, duration: 5, times: [0, 0.25, 0.5, 0.75, 1] }} // 중간 변화 없이 단계적으로 변환
            />
            <Card2
              animate={{
                opacity: [
                  0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0,
                ],
              }} // 90도와 270도에서 보이고, 0도와 180도에서 안 보임
              transition={{ repeat: Infinity, duration: 5, times: [0, 0.25, 0.5, 0.75, 1] }} // 중간 변화 없이 단계적으로 변환
            />
          </BoxContainer>
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

export default RotatingCard;
