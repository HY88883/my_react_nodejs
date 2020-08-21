import React,{Component} from "react"

import Main from "./main";
import Search from "./search";
import './index.css'

export default class App extends Component {

    render () {
        return (
            <div id="app">
                <div className="container">
                    <Search/>
                    <Main/>
                </div>
            </div>
        )
    }
}
