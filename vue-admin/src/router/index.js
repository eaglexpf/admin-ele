import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/components/login'
import admin from '@/components/admin'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // },
        {
            path:'/login',
            component:login
        },
        {
            path:'/admin',
            component:admin
        }
    ]
})
