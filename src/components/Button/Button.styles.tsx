import styled, {css} from "styled-components";
import {theme} from "../../styles/theme";

const buttonStyle = css`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
`

export const Button = styled.button`
  ${(buttonStyle)}
  padding: 10px 18px;
`

type GradientButtonProps = {
  primary?: boolean,
  reversed?: boolean
}

export const GradientButton = styled.button<GradientButtonProps>`
  max-height: 37px;
  ${(buttonStyle)}
  background: linear-gradient(90deg, #9D94FF 0%, #6B50E9 94.5%);
  box-shadow: 0px 15px 40px rgba(0, 96, 206, 0.15);
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  position: relative;
  z-index: 1;
  transition: ${theme.transition.base};

  padding: 10px 18px;

  color: ${props => props.primary ? theme.colors.white : theme.colors.black};

  svg {
    margin-left: 5px;
  }

  &:before {
    position: absolute;
    transition: ${theme.transition.base};
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    background: linear-gradient(90deg, #867CFC 0%, #6929F3 94.5%);
    border-radius: inherit;
    z-index: -1;
  }

  &:hover:before {
    opacity: 1;
  }
`

export const HeaderButton = styled(GradientButton)`
  @media screen and (max-width: ${theme.breakpoints.header}) {
    display: none;
  }
`

export const RoundButton = styled.button`
  ${(buttonStyle)};
  border-radius: 100%;
`
