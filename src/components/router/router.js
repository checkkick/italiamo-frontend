import {createRouter, createWebHistory} from 'vue-router'
import appMainHeader from '../appMainHeader'
import appComments from '../appComments'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/main',
            name: 'appMainHeader',
            component: appMainHeader,
            alias: '/'
        },
        {
            path: '/comments',
            name: 'appComments',
            component: appComments
        }
    ]
})