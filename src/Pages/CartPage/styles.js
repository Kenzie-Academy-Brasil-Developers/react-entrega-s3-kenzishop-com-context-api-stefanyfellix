import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

  > button {
    background-color: var(--color-4);
    border: 1px solid var(--color-4);
    color: var(--text-button);
    width: 5%;
    height: 4vh;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonHome = styled.div`
  padding-top: 20px;
  width: 15%;
  > button {
    background-color: var(--color-4);
    border: 1px solid var(--color-4);
    color: var(--text-button);
    width: 100%;
    height: 4vh;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > button:hover {
    background-color: var(--button-hover);
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 12%;
  }
  @media screen and (min-width: 1024px) {
    width: 8%;
  }
`;
