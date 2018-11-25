import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search } from '../actions/householdActions';

@connect(store => {
    return {} // we need only dispatch prop
})
export default class SearchPanel extends Component {

    constructor(props) {
        super(props)

        this.searchXsRef = React.createRef()
        this.searchRef = React.createRef()
    }

    search = event => {        
        if (event.type === 'keydown' && event.key !== 'Enter') {
            return
        }

        const name = event.target.getAttribute('name')
        let queryString = ""
        if (name === 'searchButton') {            
            queryString = this.searchRef.current.value
        } else if (name === 'searchXsButton') {
            queryString = this.searchXsRef.current.value
        }

        console.log(queryString)
        this.props.dispatch(search(queryString))
    }

    render = () => {
        const { visibleXs } = this.props

        if (!visibleXs) {
            return <div class="panel panel-info hidden-xs">
                <div class="panel-heading"><div class="sidebar-header">Search</div></div>
                <div class="panel-body">
                    <div class="form-group">
                        <div class="input-group">
                            <input name="searchButton" onKeyDown={this.search} ref={this.searchRef} type="search" class="form-control input-lg" placeholder="Search" />
                            <div class="input-group-btn">
                                <button name="searchButton" onClick={this.search} class="btn btn-default btn-lg"><i name="searchButton" class="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else {
            return <React.Fragment>
                <div class="form-group visible-xs">
                    <div class="input-group">
                        <input name="searchXsButton" onKeyDown={this.search} ref={this.searchXsRef} type="search" class="form-control input-lg" placeholder="Search" />
                        <div class="input-group-btn">
                            <button name="searchXsButton" class="btn btn-default btn-lg"><i name="searchXsButton" class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        }
    }
}

SearchPanel.defaultProps = {
    visibleXs: false
}