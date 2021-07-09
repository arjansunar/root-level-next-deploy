import styled from "styled-components";
import { defaultStyles } from "../../defaults/defaults";

export const InfoWrapper = styled.div`
    max-width: 1180px;
    width: 90%;
    margin: 5rem auto;
`
const infoStyles = { ...defaultStyles.whatWeDo.infoSection }
export const Title = styled.h2`
    text-align: center;
    font-size: ${infoStyles.title.fontSize};
    font-weight: ${infoStyles.title.fontWeight};
    line-height: ${infoStyles.title.lineHeight};
    color: ${infoStyles.title.color};
    font-family: ${infoStyles.title.fontFamily};
`

export const Desc = styled.p`
    margin-top: 1rem;
    text-align: center;
    font-size: ${infoStyles.description.fontSize};
    font-weight: ${infoStyles.description.fontWeight};
    line-height: ${infoStyles.description.lineHeight};
    color: ${infoStyles.description.color};
    font-family: ${infoStyles.description.fontFamily};
`
