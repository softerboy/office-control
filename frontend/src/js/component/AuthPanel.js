import React, { Component } from 'react'

export default class AuthPanel extends Component {

    onLoginClick = () => {
        $.notify('Not implemented yet', {globalPosition: 'top center', className: 'warn'})
    }

    render = () => {
        return <React.Fragment>
            <div class="panel panel-info">
                <div class="panel-heading"><div class="sidebar-header">Sign In</div></div>
                <div class="panel-body">

                    <div class="form-group">
                        <input type="text" class="form-control input-lg" placeholder="Login" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control input-lg" placeholder="Password" />
                    </div>

                    <button type="submit" onClick={this.onLoginClick.bind(this)} class="btn btn-warning pull-right">Login</button>

                </div>
            </div>
        </React.Fragment>
    }
}