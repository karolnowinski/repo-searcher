import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  img {
    &:first-of-type {
      margin-right: 1rem;
    }
    &:last-of-type {
      margin-left: 1rem;
    }
  }
`;

export const Body = styled.div`
  height: 1.5rem;
  width: 3rem;
  background-color: white;
  border-radius: 0.75rem;
  cursor: pointer;
  padding: 0.3125rem;
  position: relative;

  &:hover {
    & > div {
      background-color: var(--primary-light);
    }
  }
`;

export const Slider = styled.div`
  background-color: var(--primary);
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  transition: right 0.3s;
  transform: ${(props) => (props.dark ? "translateX(24px)" : "initial")};
  transition: all 0.3s;
`;