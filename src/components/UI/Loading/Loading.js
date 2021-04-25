import React from "react";
import {Wrapper, Loader} from "./Loading.css";

function Loading() {
    return (<Wrapper>
        <Loader><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></Loader>
    </Wrapper>);
}

export default Loading;