import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 8rem 6rem;
  justify-content: space-between;
  flex-wrap: wrap;
  width: auto;
  min-height: 172.65px;
  max-height: 400px;
  height: 100%;
  padding: 37px;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.7236px;
  @media (max-width: 1050px) {
    margin: 4rem;
  }
  @media (max-width: 550px) {
    margin: 2rem;
  }
  gap: 30px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
`;
export const Text = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: ${({ fw }) => (fw ? `${fw}` : "500")};
  font-size: ${({ size }) => (size ? `${size}px` : "12px")};
  line-height: ${({ size }) => (size ? `${+size * 1.5}px` : "20px")};
  color: ${({ color }) => (color ? color : "#0E0E0E")};
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 189.14px;
  height: 59.4px;
  text-align: center;
  background: #000000;
  border-radius: 40px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  border: none;
`;
