import {createRouter, createWebHistory} from 'vue-router'
import appPageMain from '../appPageMain'
import appPageComments from '../appPageComments'
import appPagePrograms from "../appPagePrograms";

export default createRouter({
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
        }
    ]
})