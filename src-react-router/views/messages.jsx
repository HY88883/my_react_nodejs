import React,{Component} from "react"
import {Route, Switch, Redirect,NavLink} from 'react-router-dom'
import MessageDetail from "./message-detail";

export default class Messages extends Component {
    state = {
        messages: []
    }
    componentDidMount () {
        // 模拟发送ajax请求
        setTimeout(() => {
            const data = [
                {id: 1, title: 'Message001'},
                {id: 3, title: 'Message003'},
                {id: 6, title: 'Message006'},
            ]
            this.setState({
                messages: data
            })
        }, 1000)
    }
    ShowDetail = (id) => {
        this.props.history.push(`/home/messages/messagesDetails/${id}`)
    }

    ShowDetail2 = (id) => {
        this.props.history.replace(`/home/messages/messagesDetails/${id}`)
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }
    render () {

        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m,index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={`/home/messages/messagesDetails/${m.id}`}>{m.title}</NavLink>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={() => this.ShowDetail(m.id)}>查看详情(push)</button>&nbsp;
                                    <button onClick={() => this.ShowDetail2(m.id)}>查看详情(replace)</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <p>
                    <button onClick={this.back}>返回</button>&nbsp;
                    <button onClick={this.forward}>前进</button>&nbsp;
                </p>
                <hr/>
                    <Route path={`/home/messages/messagesDetails/:id`} component={MessageDetail}></Route>
            </div>
        )
    }
}
