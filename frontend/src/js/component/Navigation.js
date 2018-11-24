import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

@connect(store => {
    return {
        navigation: store.navigation
    }
})
export default class Navigation extends Component {
    render = () => {
        const { navigation } = this.props
        return <React.Fragment>
            <div id="navbarCollapse" class="collapse navbar-collapse navbar-right">
                <ul class="nav nav-pills"> {
                    this.props.menus.map(menu =>
                        <li key={menu.id} class={navigation === menu.id ? 'active' : ''}>
                            <Link to={menu.href}>{menu.label}</Link>
                        </li>)
                }
                </ul>
            </div>
        </React.Fragment>
    }
}

Navigation.defaultProps = {
    menus: [{
        id: 'HOME',
        href: "/",
        className: 'active',
        label: 'Home'
    }, {
        id: 'ADD_NEW',
        href: "/add",
        className: '',
        label: 'Add new household'
    }]
}