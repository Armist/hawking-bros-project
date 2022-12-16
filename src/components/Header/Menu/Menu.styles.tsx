import styled, {css} from "styled-components";
import {theme} from "../../../styles/theme";
import {NavLink} from "react-router-dom";

const MenuItemTextStyle = css`
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.l};
`

const MenuDropdownLinkStyle = css`
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
`

export const Menu = styled.nav`
  position: fixed;
  width: 100%;
  height: calc(100% - ${theme.header.bottomHeight});
  top: ${theme.header.bottomHeight};
  left: 100%;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: ${theme.transition.base};
  
  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }

  @media screen and (max-width: ${theme.breakpoints.header}) {
    display: block;
  }
`
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const MenuDropdown = styled.ul`
  margin-top: 12px;
  max-height: 0;
  height: 100%;
  transition: ${theme.transition.base};
  opacity: 0;
  overflow: hidden;
  width: 100%;
`

export const MenuItem = styled.li`
  cursor: pointer;
  padding: 12px 20px;
  transition: ${theme.transition.base};
  text-align: center;

  ${MenuItemTextStyle}
  span {
    display: flex;
    align-items: center;
  }

  svg {
    transition: ${theme.transition.base};
    color: ${theme.colors.yellow};
  }

  &:nth-last-child(1) {
    color: ${theme.colors.violet};
  }

  &:nth-last-child(2) {
    color: ${theme.colors.red};
  }

  &:not(:nth-child(6)):hover {
    background-color: #f8f8f8;
  }
`

export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const MenuDropdownTrigger = styled.button`
  ${MenuItemTextStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const MenuDropdownItem = styled.li`
  padding: 16px 0 16px 0;
  width: 100%;
  position: relative;

  &:hover {
    background-color: #f8f8f8;
  }
`

export const TriggerText = styled.span``
export const TriggerIcon = styled.span`
  margin-left: 11px;
  display: flex;
  justify-content: flex-end;
  transition: ${theme.transition.base};
`

export const MenuDropdownLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  ${(MenuDropdownLinkStyle)};
  width: 100%;
  text-align: center;
`
