import styled from "styled-components";

export const HeaderCart = styled.header`
  background-color: var(--color-3);
  border-radius: 8px 8px 0px 0px;
  width: 85%;
  height: 4vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
  color: var(--text-button);

  @media screen and (min-width: 1024px) {
    width: 55%;
  }
`;

export const EmptyCart = styled.div`
  background-color: var(--color-1);
  width: 85%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  h4 {
    font-size: 30px;
  }
  @media screen and (min-width: 1024px) {
    width: 55%;
  }
`;
export const AddItens = styled.button`
  background-color: var(--color-1);
  border: 1px solid var(--color-1);
  font-size: 16px;
  font-weight: bold;
  color: var(--color-4);
  :hover {
    color: var(--color-3);
  }
`;
export const UlCart = styled.ul`
  background-color: var(--color-1);
  width: 85%;
  height: 70vh;
  overflow-y: scroll;
  @media screen and (min-width: 1024px) {
    width: 55%;
  }
`;
export const LiCart = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--color-2);

  figure {
    display: flex;
    align-items: center;
    height: 35vh;
  }
  img {
    height: 30vh;
  }

  h3 {
    width: 29%;
  }

  p {
    color: var(--color-4);
    font-size: 22px;
  }

  > button {
    background-color: var(--color-1);
    border: none;
    font-size: 22px;
  }
  > button:hover {
    color: var(--button-hover);
  }
`;
