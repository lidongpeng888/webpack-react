import React , {Component} from 'react'
import { Button } from 'antd';
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
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}>增加221</button>
                <p>count变了吗!??2233</p>
                <Button type="primary">Primary</Button>
            </div>
        );
    }
}