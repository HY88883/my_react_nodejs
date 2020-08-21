import React, {Component} from "react"
import propTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from "../../components/comment-add/comment-add"
import CommentList from "../../components/comment-list/comment-list"
import {asyncGetComments,updateComment,deleteComment,displayComment} from '../../redux/action-creators'
class App extends Component {

    static propTypes = {
        asyncGetComments: propTypes.func.isRequired,
    }
    componentDidMount() {
        this.props.asyncGetComments()
    }

    render () {
        return(
            <div id="app">
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                    <CommentAdd/>
                    <CommentList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
null,{asyncGetComments})(App)
