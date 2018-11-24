import React, { Component } from 'react'

export default class DetailsPage extends Component {
    render = () => {
        return <React.Fragment>
            <h1>Details</h1>
            <hr />

            <div class="row">
                <div class="well clearfix">
                    <div class="col-lg-3 col-md-2 text-center">
                        <img class="img-thumbnail" src="http://localhost:3000/static/images/chair.jpg" alt="" />
                        <p>Some chair</p>
                    </div>

                    <div class="col-lg-9 col-md-10">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                </div>
            </div>


        </React.Fragment>
    }
}