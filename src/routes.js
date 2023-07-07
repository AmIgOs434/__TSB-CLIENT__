import Admin from "./pages/Admin";
import {ADMIN_ROUTE,CHANGE_DEVICE_ROUTE,CHECK_USER_ROUTE,ORDER_ROUTE, BASKET_ROUTE,
    CHECK_ROUTE,FQI_ROUTE,DELIVERY_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, 
    SHOP_ROUTE, TSB_ROUTE,THING_ROUTE,CHECK_ORDER_ROUTE,FESHION_ROUTE,ORDER_WORK_ROUTE,CHECK_PROMO_ROUTE,
    LOVE_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/login";
import DevicePage from "./pages/DevicePage";
import TSB from "./pages/TSB1334";
import THING from "./pages/thing";
import Style from "./pages/style.js";
import feshion from "./pages/fashion copy";
import delivery from "./pages/delivery";
import Check from "./pages/Check";
import ChangeDevicePage from "./pages/ChangeDevicePage";
import UserPage from "./pages/UserPage";
import Order from "./pages/order";
import Check_oder from "./pages/CheckOrder";
import Order_Work from "./pages/Order_Work";
import Promo from "./pages/Promo";
import Love from "./pages/love"

export const adminRoutes = [
    {
        path: CHECK_PROMO_ROUTE,
        Component: Promo
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDER_WORK_ROUTE + '/:id',
        Component: Order_Work
    },
    {
        path: CHECK_ORDER_ROUTE,
        Component: Check_oder
    },
    {
        path: CHECK_ROUTE,
        Component: Check
    },
    {
        path: CHANGE_DEVICE_ROUTE  + '/:id',
        Component: ChangeDevicePage
    },
    {
        path: CHECK_USER_ROUTE  ,
        Component: UserPage
    },
]

export const publicRoutes = [


    {
        path: LOVE_ROUTE,
        Component: Love
    },


    {
        path: ORDER_ROUTE,
        Component: Order
    },

    
    {
        path: DELIVERY_ROUTE,
        Component: delivery
    },

    {
        path: THING_ROUTE,
        Component: THING
    },
    {
        path: FQI_ROUTE,
        Component: Style
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: TSB_ROUTE,
        Component: TSB
    },
    {
        path: FESHION_ROUTE,
        Component: feshion
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },

]
