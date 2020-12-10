import Vue from 'vue'
import Router from 'vue-router'
import vheader from '../components/header/header'
import spinner from '../components/spinner/spinner.vue'
import searchs from '../components/searchs.vue'
import filmDetail from '../components/filmDetail.vue'
import filmComments from '../components/filmComments'
import shortComments from '../components/shortComments'
import indexFilms from '../components/indexFilms'
import personDetail from '../components/personDetail'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/indexFilms/:name',
            name:'indexFilms',
            component:indexFilms
        },
        {
            path:'/vheader',
            name:'vheader',
            component:vheader
        },
        {
            path:'/spinner',
            name:'spinner',
            component:spinner
        },
        {
            path:'/searchs',
            name:'searchs',
            component:searchs
        },
        {
            path:'/filmDetail',
            name:'filmDetail',
            component:filmDetail
        },
        {
            path:'/filmComments/',
            name:'filmComments',
            component:filmComments
        },
        {
            path:'/shortComments',
            name:'shortComments',
            component:shortComments
        },
        {
            path:'/personDetail',
            name:'personDetail',
            component:personDetail 
        }
    ]
})