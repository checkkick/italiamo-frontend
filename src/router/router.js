import {createRouter, createWebHistory} from 'vue-router'
import appPageMain from '../views/appPageMain'
import appPageComments from '../views/appPageComments'
import appPagePrograms from "../views/appPagePrograms";
import appPageTeachers from "../views/appPageTeachers";
import appPageContacts from "../views/appPageContacts";

export default createRouter({
    base: '/italiamo-frontend-vue-master',
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'appPageMain',
            component: appPageMain,
        },
        {
            path: '/comments',
            name: 'appPageComments',
            component: appPageComments
        },
        {
            path: '/programs',
            name: 'appPagePrograms',
            component: appPagePrograms
        },
        {
            path: '/teachers',
            name: 'appPageTeachers',
            component: appPageTeachers
        },
        {
            path: '/contacts',
            name: 'appPageContacts',
            component: appPageContacts
        }
    ]
})