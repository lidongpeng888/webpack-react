import React , {Component} from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.less'
import menuList from '../../resource/menuConfig.js'
const SubMenu = Menu.SubMenu;
export default class App extends Component {
    componentWillMount() {
        this.setState({menuList})
    }
    renderMenu=(data)=>{
        return   data.map(menu=>{
                if(menu.children){
                    return  <SubMenu key={menu.key} title={<span>{menu.title}</span>}>
                                { this.renderMenu(menu.children)}
                            </SubMenu>
                }
                return  <Menu.Item key={menu.key}>
                            <NavLink to={menu.key}>{menu.title}</NavLink>
                        </Menu.Item>
          })
    }
    render() {
        return (
            <div className="navWrapper">
                 <NavLink to="/home" >
                 <div className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>XXXX</h1>
                    </div>
                 </NavLink>
                <Menu theme="dark" mode="inline" className="container">
                    { this.renderMenu(this.state.menuList)}
                </Menu>
            </div>
            
        );
    }
}