import React, {Component} from "react"
import PropTypes from 'prop-types'
import CommentItem from "../comment-item/comment-item";
import "./comment-list.css"
import {connect} from 'react-redux'
import {deleteComment} from '../../redux/action-creators'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }
    render () {
        const {comments,deleteComment} = this.props
        const len = comments.length > 0?'none' : 'block'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: len}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index) => (<CommentItem key={index} comment={comment} deleteComment={deleteComment} index={index}/>))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({comments: state.comments}),
    {deleteComment}
)(CommentList)
