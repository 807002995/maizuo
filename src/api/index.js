//homebanner数据请求
let homeBanner = '/v4/api/billboard/home?__t=';
//home热映数据
let homeHot = '/v4/api/film/now-playing?__t=';
//home即将上映
//1503309237615&page=1&count=3
let homeSoon = '/v4/api/film/coming-soon?__t='
//film正在热映
let FilmCur = '/v4/api/film/now-playing?'
//film即将上映
let filmSoon = '/v4/api/film/coming-soon?'
//详情页
//3828?__t=1503404882449
let filmDetail = '/v4/api/film/'





//城市列表数据请求
let cityData = '/v4/api/city'
export default {
    homeBanner,
    cityData,
    homeHot,
    homeSoon,
    FilmCur,
    filmSoon,
    filmDetail
}