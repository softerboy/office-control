import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './component/Layout'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(
    
    <Provider store={store}>        
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>,  
    
    document.getElementById('app'))