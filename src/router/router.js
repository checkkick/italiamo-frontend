import {createRouter, createWebHistory} from 'vue-router'
import appPageMain from '../views/appPageMain'
import appPageComments from '../views/appPageComments'
import appPagePrograms from "../views/appPagePrograms";
import appPageTeachers from "../views/appPageTeachers";
import appPageNews from "../views/appPageNews";
import appPagePrices from "../views/appPagePrices";
import appPageProgramsCourseId from "../views/appPageProgramsCourseId";

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
            path: '/programs/:courseId',
            name: 'appPageProgramsCourseId',
            component: appPageProgramsCourseId
        },
    ]
})