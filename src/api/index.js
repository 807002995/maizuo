//homebanner数据请求
let homeBanner = '/v4/api/billboard/home?__t=';
//home热映数据
let homeHot = '/v4/api/film/now-playing?__t=';
//home即将上映
//1503309237615&page=1&count=3
let homeSoon = '/v4/api/film/coming-soon?__t='
//城市列表数据请求
let cityData = '/v4/api/city'
export default {
    homeBanner,
    cityData,
    homeHot,
    homeSoon
}