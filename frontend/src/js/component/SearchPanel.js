import React, { Component } from 'react'

export default class SearchPanel extends Component {
    render = () => {
        const { visibleXs } = this.props

        if (!visibleXs) {
            return <div class="panel panel-info hidden-xs">
                <div class="panel-heading"><div class="sidebar-header">Search</div></div>
                <div class="panel-body">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="search" class="form-control input-lg" placeholder="Search" />
                            <div class="input-group-btn">
                                <button class="btn btn-default btn-lg" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else {
            return <React.Fragment>
                <div class="form-group visible-xs">
                    <div class="input-group">
                        <input type="search" class="form-control input-lg" placeholder="Search" />
                        <div class="input-group-btn">
                            <button class="btn btn-default btn-lg" type="submit"><i class="glyphicon glyphicon-search"></i></button>
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