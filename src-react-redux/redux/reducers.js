import React from "react";

import {JIA,JIAN,CHENG,CHU} from './action-types'

export default function calc(state=0,action) {
    switch (action.type) {
        case JIA: return state = action.number[0] + action.number[1]
        case JIAN: return state = action.number[0] - action.number[1]
        case CHENG: return state = action.number[0] * action.number[1]
        case CHU: return state = action.number[0] / action.number[1]
        default: return state
    }

}
