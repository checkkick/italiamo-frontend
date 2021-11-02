import {createRouter, createWebHistory} from 'vue-router'
import appPageMain from '../views/appPageMain'
import appPageComments from '../views/appPageComments'
import appPagePrograms from "../views/appPagePrograms";
import appPageTeachers from "../views/appPageTeachers";
import appPageNews from "../views/appPageNews";
import appPagePrices from "../views/appPagePrices";
import appPageProgramsCourseId from "../views/appPageProgramsCourseId";
import appPageTeachersAboutId from "../views/appPageTeachersAboutId";
import appPagePublicOferta from "../views/appPagePublicOferta";
import appPagePayment from "../views/appPagePayment"
import appPage404 from "../views/appPage404";

export default createRouter({
    mode: 'history',
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
                path: '/teachers/:teacherId',
                name: 'appPageTeachersAboutId',
                component: appPageTeachersAboutId
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
        {
            path: '/oferta',
            name: 'appPagePublicOferta',
            component: appPagePublicOferta
        },
        {
            path: '/payment',
            name: 'appPagePayment',
            component: appPagePayment
        },
        {
            path: '/404',
            name: '404',
            component: appPage404,
        },
            {
                path: '/:pathMatch(.*)*',
                redirect: '/404'
            }
    ]
})