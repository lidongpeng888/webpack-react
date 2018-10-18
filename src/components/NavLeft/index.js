import React , {Component} from 'react'
import { Menu } from 'antd';
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
                return  <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
          })
    }
    render() {
        console.log(this.renderMenu(this.state.menuList))
        return (
            <Menu theme="dark" mode="inline">
                    { this.renderMenu(this.state.menuList)}
            </Menu>
        );
    }
}