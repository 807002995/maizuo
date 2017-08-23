import React ,{Component} from 'react'
import {BrowserRouter,NavLink,Route} from 'react-router-dom'

import FilmCur from '../components/film/FilmCur.js'
import FilmSoon from '../components/film/FilmSoon.js'

import store from '../store'
import '../css/film.css'
export default class Home extends Component{
	constructor(history){
		super();
		this.state = {
			history,
		}
	}
	render(){
		return (
			<BrowserRouter>
				<div id="film" class='page'>
					<nav class="topNav">
						<NavLink to='/film/cur'>正在热映</NavLink>
						<NavLink to='/film/soon'>即将上映</NavLink>
					</nav>
					<Route path="/film/" exact component={FilmCur} />
					<Route path="/film/cur" component={FilmCur} />
					<Route path="/film/soon" component={FilmSoon}/>
				</div>
			</BrowserRouter>
		)
	}
	componentWillMount(){
		store.dispatch({
			type:'changeHistory',
			val : this.state.history
		})
		store.dispatch({
            type: 'changeHeaderTitle',
            val : '卖座电影'
        });
	}
	
}
