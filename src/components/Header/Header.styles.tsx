import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import {theme} from "../../styles/theme";

type NavigationProps = {
    position: 'top' | 'bottom'
}

type NavigationItemProps = {
    position: 'bottom' | 'top-right' | 'top-left'
}

type NavigationLinkProps = {
    position: 'bottom' | 'top-right' | 'top-left'
    color: string
}

export const StyledHeader = styled.header`
  height: auto;
  position: relative;
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

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const Navigation = styled.nav<NavigationProps>`
  height: ${props => props.position === 'top' ? theme.header.topHeight : theme.header.bottomHeight};
  background-color: ${(props) => props.position === 'top' ? '#F8F8F8' : '#FFF'};
  box-shadow: ${props => props.position === 'bottom' ? '0px 10px 20px rgba(0, 0, 0, 0.08)' : 'none'};

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    display: ${props => props.position === 'top' ? 'none' : 'block'};

    ${NavigationList} {
      display: ${props => props.position === 'bottom' ? 'none' : 'flex'};
    }
  }
`

export const NavigationItem = styled.li<NavigationItemProps>`
  height: 100%;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: ${
            props => props.position === 'top-left' ? '57px'
                    : props.position === 'bottom' ? '80px'
                            : props.position === 'top-right' ? '40px'
                                    : ''
    };
  }
`

export const NavigationLink = styled(NavLink)<NavigationLinkProps>`
  padding: ${
          props => (props.position === 'top-right' || props.position === 'top-left')
                  ? '11px 0 12px 0'
                  : '21px 0 22px 0'
  };
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  transition: all .3s linear;

  color: ${props => props.color};

  font-weight: ${
          props => (props.position === 'top-right' || props.position === 'top-left')
                  ? 400
                  : 600
  };
  font-size: 14px;
  line-height: 17px;

  svg {
    margin-right: ${props => props.position === "top-left" ? '5px' : 0};
    margin-left: ${props => props.position === "bottom" ? "15px" : props.position === 'top-right' ? '11px' : 0};

    color: ${props => props.position === 'bottom' ? theme.colors.yellow : 'inherit'};
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

export const NavigationBlankLink = styled.button<NavigationLinkProps>`
  padding: ${
          props => (props.position === 'top-right' || props.position === 'top-left')
                  ? '11px 0 12px 0'
                  : '21px 0 22px 0'
  };
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  transition: all .3s linear;

  color: ${props => props.color};

  font-weight: ${
          props => (props.position === 'top-right' || props.position === 'top-left')
                  ? 400
                  : 600
  };
  font-size: 14px;
  line-height: 17px;

  svg {
    margin-right: ${props => props.position === "top-left" ? '5px' : 0};
    margin-left: ${props => props.position === "bottom" ? "15px" : props.position === 'top-right' ? '11px' : 0};

    color: ${props => props.position === 'bottom' ? theme.colors.yellow : 'inherit'};
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

export const HeaderBurger = styled.button`
  color: ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`

export const HeaderMenu = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100% - ${theme.header.bottomHeight});
  top: ${theme.header.bottomHeight};
  left: 100%;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: .3s ease left;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const MenuDropdown = styled.ul`
  max-height: 0;
  height: 100%;
  transition: max-height .3s ease-in-out;
  opacity: 0;
  overflow: hidden;
`

export const OpenedMenuDropdownStyles = css(
    {
        maxHeight: 'max-content',
        opacity: 1
    }
)

export const MenuItem = styled.li`
  cursor: pointer;
  padding: 12px 20px;
  transition: all .3s ease-in-out;
  
  a {
    display: block;
    width: 100%;
  }
  
  span {
    display: flex;
    align-items: center;
  }

  svg {
    transition: all .3s ease-in-out;
    margin-left: 8px;
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
  
  &:hover svg {
    transform: rotate(180deg);
  }
`


export const MenuDropdownItem = styled.li`
  padding: 16px 16px 16px 24px;
  
  &:hover {
    background-color: #f8f8f8;
  }
`

export const MenuDropdownLink = styled(NavLink)`
`

