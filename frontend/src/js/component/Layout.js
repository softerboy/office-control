import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import Add from './Add'

import '../../css/bootstrap.min.css'
import '../../css/style.css'

import Footer from './Footer'
import PanelInfo from './PanelInfo'
import PanelTasks from './PanelTasks'

export default class Layout extends Component {

    state = {
        activeMenu: 'HOME'
    }

    onMenuItemClick = (item /* menu item */) => {
        this.setState({ activeMenu: item.id })
    }

    render = () =>
        <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    <nav role="navigation" class="navbar navbar-inverse">
                        <div class="container">
                            <div class="navbar-header header">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h1><a href="index.html">MY HOUSE</a></h1>
                                            <p>Control your house with easy way!</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div id="navbarCollapse" class="collapse navbar-collapse navbar-right">
                                <ul class="nav nav-pills"> {
                                    this.props.menus.map(menu =>
                                        <li key={menu.id} onClick={this.onMenuItemClick.bind(this, menu)} class={this.state.activeMenu === menu.id ? 'active' : ''}>
                                            <Link to={menu.href}>{menu.label}</Link>
                                        </li>)
                                }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div class="wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 col-lg-push-3">
                            <form role="search" class="visible-xs">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="search" class="form-control input-lg" placeholder="Search" />
                                        <div class="input-group-btn">
                                            <button class="btn btn-default btn-lg" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/add' component={Add} />
                            </Switch>

                            <div class="margin-8"></div>
                        </div>

                        <div class="col-lg-3 col-lg-pull-9">

                            <div class="panel panel-info hidden-xs">
                                <div class="panel-heading"><div class="sidebar-header">Search</div></div>
                                <div class="panel-body">
                                    <form role="search">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input type="search" class="form-control input-lg" placeholder="Search" />
                                                <div class="input-group-btn">
                                                    <button class="btn btn-default btn-lg" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="panel panel-info">
                                <div class="panel-heading"><div class="sidebar-header">Sign In</div></div>
                                <div class="panel-body">

                                    <form role="form">
                                        <div class="form-group">
                                            <input type="text" class="form-control input-lg" placeholder="Login" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control input-lg" placeholder="Password" />
                                        </div>

                                        <button type="submit" class="btn btn-warning pull-right">Login</button>

                                    </form>

                                </div>
                            </div>

                            <PanelInfo />
                            <PanelTasks />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </React.Fragment>
}

Layout.defaultProps = {
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
    }],

    households: [{
        name: 'Chairs',
        count: 10
    }, {
        name: 'Tables',
        count: 5
    }, {
        name: 'Shelves',
        count: 3
    }]
}