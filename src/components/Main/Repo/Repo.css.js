import styled from "styled-components";
import iconStar from "../../../assets/icon-star.svg";
import langColors from "../../../db/colors.json";
import button from "../../../styles/Button.css";

export const Wrapper = styled.article`
    background-color: var(--element-background);
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: auto auto 30px 30px;
    gap: 0px 0px;
    grid-template-areas:
        "title title"
        "description description"
        "language stars"
        "link link";
    border-top: 3px solid ${(props) => (props.lang ? `${langColors[props.lang]["color"]}` : "grey")};

    :hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
`;

export const Title = styled.h2`
    grid-area: title;
    color: var(--text);
    text-align: center;
`;

export const Description = styled.p`
    padding: 20px 0;
    grid-area: description;
    display: flex;
    align-items: flex-start;
    color: var(--text-second);
    text-align: center;
    /* word-break: break-all; */
    /* overflow-wrap: break-word; */
    /* white-space: pre-line; */
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
`;

export const Language = styled.span`
    grid-area: language;
    color: var(--text-second);
    position: relative;
    margin-left: 20px;

    :before {
        content: '';
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background-color: ${(props) => (props.lang ? `${langColors[props.lang]["color"]}` : "grey")};
        margin-right: 8px;
        display: inline-block;
        position: absolute;
        top: 22%;
        transform: translateY(-50%);
        left: -20px;
    }
`;

export const Stars = styled.span`
    grid-area: stars;
    color: var(--text-second);
    position: relative;

    :before {
        content: '';
        background-image: url(${iconStar});
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        display: inline-block;
        position: absolute;
        top: 22%;
        transform: translateY(-50%);
        left: -20px;
    }
`;

export const Link = styled.a`
    ${button};
    grid-area: link;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    color: white;
    font-weight: 700;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
