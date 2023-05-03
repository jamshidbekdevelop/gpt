import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && column};
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  flex: 1;
  max-width: 190px;
  margin-right: 2rem; 
  min-width: 180px;
`;
export const Line = styled.div`
  width: 38px;
  height: 3px;
  background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
    #ffffff;
    margin-bottom: 15px;
`;

export const H1 = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 800;
  font-size: ${({ size }) => (size ? `${size}px` : "24px")};
  line-height: 30px;
  letter-spacing: -0.04em;
  color: #ffffff;
`;
export const Text = styled.div`
  flex: 2;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #81afdd;
  max-width: ${({ mw }) => (mw ? `${mw}px` : "750px")};
`;
