import styled from "styled-components";

const MiniFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows + 9 - props.rows }, 1fr);
  width: 100vw;
  height: calc(80vh - 60px);
`;

export default MiniFrame;
