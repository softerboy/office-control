import React, { Component } from 'react'
import {connect} from 'react-redux'

import { HOST_PATH } from '../constants'

import {fetchHouseHolds} from '../actions/householdActions'

@connect((store) => {
    return {
        households: store.households.households
    }
})
export default class Home extends Component {
    componentWillMount = () => {
        this.props.dispatch(fetchHouseHolds())
    }

    render = () => {        
        
        const keys = Object.keys(this.props.households)

        return (<React.Fragment>
            {
                this.props.households.map((section) => 
                    <React.Fragment key={section.title}>
                        <h2>{section.title}</h2>
                        <hr />
                        <div class="row">
                            {
                                section.items.map((item, index) =>
                                    <div key={index} class={`item_block col-lg-${section.col} col-md-${section.col} col-sm-${section.col} col-xs-6`}>
                                        <a href='#'><img src={`${HOST_PATH}${item.image}`} alt={item.name} /></a>
                                        <div class="block_label"><a href="#">{item.name}</a></div>
                                    </div>)
                            }
                        </div>
                    </React.Fragment>)
            }
        </React.Fragment>)
    }
}