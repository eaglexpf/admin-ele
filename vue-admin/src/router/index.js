import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import admin from '@/components/admin'
import console from '@/components/console'
import transit from '@/components/transit'

import blog_console from '@/components/blog/console'
import blog_article from '@/components/blog/article'
import blog_category from '@/components/blog/category'
import blog_menu from '@/components/blog/menu'
import blog_upload from '@/components/blog/upload'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            redirect:'admin'
        },
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
                        },
                        {
                            path:'category',
                            component:blog_category
                        },
                        {
                            path:'menu',
                            component:blog_menu
                        },
                        {
                            path:'upload',
                            component:blog_upload
                        }
                    ]
                }
            ]
        }
    ]
})
