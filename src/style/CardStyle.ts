import styled from "styled-components";
export const FrontContainer = styled.div`
  display: flex;
  width: 350px;
  display: flex;
  height: 180px;
  flex-direction: column;
  background-color: var(--black);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid var(--secondary-color);
  h3 {
    color: var(--primary-color);
    filter: brightness(2)
 
  }
  span {
    color: var(--secondary-color);

    position: absolute;
    bottom: 5px;
    left: 5px;
  }
`;

export const VerseContainer = styled.div`
  display: flex;
  width: 350px;
  display: flex;
  height: 180px;
  flex-direction: column;
  background-color: var(--black);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid var(--primary-color);
  p {
    width: 90%;
    color: white;
    text-align: justify;
 
  }
  span {
    color: var(--primary-color);

    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;