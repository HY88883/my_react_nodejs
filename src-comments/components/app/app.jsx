import React,{Component} from "react"

import CommentAdd from "../comment-add/comment-add"
import CommentList from "../comment-list/comment-list"

export default class App extends Component {
    state = {
        comments: [
            {name:'胡勇',content:'react is difficult!'},
            {name:'张三',content:'react is so easy!'}
        ]
    }
    updateComment = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    deleteComment = (index) =>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
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
                    <CommentAdd updateComment={this.updateComment}/>
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
                    </div>
                </div>
            </div>
        )
    }
}
