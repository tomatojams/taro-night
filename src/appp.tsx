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
`;

const WrapperBox = styled(motion.div)``;

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
  border-radius: 40px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden; /* 뒷면 숨김 처리 */
`;

const Front = styled(BoxFace)`
  background-color: rgba(255, 255, 255, 1); /* 앞면 색상 */
  transform: rotateY(0deg); /* 앞면은 기본 상태 */
`;

const Back = styled(BoxFace)`
  background-color: rgba(0, 0, 0, 1); /* 뒷면 색상 */
  transform: rotateY(180deg); /* 뒷면은 180도 회전 상태 */
`;

const RotatingCard = () => {
  return (
    <Wrapper>
      <WrapperBox initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 5 }}>
        <BoxContainer
          animate={{ rotateY: 1800, rotateZ: 45 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}>
          <Front /> 앞면
          <Back />
        </BoxContainer>
      </WrapperBox>
    </Wrapper>
  );
};

export default RotatingCard;
