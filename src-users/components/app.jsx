import React,{Component} from "react"

import Main from "./main";
import Search from "./search";
import './index.css'

export default class App extends Component {
    state = {
        userName: ''
    }

    setUserName =(userName)=>{
        this.setState({userName})
    }

    render () {
        return (
            <div id="app">
                <div className="container">
                    <Search setUserName={this.setUserName}/>
                    <Main userName={this.state.userName}/>
                </div>
            </div>
        )
    }
}
