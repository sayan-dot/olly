import { createGlobalStyle } from "styled-components";
import customfont from "./font/ROGO.ttf";
import montserratL from "./font/Montserrat-Medium.ttf";
import montserratB from "./font/Montserrat-Bold.ttf";
import montserratSemi from "./font/Montserrat-SemiBold.ttf";

const Globalstyles = createGlobalStyle`
@font-face {
    font-family: rogo;
    src: url(${customfont})
}
@font-face {
    font-family: montserrat-light;
    src: url(${montserratL})
}
@font-face {
    font-family: montserrat-bold;
    src: url(${montserratB})
}
@font-face {
    font-family: montserrat-sem;
    src: url(${montserratSemi})
}
    *{
        margin:0;
        padding:0;
        box-sizing: 'border-box'
    }
    html,body{
        height:100%;
        width:100%;
        font-family: montserrat-light;
    }
    a{
        text-decoration: none;
    }
`;

export default Globalstyles;
