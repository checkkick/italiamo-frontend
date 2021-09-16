import {createRouter, createWebHistory} from 'vue-router'
import appPageMain from '../views/appPageMain'
import appPageComments from '../views/appPageComments'
import appPagePrograms from "../views/appPagePrograms";
import appPageTeachers from "../views/appPageTeachers";
import appPageContacts from "../views/appPageContacts";
import appPageNews from "../views/appPageNews";
import appPagePrices from "../views/appPagePrices";

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'appPageMain',
            component: appPageMain,
        },
        {
            path: '/news',
            name: 'appPageNews',
            component: appPageNews,
        },
        {
            path: '/programs',
            name: 'appPagePrograms',
            component: appPagePrograms
        },
        {
            path: '/prices',
            name: 'appPagePrices',
            component: appPagePrices
        },
        {
            path: '/teachers',
            name: 'appPageTeachers',
            component: appPageTeachers
        },
        {
            path: '/comments',
            name: 'appPageComments',
            component: appPageComments
        },
        {
            path: '/contacts',
            name: 'appPageContacts',
            component: appPageContacts
        }
    ]
})