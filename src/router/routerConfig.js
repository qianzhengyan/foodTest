
import Index from "../views/Index/Index"
import Classify from "../views/Classify/Classify"
import FoodCollect from "../views/FoodCollect/FoodCollect"
import Home from "../views/Index/Home/Home"
import Rank from "../views/Index/Rank/Rank"
import My from "../views/Index/My/My"
const routes = [
    {
        path:"/",
        to:"/index"
    },
    {
        path:"/index",
        component:Index,
        children:[
            {
                path:"/index",
                to:"/index/home"
            },
            {
                path:"/index/home",
                component:Home
            },
            {
                path:"/index/rank",
                component:Rank
            },
            {
                path:"/index/My",
                component:My
            }
        ]
    },
    {
        path:"/classify",
        component:Classify
    },
    {
        path:"/foodcollect",
        component:FoodCollect
    }
]
export default routes