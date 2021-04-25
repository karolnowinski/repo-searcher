import { css } from "styled-components"; 

const Button = css`
  padding: 8px;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-image: linear-gradient(to right, var(--primary) 0%, var(--primary-light) 100%);
  background-size: 200% auto;
  transition: background 0.7s ease;

    @media (min-width: 500px) {
      padding: 16px;
    } 

  :hover {
    background-position: right center;
  }
`;

export default Button;