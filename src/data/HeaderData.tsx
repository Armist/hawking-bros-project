import {FaMapMarkerAlt, FaRegHeart} from "react-icons/fa";
import {theme} from "../styles/theme";

export type HeaderLink = {
    path?: string
    text: string
    icon?: JSX.Element
    color: string
    dropdown?: DropdownItem[]
}

export type DropdownItem = {
    path: string
    text: string
}

export const headerTopLeftNavigation: HeaderLink[] = [
    {
        path: '/',
        text: 'Главная',
        color: theme.colors.gray
    },
    {
        path: '/news',
        text: 'Новости',
        color: theme.colors.gray
    },
    {
        path: '/tariffs',
        text: 'Размещение и тарифы',
        color: theme.colors.gray
    },
    {
        path: '/map',
        text: 'Объявления на карте',
        icon: <FaMapMarkerAlt size={10}/>,
        color: theme.colors.gray
    },
    {
        path: '/contacts',
        text: 'Контакты',
        color: theme.colors.gray
    },
]

export const headerTopRightNavigation: HeaderLink[] = [
    {
        path: '/liked',
        text: 'Закладки',
        icon: <FaRegHeart size={16}/>,
        color: theme.colors.gray
    },
    {
        path: '/login',
        text: 'Вход и регистрация',
        color: theme.colors.violet
    },
]

export const headerBottomNavigation: HeaderLink[] = [
    {
        text: 'Квартиры на сутки',
        icon: <FaMapMarkerAlt size={15}/>,
        color: theme.colors.black,
        dropdown: [
            {
                path: '/flats/minsk',
                text: 'Квартиры на сутки в Минске'
            },
            {
                path: '/flats/gomel',
                text: 'Квартиры на сутки в Гомеле'
            },
            {
                path: '/flats/brest',
                text: 'Квартиры на сутки в Бресте'
            },
            {
                path: '/flats/vitebsk',
                text: 'Квартиры на сутки в Витебске'
            },
            {
                path: '/flats/grodno',
                text: 'Квартиры на сутки в Гродно'
            },
            {
                path: '/flats/mogilev',
                text: 'Квартиры на сутки в Могилеве'
            }
        ]
    },
    {
        path: '/cottages',
        text: 'Коттеджи и усадьбы',
        color: theme.colors.black
    },
    {
        path: '/saunas',
        text: 'Бани и сауны',
        color: theme.colors.black
    },
    {
        path: '/cars',
        text: 'Авто на прокат',
        color: theme.colors.black
    }
]

export const unitedHeaderData: HeaderLink[] = [
    {
        path: '/',
        text: 'Главная',
        color: theme.colors.gray
    },
    {
        path: '/news',
        text: 'Новости',
        color: theme.colors.gray
    },
    {
        path: '/tariffs',
        text: 'Размещение и тарифы',
        color: theme.colors.gray
    },
    {
        path: '/map',
        text: 'Объявления на карте',
        color: theme.colors.gray
    },
    {
        path: '/contacts',
        text: 'Контакты',
        color: theme.colors.gray
    },
    {
        text: 'Квартиры на сутки',
        icon: <FaMapMarkerAlt size={15}/>,
        color: theme.colors.black,
        dropdown: [
            {
                path: '/flats/minsk',
                text: 'Квартиры на сутки в Минске'
            },
            {
                path: '/flats/gomel',
                text: 'Квартиры на сутки в Гомеле'
            },
            {
                path: '/flats/brest',
                text: 'Квартиры на сутки в Бресте'
            },
            {
                path: '/flats/vitebsk',
                text: 'Квартиры на сутки в Витебске'
            },
            {
                path: '/flats/grodno',
                text: 'Квартиры на сутки в Гродно'
            },
            {
                path: '/flats/mogilev',
                text: 'Квартиры на сутки в Могилеве'
            }
        ]
    },
    {
        path: '/cottages',
        text: 'Коттеджи и усадьбы',
        color: theme.colors.black
    },
    {
        path: '/saunas',
        text: 'Бани и сауны',
        color: theme.colors.black
    },
    {
        path: '/cars',
        text: 'Авто на прокат',
        color: theme.colors.black
    },
    {
        path: '/liked',
        text: 'Закладки',
        icon: <FaRegHeart size={16}/>,
        color: theme.colors.gray
    },
    {
        path: '/login',
        text: 'Вход и регистрация',
        color: theme.colors.violet
    },
]
