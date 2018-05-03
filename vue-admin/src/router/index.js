import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import admin from '@/components/admin'
import console from '@/components/console'
import transit from '@/components/transit'

import blog_console from '@/components/blog/console'
import blog_article from '@/components/blog/article'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/login',
            component:login
        },
        {
            path:'/admin',
            component:admin,
            children:[
                {
                    path:'/',
                    component:console
                },
                {
                    path:'blog',
                    component:transit,
                    children:[
                        {
                            path:'/',
                            component:blog_console
                        },
                        {
                            path:'article',
                            component:blog_article
                        }
                    ]
                }
            ]
        }
    ]
})
