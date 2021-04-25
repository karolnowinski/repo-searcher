import styled from "styled-components";
import button from "../../../styles/Button.css";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    max-width: var(--content-width);
    margin: 20px auto;
    height: auto;

    @media (min-width: 800px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 1366px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

export const ShowMoreButton = styled.button`
    ${button};
    margin-top: 10px;
    width: 200px;
`;
