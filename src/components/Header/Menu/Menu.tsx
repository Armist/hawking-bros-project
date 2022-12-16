import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {uiSlice} from "../../../store/reducers/uiSlice";
import {
  Menu,
  MenuDropdownTrigger,
  MenuLink,
  TriggerIcon,
  TriggerText,
  MenuDropdown,
  MenuDropdownItem,
  MenuDropdownLink,
  MenuItem,
  MenuList
} from "./Menu.styles";
import {unitedHeaderData} from "../../../data/HeaderData";
import {GradientButton} from "../../Button/Button.styles";

export const HeaderMenu = () => {
  const {menuOpen} = useAppSelector(state => state.uiReducer)
  const {menuClose} = uiSlice.actions
  const dispatch = useAppDispatch()
  const menuCloseHandler = () => {
    menuOpen && dispatch(menuClose())
  }
  const [dropped, setDropped] = useState<boolean>(false)

  const handleDrop = () => setDropped(!dropped)

  return (
    <Menu style={menuOpen ? {left: 0} : {}}>
      <MenuList>
        {unitedHeaderData.map(item => (
          <MenuItem key={item.text}>
            {item.path ? (
              <MenuLink to={item.path} onClick={menuCloseHandler}>{item.text}</MenuLink>
            ) : (
              <>
                <MenuDropdownTrigger onClick={handleDrop}>
                  <TriggerText key={item.text}>
                    {item.text}
                  </TriggerText>
                  <TriggerIcon style={dropped ? {transform: 'rotate(180deg)'} : {}}>
                    {item.icon}
                  </TriggerIcon>
                </MenuDropdownTrigger>
                {
                  dropped &&
                  <MenuDropdown style={{
                    maxHeight: 'fit-content',
                    opacity: 1
                  }}>
                    {item.dropdown?.map(dropItem =>
                      <MenuDropdownItem key={dropItem.text}>
                        <MenuDropdownLink
                          onClick={menuCloseHandler}
                          to={dropItem.path}
                        >
                          {dropItem.text}
                        </MenuDropdownLink>
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
      <GradientButton primary style={{margin: '0 auto'}}>+  Разместить объявление</GradientButton>
    </Menu>
  )
}
