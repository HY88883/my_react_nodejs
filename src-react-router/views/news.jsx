import React, {Component} from "react"

export default class News extends Component {
    state = {
        news: []
    }
    componentDidMount() {
        setTimeout(() => {
            const news = [
                "new001",
                "new002",
                "new003",
                "new005"
            ]
            this.setState({news})
        },1000)
    }

    render () {
        return (
            <div>
               <ul>
                   {this.state.news.map((newSin,index) =>
                       (
                           <li key={index}>{newSin}</li>
                       )
                   )
                   }
               </ul>
            </div>
        )
    }
}
