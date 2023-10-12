import ReactConfetti from "react-confetti";
import styled from "styled-components";
import useWindowSize from "~/hooks/useWindowSize";

const SuccessConfettiContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    canvas {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export default function SuccessConfetti() {
  const { width, height } = useWindowSize();
  return (
    <SuccessConfettiContainer>
      <ReactConfetti width={ width } height={ height } />
    </SuccessConfettiContainer>
  );
}