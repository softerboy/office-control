import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { HOST_PATH } from '../constants'

import { fetchHouseHolds } from '../actions/householdActions'
import { setActiveMenu } from '../actions/navigationActions'

@connect(store => {
    return {
        households: store.households.households
    }
})
export default class Home extends Component {
    componentWillMount = () => {
        this.props.dispatch(fetchHouseHolds())
        this.props.dispatch(setActiveMenu('HOME'))
    }

    render = () => {

        const { households } = this.props
        if (!households.length)
            return <h1>No results</h1>

        return (<React.Fragment>
            {
                this.props.households.map((section) =>
                    <React.Fragment key={section.title}>
                        <h2>{section.title}</h2>
                        <hr />
                        <div class="row">
                            {
                                section.items.map((item, index) =>
                                    <Link key={index} to={{ pathname: `/details/${item.slug}` }} >
                                        <div class={`item_block col-lg-${section.col} col-md-${section.col} col-sm-${section.col} col-xs-6`}>
                                            <img src={`${HOST_PATH}${item.image}`} alt={item.name} />
                                            <div class="block_label">{item.name}</div>
                                        </div>
                                    </Link>)
                            }
                        </div>
                    </React.Fragment>)
            }
        </React.Fragment>)
    }
}