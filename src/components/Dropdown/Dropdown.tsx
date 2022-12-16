import styled, {CSSProp, CSSProperties} from "styled-components";
import {theme} from "../../styles/theme";

type DropdownProps = {
  marginTop?: number
  top?: number
}

type DropdownItemProps = {
  paddingY?: number
  paddingX?: number
}

export const Dropdown = styled.ul<DropdownProps>`
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0 0 40px rgba(39, 95, 158, 0.1);
  border-radius: 10px;
  margin-top: ${({marginTop}) => marginTop ? marginTop : '24px'};
  top: ${({top}) => top ? top : '60px'};
  left: 0;
`

export const DropdownItem = styled.li<DropdownItemProps>`
  padding: ${({paddingY}) => paddingY ? paddingY : 10}px ${({paddingX}) => paddingX ? paddingX : 15}px;
  font-size: ${theme.fontSizes.m};
  width: 100%;
  white-space: nowrap;
  transition: ${theme.transition.base};

  &:hover {
    background-color: ${theme.colors.bgGray};
  }
`
