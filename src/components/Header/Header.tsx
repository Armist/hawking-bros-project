import {
  HeaderBurger,
  Navigation, NavigationBlankLink,
  NavigationInner,
  NavigationItem,
  NavigationLink,
  NavigationList,
  StyledHeader
} from "./Header.styles";
import {
  headerBottomNavigation,
  headerTopLeftNavigation,
  headerTopRightNavigation,
} from "../../data/HeaderData";
import {Logo} from "../Logo/Logo";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {uiSlice} from "../../store/reducers/uiSlice";
import {CgMenu, CgClose} from "react-icons/cg";
import {Link} from "react-router-dom";
import {HeaderMenu} from "./Menu/Menu";
import {Dropdown, DropdownItem} from "../Dropdown/Dropdown";
import {GradientButton, HeaderButton} from "../Button/Button.styles";
import {theme} from "../../styles/theme";

export const Header = () => {
  const {menuOpen, dropdownActive} = useAppSelector(state => state.uiReducer)
  const {menuClose, menuToggle, dropdownOpen, dropdownClose} = uiSlice.actions
  const dispatch = useAppDispatch()

  const menuToggleHandler = () => {
    dispatch(menuToggle())
  }

  const menuCloseHandler = () => {
    menuOpen && dispatch(menuClose())
  }

  const dropdownOpenHandler = () => {
    dispatch(dropdownOpen())
  }

  const dropdownCloseHandler = () => {
    dropdownActive && dispatch(dropdownClose())
  }

  const BurgerIcon = () => !menuOpen ? <CgMenu size={24}/> : <CgClose size={24}/>

  return (
    <StyledHeader>
      <Navigation position={'top'}>
        <NavigationInner>
          <NavigationList>
            {headerTopLeftNavigation.map(item => (
              <NavigationItem
                position={'top-left'}
                key={item.text}
                onMouseEnter={dropdownCloseHandler}
              >
                {item.path && (
                  <NavigationLink
                    color={item.color}
                    position={'top-left'}
                    to={item.path}
                  >
                    {item.icon && item.icon}
                    <span>{item.text}</span>
                  </NavigationLink>
                )}
              </NavigationItem>
            ))}
          </NavigationList>

          <NavigationList>
            {headerTopRightNavigation.map(item => (
              <NavigationItem
                position={'top-right'}
                key={item.text}
                onMouseEnter={dropdownCloseHandler}
              >
                {item.path && (
                  <NavigationLink
                    to={item.path}
                    position={'top-right'}
                    color={item.color}
                  >
                    <span>{item.text}</span>
                    {item.icon && item.icon}
                  </NavigationLink>
                )}
              </NavigationItem>
            ))}
          </NavigationList>
        </NavigationInner>
      </Navigation>

      <Navigation position={'bottom'}>
        <NavigationInner>
          <Logo onClick={menuCloseHandler} onMouseEnter={dropdownCloseHandler}/>

          <NavigationList>
            {headerBottomNavigation.map(item =>
              item.path ? (
                <NavigationItem
                  position={'bottom'}
                  key={item.text}
                  onMouseEnter={dropdownCloseHandler}
                >
                  <NavigationLink
                    color={item.color}
                    position={'bottom'}
                    to={item.path}
                  >
                    <span>{item.text}</span>
                    {item.icon && item.icon}
                  </NavigationLink>
                </NavigationItem>
              ) : (
                <NavigationItem position={'bottom'} key={item.text}>
                  <NavigationBlankLink
                    color={item.color}
                    position={'bottom'}
                    onMouseEnter={dropdownOpenHandler}
                  >
                    <span>{item.text}</span>
                    {item.icon && item.icon}
                  </NavigationBlankLink>
                  {dropdownActive && item.dropdown && (
                    <Dropdown onMouseLeave={dropdownCloseHandler}>
                      {item.dropdown.map(dropdownItem => (
                        <DropdownItem onClick={dropdownCloseHandler} key={dropdownItem.text}>
                          <Link to={dropdownItem.path}>{dropdownItem.text}</Link>
                        </DropdownItem>
                      ))}
                    </Dropdown>
                  )}
                </NavigationItem>
              )
            )}
          </NavigationList>

          <HeaderButton primary>+ Разместить объявление</HeaderButton>

          <HeaderBurger onClick={menuToggleHandler}>
            <BurgerIcon/>
          </HeaderBurger>
        </NavigationInner>
      </Navigation>

      <HeaderMenu/>
    </StyledHeader>
  )
}
