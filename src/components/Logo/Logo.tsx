import styled from "styled-components";
import LogoImg from "../../assets/logo.png";
import React from "react";
import {Link} from "react-router-dom";

const StyledLogo = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  height: 19px;
  width: 134px;
  cursor: pointer;
`

interface ILogo {
  onClick?: () => void
  onMouseEnter?: () => void
}

export const Logo: React.FC<ILogo> = ({onClick, onMouseEnter}) => {
  return <Link to={'/'} onClick={onClick} onMouseEnter={onMouseEnter} style={{marginRight: -10}}>
    <StyledLogo alt={'Logo'} src={LogoImg}/>
  </Link>
}
