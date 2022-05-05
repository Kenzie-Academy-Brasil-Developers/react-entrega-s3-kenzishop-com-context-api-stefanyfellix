import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--color-4);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  h1 {
    width: 30%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: space-between;

    h1 {
      width: 24%;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 7vh;
  gap: 4px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    width: 30%;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;

    width: 15%;
  }
`;
export const CartButton = styled.div`
  width: 110%;
  display: flex;
  align-items: center;
  span {
    font-size: 20px;
  }
`;

export const Buttons = styled.button`
  width: 100%;
  height: 3vh;
  display: flex;
  align-items: center;
  background-color: var(--color-4);
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-3);

  :hover {
    color: var(--color-1);
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
