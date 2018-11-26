import React, { Component } from 'react'

export default class Footer extends Component {
    render = () => {
        return (<React.Fragment>
            <div class="clear"></div>
            <footer>
                <div class="container">
                    <p class="text-center"> <a href='#'>my.house.com</a> </p>
                </div>
            </footer>
        </React.Fragment>)
    }
}