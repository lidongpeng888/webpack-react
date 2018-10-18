import React , {Component} from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/NavLeft/index'
import { Row, Col } from 'antd';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }

    add= () =>{
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <Row>
                <Col span={3}><NavLeft/></Col>
                <Col span={21}>
                    <Header/>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}