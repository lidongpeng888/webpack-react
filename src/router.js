import React from 'react'
import Admin from './admin'
import { HashRouter, Route , Switch } from 'react-router-dom'

export default class ERouter extends React.Component {
  render(){
    return (
        <HashRouter>
            <Route path="/" render={()=><Admin>
              
            </Admin>}/>
        </HashRouter>
    )
  }
}