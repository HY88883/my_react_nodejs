import React from "react";
import {UPDATECOMMENT,DELETECOMMENT,RECEIVECOMMENT} from './action-types'

export const updateComment = (comment) => ({type: UPDATECOMMENT,comment: comment})
export const deleteComment = (index) => ({type: DELETECOMMENT,index: index})

const getInitComments = (comments) => ({type: RECEIVECOMMENT,comments: comments})

export const asyncGetComments = () => {
    return dispatch => {
        //模拟ajax请求获取后台数据
        const comments = [
            {name:'胡勇',content:'react is difficult!'},
            {name:'张三',content:'react is so easy!'}
        ]
        setTimeout(() => {
            dispatch(getInitComments(comments))
        },2000)
    }
}
