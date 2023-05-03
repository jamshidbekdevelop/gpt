import styled from "styled-components";

export const Box = styled.div`
min-width: 300px;
  max-width: ${({ width }) => (width ? `${width}px` : "340px")};
  height: ${({ height }) => (height ? `${height}px` : "324px")};
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: ${({ height }) => (height ? "288px" : "131px")};
`;
export const Bottom = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? "408px" : "194px")};
  padding: ${({ height }) => (height ? "30px" : "20px")};
  box-sizing: border-box;
  background: #042c54;
  display: flex;
  flex-direction: column;
`;
export const P = styled.p`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: ${({ size }) => (size ? "800" : "700")};
  font-size: ${({ size }) => (size ? `${size}px` : "12px")};
  line-height: 30px;
  color: #ffffff;
  margin-top: ${({ mb }) => mb && `${mb}px`};
`;
