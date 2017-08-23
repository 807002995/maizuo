import React ,{Component} from 'react'
import '../css/me.css'
import store from '../store'
export default class Home extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div id="me" class='page'>
				<div class="inputWrap"><input type="text" placeholder="输入手机号/邮箱" /></div>

				<div class="inputWrap"><input type="password" placeholder="输入密码/验证码" /></div>
				<button>登录</button>
			</div> 
		)
	}
	componentWillMount(){
		store.dispatch({
            type: 'changeHeaderTitle',
            val : '登录'
        });
	}
}
