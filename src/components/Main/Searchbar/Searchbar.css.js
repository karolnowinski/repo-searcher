import styled from "styled-components";
import searchIcon from "../../../assets/icon-search.svg";
import sortIcon from "../../../assets/icon-sort.svg";
import button from "../../../styles/Button.css";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: var(--content-width);
  height: 80px;
  background-color: var(--element-background);
  position: relative;
  bottom: 40px;
  border-radius: 6px;

  :before {
    content: '';
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    width: 26px;
    height: 26px;
    display: block;
    margin-left: 20px;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const LeftSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  padding-right: 20px;
  border-right: 1px solid var(--border-color);
`;

export const RightSide = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    width: 120px;
  }
`;

export const Input = styled.input`
  font-size: 12px;
  border: none;
  color: var(--text);
  background-color: var(--element-background);
  width: 95%;
  height: 100%;
  margin-left: 20px;

  @media (min-width: 400px) {
    font-size: 16px;
  }

  :focus {
    outline: none;
  } 

  ::placeholder {
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

export const SearchButton = styled.button`
  ${button};
`;

export const SortButton = styled.button`
    ${button};
    height: 100%;
    width: 100%;
    color: var(--grey);
    background-color: transparent;
    background-image: none;

  :hover {
    background-color: transparent;
    filter: brightness(80%);
  }
  
  :after {
    content: '';
    display: inline-block;
    background-image: url(${sortIcon});
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    margin: 0 8px;
  }
`;
