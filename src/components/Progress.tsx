import styled from "styled-components";

const Progress = styled.div<{ value: number }>`
    width: 0;
    height: 40px;
    background-color: #229000;
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    transition: all 500ms ease;
    animation: widthAnimation 0.5s;
    animation-delay: 250ms;
    animation-fill-mode: forwards;
    @keyframes widthAnimation {
        from { width: 0; }
        to { width: ${(props) => props.value * 100}%; }
    }
    div {
        margin: 0 12px;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export default Progress;