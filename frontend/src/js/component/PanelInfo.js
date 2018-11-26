import React, { Component } from 'react'

import { connect } from 'react-redux'
import { counts } from '../actions/householdActions'

@connect(store => {
    return {
        counts: store.households.counts
    }
})
export default class PanelInfo extends Component {

    componentWillMount = () => {
        this.props.dispatch(counts())
    }

    render = () => {
        return (
            <React.Fragment>
                {
                    this.props.counts ?
                        <div class="panel panel-info">
                            <div class="panel-heading"><div class="sidebar-header">Info panel</div></div>
                            <div class="panel-body">

                                <ul class="list-group">
                                    {
                                        this.props.counts.map((item, index) =>
                                            <li key={index} class='list-group-item list-group-warning'>
                                                <span class="badge">{item.count}</span>
                                                <a href='#'>{item.title}</a>
                                            </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        : null
                }

            </React.Fragment>
        )

    }
}