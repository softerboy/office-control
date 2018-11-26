import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Add from './Add'
import DetailsPage from './DetailsPage'

import '../../css/bootstrap.min.css'
import '../../css/style.css'

import Footer from './Footer'
import PanelInfo from './PanelInfo'
import PanelTasks from './PanelTasks'
import SearchPanel from './SearchPanel'
import AuthPanel from './AuthPanel'

import '../../vendor/js/bootstrap.min.js'
import '../../vendor/js/notifyjs.min.js'
import Navigation from './Navigation'


export default class Layout extends Component {

    render = () => {

        return <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    <nav role="navigation" class="navbar navbar-inverse">
                        <div class="container">
                            <div class="navbar-header header">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h1><a href="index.html">Office Control</a></h1>
                                            <p>Control your office furniture with smarter way!</p>
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

                            <Navigation />
                        </div>
                    </nav>
                </div>
            </div>

            <div class="wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 col-lg-push-3">
                            <SearchPanel visibleXs/>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/add' component={Add} />
                                <Route exact path='/details/:slug' component={DetailsPage} />
                            </Switch>

                            <div class="margin-8"></div>
                        </div>

                        <div class="col-lg-3 col-lg-pull-9">                            
                            <SearchPanel />
                            <AuthPanel/>
                            <PanelInfo />
                            <PanelTasks />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </React.Fragment>
    }
}
