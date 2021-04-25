import styled from "styled-components";
import iconWarning from "../../../assets/icon-warning.svg";

const StyledError = styled.div`
  color: var(--text);
  font-size: 16px;
  padding: 20px;
  position: relative;
  width: fit-content;
  margin: 0 auto; 

  :before {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(${iconWarning});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    left: -10px;
  }
`;

export default StyledError;