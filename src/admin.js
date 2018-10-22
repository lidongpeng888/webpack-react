import React , {Component} from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/NavLeft/index'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './admin.less';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row className="adminWrapper">
                <Col span={3} className="navWrapper"><NavLeft/></Col>
                <Col span={21}>
                    <Header/>
                    <Row>
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}