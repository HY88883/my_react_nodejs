import React from "react";
import {connect} from 'react-redux'
import Calculator from '../components/calculator'
import {jia,jian,cheng,chu} from '../redux/actions'

export default connect(
    (state) => ({state:state}),
    {jia: jia,jian: jian,cheng: cheng,chu: chu}
)(Calculator)
