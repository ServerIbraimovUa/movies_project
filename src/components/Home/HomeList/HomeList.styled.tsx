import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const List=styled.ul`

@media ${device.tablet}{
        width: 636px;
    }
@media ${device.desktop}{
        width: 884px;
    }
`