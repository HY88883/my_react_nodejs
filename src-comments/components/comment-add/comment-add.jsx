import React,{Component} from "react"
import PropTypes from "prop-types";

export default class CommentAdd extends Component {
    state = {
        name: '',
        content: ''
    }
    static propTypes = {
        updateComment: PropTypes.func.isRequired
    }
    handleNChange = (event) => {
        const name = event.target.value
        this.setState({name})
    }
    handleCChange = (event) => {
        const content = event.target.value
        this.setState({content})
    }
    handleSubmit = ()  => {
        const comment = this.state
        this.props.updateComment(comment)
        this.setState({name:'',content:''})
    }
    render() {
        const {name,content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={name} onChange={this.handleNChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleCChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
