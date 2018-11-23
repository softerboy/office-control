import React, { Component } from 'react'

import { connect } from 'react-redux'

@connect(store => {
    return {
        households: store.households.households
    }
})
export default class PanelInfo extends Component {
    render = () => {
        return (
            <React.Fragment>
                <div class="panel panel-info">
                    <div class="panel-heading"><div class="sidebar-header">Info panel</div></div>
                    <div class="panel-body">

                        <ul class="list-group">
                            {
                                this.props.households.map(item =>
                                    <li key={item.title} class='list-group-item list-group-warning'>
                                        <span class="badge">{item.items.length}</span>
                                        <a href='#'>{item.title}</a>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}