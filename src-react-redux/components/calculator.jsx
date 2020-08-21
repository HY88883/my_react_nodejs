import React,{Component} from "react"
import {PropTypes} from 'prop-types'
import {jia,jian,cheng,chu} from '../redux/actions'

export default class Calculator extends Component {
    static propTypes = {
        state: PropTypes.number.isRequired,
        jia: PropTypes.func.isRequired,
        jian: PropTypes.func.isRequired,
        cheng: PropTypes.func.isRequired,
        chu: PropTypes.func.isRequired,
    }

    handleCal=()=>{
        const {state,jia,jian,cheng,chu} = this.props
        const num1 = this.input1.value.trim()*1
        const num2 = this.input2.value.trim()*1
        if(num1 && num2){
            switch (this.select.value) {
                case 'JIA': jia(num1,num2)
                    break
                case 'JIAN': jian(num1,num2)
                    break
                case 'CHENG': cheng(num1,num2)
                    break
                case 'CHU': chu(num1,num2)
                    break
            }
        }

    }

    render () {
        return (
            <div>
                <input type="text" ref={(input1) => this.input1=input1}/>{' '}
                <select ref={(select) => this.select=select}>
                    <option value='JIA'>+</option>
                    <option value='JIAN'>-</option>
                    <option value='CHENG'>*</option>
                    <option value='CHU'>/</option>
                </select>
                {' '}
                <input type="text" ref={(input2) => this.input2=input2}/>{' '}
                ={' '}
                <input type="text" value={this.props.state}/>{' '}
                <button onClick={this.handleCal}>计算</button>
            </div>
        )
    }
}
