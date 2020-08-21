import React from "react";
import {UPDATECOMMENT,DELETECOMMENT,RECEIVECOMMENT} from './action-types'
import {combineReducers} from 'redux'

const comments = function (state=[], action) {
    switch (action.type) {
        case UPDATECOMMENT: return [action.comment, ...state]
        case DELETECOMMENT: return state.filter((comment, index)=>{return index!==action.index})
        case RECEIVECOMMENT: return action.comments

        default: return state
    }
}

const reducers = combineReducers({comments})
export default reducers
