import styled from "styled-components"
import Paragraph from "../Paragraph";
import {card} from "../../utils/mixins";
import StyleAvatar from "../Avatar/style";

const Name = styled(Paragraph).attrs({size: "large"})`
    grid-area: name;
`;

const Intro = styled(Paragraph).attrs({type: "secondary"})`
    grid-area: intro;
`;

const StyledContactCard = styled.div`
    ${card()};
    display: grid;
    grid-template-areas: 
      "avatar name"
      "avatar intro";
    grid-template-columns: 62px auto;
    
    ${StyleAvatar} {
      grid-area: avatar;
    }
`;

export default StyledContactCard
export {Name, Intro}