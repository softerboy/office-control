import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleFurniture } from '../actions/furnitureActions'

import { HOST_PATH } from '../constants'

@connect(store => {
    return {
        furniture: store.furnitures.furniture
    }
})
export default class DetailsPage extends Component {

    componentWillMount = () => {
        const { slug } = this.props.match.params
        console.log(slug)
        if (slug)
            this.props.dispatch(fetchSingleFurniture(slug))

        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    render = () => {
        if (!this.props.furniture)
            return <h1>Element not found</h1>

        const { furniture } = this.props
        return <React.Fragment>
            <h1>Details</h1>
            <hr />

            <div class="row">
                <div class="well clearfix">
                    <div class="col-lg-3 col-md-2 text-center">
                        <img class="img-thumbnail" src={`${HOST_PATH}${furniture.image}`} alt={furniture.name} />
                        <p>{furniture.name}</p>
                    </div>

                    <div class="col-lg-9 col-md-10">
                        <p>{furniture.description}</p>
                    </div>

                </div>
            </div>


        </React.Fragment>
    }
}