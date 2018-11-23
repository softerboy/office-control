import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect()
export default class PanelInfo extends Component {
    
    render = () => {
        return (
            <div class="panel panel-info">
                <div class="panel-heading"><div class="sidebar-header">Latest actions</div></div>
                <div class="panel-body">

                <p>11.22.2018</p>
                <p>Shop new cupboard to my daughter</p>

                </div>
            </div>
        )
    }
}