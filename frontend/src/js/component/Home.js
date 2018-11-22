import React, { Component } from 'react'

import { HOST_PATH } from '../constatnts'

export default class Home extends Component {
    render = () => {
        return (<React.Fragment>
            {
                this.props.sections.map(section => 
                    <React.Fragment key={section.title}>
                        <h2>{section.title}</h2>
                        <hr />
                        <div class="row">
                            {
                                section.items.map((item, index) =>
                                    <div key={index} class={`item_block col-lg-${section.col} col-md-${section.col} col-sm-${section.col} col-xs-6`}>
                                        <a href='#'><img src={item.image} alt={item.name} /></a>
                                        <div class="block_label"><a href="#">{item.name}</a></div>
                                    </div>)
                            }
                        </div>
                    </React.Fragment>)
            }
        </React.Fragment>)
    }
}

Home.defaultProps = {
    sections: [{
        col: 3,
        title: 'Chairs',
        items: [{
            name: 'Some chair',
            image: `${HOST_PATH}/static/images/chair.jpg`
        }, {
            name: 'Some chair',
            image: `${HOST_PATH}/static/images/chair.jpg`
        }, {
            name: 'Some chair',
            image: `${HOST_PATH}/static/images/chair.jpg`
        }, {
            name: 'Some chair',
            image: `${HOST_PATH}/static/images/chair.jpg`
        }]
    }, {
        col: 4,
        title: 'Tables',
        items: [{
            name: 'Some table',
            image: `${HOST_PATH}/static/images/table.jpg`
        }, {
            name: 'Some table',
            image: `${HOST_PATH}/static/images/table.jpg`
        }, {
            name: 'Some table',
            image: `${HOST_PATH}/static/images/table.jpg`
        }]
    }, {
        col: 4,
        title: 'Shelves',
        items: [{
            name: 'Some shelf',
            image: `${HOST_PATH}/static/images/cube-shelf.jpg`
        }, {
            name: 'Some shelf',
            image: `${HOST_PATH}/static/images/valeria-accent-shelf.jpg`
        }, {
            name: 'Some shelf',
            image: `${HOST_PATH}/static/images/wall-shelf.jpg`
        }]
    }]
}