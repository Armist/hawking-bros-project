import {
    HeaderBurger, HeaderMenu, MenuDropdown, MenuDropdownItem, MenuDropdownLink, MenuItem, MenuList,
    Navigation, NavigationBlankLink,
    NavigationInner,
    NavigationItem,
    NavigationLink,
    NavigationList, OpenedMenuDropdownStyles,
    StyledHeader
} from "./Header.styles";
import {
    headerBottomNavigation,
    headerTopLeftNavigation,
    headerTopRightNavigation, unitedHeaderData
} from "../../data/HeaderData";
import {Logo} from "../Logo/Logo";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {uiSlice} from "../../store/reducers/uiSlice";
import {CgMenu, CgClose} from "react-icons/cg";
import {NavLink} from "react-router-dom";
import {useState} from "react";

export const Header = () => {
    const {menuOpen} = useAppSelector(state => state.uiReducer)
    const {menuClose, menuToggle} = uiSlice.actions
    const dispatch = useAppDispatch()

    const menuToggleHandler = () => {
        dispatch(menuToggle())
    }

    const menuCloseHandler = () => {
        menuOpen && dispatch(menuClose())
    }

    const [dropped, setDropped] = useState<boolean>(false)

    const BurgerIcon = () => !menuOpen ? <CgMenu size={24}/> : <CgClose size={24}/>

    return (
        <StyledHeader>
            <Navigation position={'top'}>
                <NavigationInner>
                    <NavigationList>
                        {headerTopLeftNavigation.map(item => (
                            <NavigationItem position={'top-left'} key={item.text}>
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
                            <NavigationItem position={'top-right'} key={item.text}>
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
                    <Logo onClick={menuCloseHandler}/>
                    <NavigationList>
                        {headerBottomNavigation.map(item =>
                            item.path ? (
                                <NavigationItem position={'bottom'} key={item.text}>
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
                                    <NavigationBlankLink color={item.color} position={'bottom'}>
                                        <span>{item.text}</span>
                                        {item.icon && item.icon}
                                    </NavigationBlankLink>
                                </NavigationItem>
                            )
                        )}
                    </NavigationList>
                    <HeaderBurger onClick={menuToggleHandler}>
                        <BurgerIcon/>
                    </HeaderBurger>
                </NavigationInner>
            </Navigation>
            <HeaderMenu style={menuOpen ? {left: 0} : {}}>
                <MenuList>
                    {unitedHeaderData.map(item => (
                        <MenuItem key={item.text}>
                            {
                                item.path ? (
                                    <NavLink to={item.path}>{item.text}</NavLink>
                                ) : (
                                    <>
                                        <span onClick={() => setDropped(!dropped)}
                                              key={item.text}
                                        >
                                            {item.text}
                                            {item.icon}
                                        </span>
                                        {
                                            dropped &&
                                            <MenuDropdown style={{maxHeight: 'fit-content', opacity: 1}}>
                                                {item.dropdown?.map(dropItem =>
                                                    <MenuDropdownItem key={dropItem.text}>
                                                        <MenuDropdownLink
                                                            to={dropItem.path}>{dropItem.text}</MenuDropdownLink>
                                                    </MenuDropdownItem>
                                                )}
                                            </MenuDropdown>
                                        }

                                    </>
                                )
                            }
                        </MenuItem>
                    ))}
                </MenuList>
            </HeaderMenu>
        </StyledHeader>
    )
}
