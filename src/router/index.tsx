import {createBrowserRouter} from "react-router-dom";
import {Default} from "../pages/layouts/Default";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <h1>Главная</h1>
            },
            {
                path: '/news',
                element: <h1>Новости</h1>
            },
            {
                path: '/tariffs',
                element: <h1>Размещение и тарифы</h1>
            },
            {
                path: '/map',
                element: <h1>Объявления на карте</h1>
            },
            {
                path: '/contacts',
                element: <h1>Контакты</h1>
            },
            {
                path: '/flats',
                element: <h1>Квартиры на сутки</h1>
            },
            {
                path: '/cottages',
                element: <h1>Коттеджи и усадьбы</h1>
            },
            {
                path: '/saunas',
                element: <h1>Бани и сауны</h1>
            },
            {
                path: '/cars',
                element: <h1>Авто на прокат</h1>
            },
        ]
    }
])