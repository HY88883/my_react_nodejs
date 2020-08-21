import React,{Component} from "react"
import PropTypes from 'prop-types'

import './index.css'

export default class Search extends Component {
    static propTypes = {
        setUserName: PropTypes.func.isRequired
    }

    handleButton =()=>{
        const content = this.input.value.trim()
        if(content){
            this.props.setUserName(content)
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
