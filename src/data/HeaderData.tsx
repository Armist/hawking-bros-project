import {FaMapMarkerAlt} from "react-icons/fa";

export type HeaderLink = {
    id: number
    path: string
    text: string
    icon?: JSX.Element
}

export const headerTopNavigation: HeaderLink[] = [
    {
        id: 1,
        path: '/',
        text: 'Главная'
    },
    {
        id: 2,
        path: '/news',
        text: 'Новости'
    },
    {
        id: 3,
        path: '/tariffs',
        text: 'Размещение и тарифы'
    },
    {
        id: 4,
        path: '/map',
        text: 'Объявления на карте',
        icon: <FaMapMarkerAlt size={10}/>
    },
    {
        id: 5,
        path: '/contacts',
        text: 'Контакты'
    },
]

export const headerBottomNavigation = [
    {
        id: 1,
        path: '/flats',
        text: 'Квартиры на сутки',
        icon: <FaMapMarkerAlt size={15}/>
    },
    {
        id: 2,
        path: '/cottages',
        text: 'Коттеджи и усадьбы'
    },
    {
        id: 3,
        path: '/saunas',
        text: 'Бани и сауны'
    },
    {
        id: 4,
        path: '/cars',
        text: 'Авто на прокат'
    }
]