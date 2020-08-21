import React,{Component} from "react"
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import './index.css'

export default class Search extends Component {

    handleButton =()=>{
        const userName = this.input.value.trim()
        if(userName){
            PubSub.publish('search',userName)
        }
    }

    render () {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input=>this.input = input}/>
                    <button onClick={this.handleButton}>Search</button>
                </div>
            </section>
        )
    }
}
