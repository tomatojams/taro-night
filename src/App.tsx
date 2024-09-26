import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  justify-content: center;
  align-items: center;

  background-image: url("/taro-night/back1.jpg"); /* 바탕화면에 이미지 설정 */
  background-size: cover;
  background-position: center; /* 이미지를 중앙에 위치시킴 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */
`;

const BoxWrapper = styled(motion.div)`
  width: 200px;
  height: 300px;
  position: relative;
  perspective: 1000px; /* 3D 효과를 위해 원근법 설정 */
`;

const TextWrapper = styled(motion.div)`
  position: absolute;
  top: 200px;
  left: 100px;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
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
  background-image: url("/taro-night/card/front.png"); /* 이미지 경로 */
  background-size: cover; /* 이미지를 카드에 맞게 크기 조정 */
  background-position: center; /* 이미지가 카드의 중앙에 위치하도록 설정 */
`;

const Card2 = styled(BoxFace)`
  background-image: url("/taro-night/card/back.png"); /* 이미지 경로 */
  background-size: cover; /* 이미지를 카드에 맞게 크기 조정 */
  background-position: center; /* 두 번째 카드 색상 (검정색) */
`;

const RotatingCard = () => {
  const textArray = "Find your destiny...".split(""); // 텍스트를 한 글자씩 배열로 분리
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 }, // 초기 상태
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // 글자가 하나씩 차례대로 나타나도록 딜레이 설정
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <Wrapper>
        {/* 텍스트 애니메이션 */}
        <TextWrapper>
          {textArray.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              style={{ marginRight: letter === " " ? "10px" : "0" }} // 공백일 때 여백 추가
            >
              {letter}
            </motion.span>
          ))}
        </TextWrapper>

        <BoxWrapper
          animate={{ y: [230, 200] }} // 위아래로 움직임
          transition={{
            repeat: Infinity, // 무한 반복
            repeatType: "mirror", // 위아래로 왔다 갔다 하는 애니메이션
            duration: 3, // 애니메이션이 3초에 걸쳐 일어남
            ease: "easeInOut", // 자연스러운 애니메이션 효과
          }}>
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
