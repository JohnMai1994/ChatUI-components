import styled, {css} from "styled-components"
import {circle} from "../../utils/mixins";


const circleMixinFunc = (color, size = "8px") => css`
    content: "";
    display: block;
    position: absolute;
    ${circle(color, size)}
`
const AvatarCircleSize = (size) => css`
   width: ${size};
  height:  ${size};
`


const StyleAvatar = styled.div`
  position: relative;
`;


const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;
  
  &::before {
   ${({size, statusIconSize}) => {
    switch (size) {
        case "xs":
            statusIconSize = "3px";
            break;
        case "s":
            statusIconSize = "6px";
            break;
        case "l":
            statusIconSize = "12px";
            break;
        case "xl":
            statusIconSize = "16px";
            break;
        case "m":
            statusIconSize = "8px";
            break;
        default:
    }
    return circleMixinFunc("#ebf0fa", statusIconSize)
}};
    transform: scale(2);
  }
  
  &::after {
  ${({theme, status, size, statusIconSize}) => {
    switch (size) {
        case "xs":
            statusIconSize = "3px";
            break;
        case "s":
            statusIconSize = "6px";
            break;
        case "l":
            statusIconSize = "12px";
            break;
        case "xl":
            statusIconSize = "16px";
            break;
        case "m":
            statusIconSize = "8px";
            break;
        default:
    }


    if (status === "online") {
        return circleMixinFunc(theme.green, statusIconSize)
    } else if (status === "offline") {
        return circleMixinFunc(theme.gray, statusIconSize)
    }


}}
  
`;

const AvatarClip = styled.div`
  ${({size}) => {
    if (size.includes("px")) {
        return AvatarCircleSize(size)
    } else {
        switch (size) {
            case "xs":
                return AvatarCircleSize("24px")
            case "s":
                return AvatarCircleSize("36px")
            case "l":
                return AvatarCircleSize("72px")
            case "xl":
                return AvatarCircleSize("96px")
            default:
                return AvatarCircleSize("48px")

        }
    }
}};

  border-radius: 50%;
  overflow: hidden;

`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

`;


export default StyleAvatar;
export {StatusIcon, AvatarClip, AvatarImage}