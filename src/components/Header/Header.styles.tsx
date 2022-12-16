import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import {theme} from "../../styles/theme";
import {px2vw} from "../../styles/styles";

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
  width: 100%;
`

export const NavigationInner = styled.div`
  max-width: 1320px;
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
  height: ${
          props => props.position === 'top'
                  ? theme.header.topHeight
                  : theme.header.bottomHeight
  };
  background-color: ${
          props => props.position === 'top'
                  ? theme.colors.bgGray
                  : theme.colors.white
  };
  box-shadow: ${
          props => props.position === 'bottom'
                  ? '0px 10px 20px rgba(0, 0, 0, 0.08)'
                  : 'none'
  };

  @media (max-width: ${theme.breakpoints.header}) {
    display: ${
            props => props.position === 'top'
                    ? 'none' :
                    'block'
    };

    ${NavigationList} {
      display: ${
              props => props.position === 'bottom'
                      ? 'none'
                      : 'flex'
      };
    }
  }
`

export const NavigationItem = styled.li<NavigationItemProps>`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-right: ${props => props.position === 'top-left'
            ? px2vw(1920, 57)
            : props.position === 'bottom'
                    ? '4.167vw'
                    : props.position === 'top-right'
                            ? '40px'
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

  transition: ${theme.transition.base};

  color: ${props => props.color};

  font-weight: ${
          props => (props.position === 'top-right' || props.position === 'top-left')
                  ? 400
                  : 600
  };
  font-size: 14px;
  line-height: 17px;

  svg {
    margin-right: ${
            props => props.position === "top-left"
                    ? '5px'
                    : 0
    };
    margin-left: ${
            props => props.position === "bottom"
                    ? "15px"
                    : props.position === 'top-right'
                            ? '11px'
                            : 0
    };

    color: ${
            props => props.position === 'bottom'
                    ? theme.colors.yellow
                    : 'inherit'
    };
  }

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    transition: ${theme.transition.base};
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

  transition: ${theme.transition.base};

  color: ${props => props.color};

  font-weight: ${
          props => (props.position === 'top-right' || props.position === 'top-left')
                  ? 400
                  : 600
  };
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};

  svg {
    margin-right: ${props => props.position === "top-left" ? '5px' : 0};
    margin-left: ${props => props.position === "bottom" ? "15px" : props.position === 'top-right' ? '11px' : 0};

    color: ${props => props.position === 'bottom' ? theme.colors.yellow : 'inherit'};
  }

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    transition: ${theme.transition.base};
    content: '';
    width: 0;
    height: 3px;
    background-color: ${theme.colors.yellow};
  }

  &:hover:before {
    width: 100%;
  }

  &.active {
    color: ${theme.colors.black};

    &:before {
      width: 100%;
    }
  }
`

export const HeaderBurger = styled.button`
  color: ${theme.colors.black};
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.header}) {
    display: flex;
  }
`
