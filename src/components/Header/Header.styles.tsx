import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {theme} from "../../styles/theme";

export const StyledHeader = styled.header`
`

export const NavigationInner = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

type NavigationProps = {
    position: 'top' | 'bottom'
}

export const Navigation = styled.nav<NavigationProps>`
  height: ${props => props.position === 'top' ? '40px' : '60px'};
  background-color: ${(props) => props.position === 'top' ? '#F8F8F8' : '#FFF'};
  box-shadow: ${props => props.position === 'bottom' ? '0px 10px 20px rgba(0, 0, 0, 0.08)' : 'none'};
`

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const NavigationItem = styled.li<NavigationProps>`
  height: 100%;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: ${props => props.position === 'top' ? '57px' : '80px'};
  }
`

export const NavigationLink = styled(NavLink)<NavigationProps>`
  padding: ${props => props.position === 'top' ? '11px 0 12px 0' : '21px 0 22px 0'};
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  transition: all .3s linear;

  color: ${props => props.position === 'top' ? '#8291A3' : '#1E2123'};
  font-weight: ${props => props.position === 'top' ? 400 : 600};
  font-size: 14px;
  line-height: 17px;

  svg {
    margin-right: ${props => props.position === "top" ? '5px' : 0};
    margin-left: ${props => props.position === "bottom" ? "15px" : 0};

    color: ${theme.colors.yellow};
  }

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all .3s linear;
    content: '';
    width: 0;
    height: 3px;
    background-color: #ffd54f;
  }

  &:hover {
    color: #1E2123;
  }

  &:hover:before {
    width: 100%;
  }

  &.active {
    color: #1e2123;

    &:before {
      width: 100%;
    }
  }
`