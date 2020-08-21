import React from "react";
import {JIA,JIAN,CHENG,CHU,EMPTY} from './action-types'

export const jia = (number1,number2) => ({type:JIA,number:[number1,number2]})
export const jian = (number1,number2) => ({type:JIAN,number:[number1,number2]})
export const cheng = (number1,number2) => ({type:CHENG,number:[number1,number2]})
export const chu = (number1,number2) => ({type:CHU,number:[number1,number2]})
export const empty = () => ({type:EMPTY,number:0})

