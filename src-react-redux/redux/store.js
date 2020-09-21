import React from "react";
import {Createstore} from 'react-redux'
import {createStore} from 'redux'

import calc from './reducers'

export default createStore(calc)

