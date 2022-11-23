import styled from "styled-components";
import LogoImg from "../../assets/logo.png";

const StyledLogo = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
  height: 19px;
  width: 134px;
`

export const Logo = () => {
    return <StyledLogo alt={'Logo'} src={LogoImg}/>
}