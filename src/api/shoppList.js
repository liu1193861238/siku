import http from "@utils/http"
export const goods=()=>http.get("/api/recommend/recommend",{
    type:"buy-buy",
    count:"40",
    from:"cart",
    c_platform_type:"0"
})