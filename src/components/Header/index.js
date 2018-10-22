import React , {Component} from 'react'
import { Row, Col } from 'antd';
import {formatDate} from '../../utils/utils'
import "./index.less"
export default class App extends Component {
    constructor(){
        super();
    }
    componentWillMount(){
        this.setState({currentTime:Date.now()})
        this.timerId=setInterval(()=>{
            this.setState({currentTime:Date.now()})
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div className="header">
               <div className="headerTop">
                    <Col span={24} >
                    <div className="userInfor">
                        <span>admin</span>
                        <a href="javascript:;">退出</a>
                    </div>
                    </Col>
               </div>
               <Row className="headerBottom">
                    <Col span={20}>
                        <div>首页</div>
                        <div className='weather'>
                            <span>{formatDate(this.state.currentTime)}</span>
                        </div>
                    </Col>
               </Row>
            </div>
        );
    }
}