import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { HOST_PATH } from '../constants'

import { fetchFurnitures } from '../actions/furnitureActions'
import { setActiveMenu } from '../actions/navigationActions'

@connect(store => {
    return {
        furnitures: store.furnitures.furnitures,
        isSearch: store.furnitures.isSearch
    }
})
export default class Home extends Component {
    componentWillMount = () => {
        if (!this.props.isSearch)
            this.props.dispatch(fetchFurnitures())        
        this.props.dispatch(setActiveMenu('HOME'))
    }

    render = () => {

        const { furnitures } = this.props
        if (!furnitures.length)
            return <h1>No results</h1>

        return (<React.Fragment>
            {
                this.props.furnitures.map((section) =>
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