import {createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PaidTask from '../views/PaidTask.vue'
import UnPaid from '../views/UnpaidPage.vue'
import OverDue from '../views/OverDue.vue'

const routes = [
    {
        path: '/',
        name:'HomePage',
        component: HomePage
    },
    {
        path: '/paid',
        name:'PaidTask',
        component: PaidTask
    },
    {
        path: '/unpaid',
        name:'UnPaid',
        component: UnPaid
    },
    {
        path: '/overdue',
        name:'OverDue',
        component: OverDue
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router