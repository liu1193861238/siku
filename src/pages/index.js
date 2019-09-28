import Loadable from "react-loadable"
import Loadding from "@common/loadding"

const HomePage=Loadable({
    loader:()=>import("./homePage"),
    loading:Loadding
})
const Brand=Loadable({
    loader:()=>import("./brand"),
    loading:Loadding
})
const Sort=Loadable({
    loader:()=>import("./sort"),
    loading:Loadding
})
const ShoppingList=Loadable({
    loader:()=>import("./shoppingList"),
    loading:Loadding
})
const Mine=Loadable({
    loader:()=>import("./mine"),
    loading:Loadding
})
const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loadding
})
export {
    HomePage,
    Brand,
    Sort,
    ShoppingList,
    Mine,
    Login
}