import React, {Component} from "react"
import PropTypes from "prop-types";

import './commentItem.css'
import {connect} from "react-redux";

class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    handleDelete = () =>{
        const {comment,deleteComment,index} = this.props
        if(window.confirm(`确认删除${comment.name}吗？`)){
            deleteComment(index)
        }
    }
    render () {
        const {comment} = this.props
        return (
                <li className="list-group-item">
                    <div className="handle">
                        <a href="javascript:;" onClick={this.handleDelete}>删除</a>
                    </div>
                    <p className="user"><span>{comment.name}</span><span>说:</span></p>
                    <p className="centence">{comment.content}</p>
                </li>
        )
    }
}

export default connect(
    null,null
)(CommentItem)
