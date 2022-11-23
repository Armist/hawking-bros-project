import {
    Navigation,
    NavigationInner,
    NavigationItem,
    NavigationLink,
    NavigationList,
    StyledHeader
} from "./Header.styles";
import {headerBottomNavigation, headerTopNavigation} from "../../data/HeaderData";
import {Logo} from "../Logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Navigation position={"top"}>
                <NavigationInner>
                    <NavigationList>
                        {headerTopNavigation.map(item => (
                            <NavigationItem position={'top'} key={item.id}>
                                <NavigationLink
                                    position={'top'}
                                    to={item.path}
                                >
                                    {item.icon && item.icon}
                                    <span>{item.text}</span>
                                </NavigationLink>
                            </NavigationItem>
                        ))}
                    </NavigationList>
                </NavigationInner>
            </Navigation>
            <Navigation position={"bottom"}>
                <NavigationInner>
                    <Logo/>
                    <NavigationList>
                        {headerBottomNavigation.map(item => (
                            <NavigationItem position={'bottom'} key={item.id}>
                                <NavigationLink
                                    position={'bottom'}
                                    to={item.path}
                                >
                                    <span>{item.text}</span>
                                    {item.icon && item.icon}
                                </NavigationLink>
                            </NavigationItem>
                        ))}
                    </NavigationList>
                </NavigationInner>
            </Navigation>
        </StyledHeader>
    )
}