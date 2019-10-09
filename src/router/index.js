import {
    HomePage,
    Brand,
    Sort,
    ShoppingList,
    Mine,
    Register,
    Login,
    ModifyPic,
    Detail
} from "@pages"

export const layoutRoutes=[
    {
        key:"/homePage",
        path:"/homePage",
        name:"首页",
        icon:"\ue604",
        component:HomePage,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
    },
    {
        key:"/brand",
        path:"/brand",
        name:"品牌",
        icon:"\ue62e",
        component:Brand,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    },
    {
        key:"/sort",
        path:"/sort",
        name:"分类",
        icon:"\ue616",
        component:Sort,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    },
    {
        key:"/shoppingList",
        path:"/shoppingList",
        name:"购物袋",
        icon:"\ue677",
        component:ShoppingList,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    },
    {
        key:"/mine",
        path:"/mine",
        name:"我的",
        icon:"\ue64a",
        component:Mine,
        exact:true,
        meta:{
            requireAuth:true,
            flag:false
        }
    }
]

export const noLayoutRoutes=[
    {
        key:"/login",
        path:"/login",
        name:"登录",
        icon:"",
        component:Login,
        exact:true,
        meta:{
            requireAuth:false,
        }
    },
    {
        key: "/register",
        path: "/register",
        name: "注册",
        icon: "",
        component: Register,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key:"/modifyPic",
        path:"/modifyPic",
        name:"修改头像",
        icon:"",
        component:ModifyPic,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key:"/detail",
        path:"/detail",
        name:"修改头像",
        icon:"",
        component:Detail,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]
export const baseConfigRoutes=layoutRoutes.concat(noLayoutRoutes);