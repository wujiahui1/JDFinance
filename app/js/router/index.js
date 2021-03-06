import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import MakeMoney from "../makeMoney/index.vue"

import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    /*mode: "history",*/
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            /*redirect: "/makemoney",*/
        },{
            path: "/makemoney",
            name: "MakeMoney",
            component: MakeMoney
        }
    ],
})
