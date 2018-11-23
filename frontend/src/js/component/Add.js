import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../store'
import { createHouseHold } from '../actions/householdActions'
import { fetchUsers } from '../actions/userActions'

@connect(store => {
    return {
        fetched: store.households.fetched,
        users: store.users.users
    }
})
export default class Add extends Component {

    state = {
        imageLabel: 'Select an image',
    }

    constructor(props) {
        super(props)

        this.imageRef = React.createRef()
        this.typeref = React.createRef()
        this.ownerRef = React.createRef()
        this.descriptionRef = React.createRef()
    }

    onImageSelected = (e) => {
        let filename = e.currentTarget.value
        if (filename && typeof (filename) === 'string') {
            let found = filename.lastIndexOf('\\')
            if (found > -1)
                filename = filename.slice(found + 1)
            this.setState({ imageLabel: filename })
        }
    }

    uploadData = (e) => {
        const formData = new FormData()
        formData.append('image', this.imageRef.current.files[0])
        formData.append('type', this.typeref.current.value)
        formData.append('owner', this.ownerRef.current.value)
        formData.append('description', this.descriptionRef.current.value)
        store.dispatch(createHouseHold(formData))
    }

    componentWillReceiveProps = ({ fetched }) => {
        if (fetched) {
            $.notify("Successfully uploaded", { globalPosition: 'top center', className: 'success' }, 'success')
        }
    }

    componentWillMount = () => {
        this.props.dispatch(fetchUsers())
    }

    render = () => {

        return <React.Fragment>
            <h1>Add new household</h1>
            <hr />
            {/* <form id="addForm" encType="multipart/form-data"> */}
            <div class="form-group">
                <p>Please select a type</p>
                <select ref={this.typeref} defaultValue='' class="form-control input-lg">
                    <option value='chair'>Chair</option>
                    <option value='table'>Table</option>
                    <option value='shelf'>Shelve</option>
                </select>
            </div>
            <div class="form-group">
                <p>Choose owner</p>
                <select ref={this.ownerRef} defaultValue='' class="form-control input-lg">
                    {
                        this.props.users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
            </div>
            <div class="form-group">
                <p>Description</p>
                <textarea ref={this.descriptionRef} class="form-control"></textarea>
            </div>
            <div class="form-group">
                <input type='file' id='image' ref={this.imageRef} style={{ display: 'none' }} onChange={this.onImageSelected} />
                <label for='image' class="btn btn-lg btn-warning input-lg  col-md-6 col-xs-12"><span style={{ marginRight: 15 }} class="glyphicon glyphicon-picture" aria-hidden="true"></span>{this.state.imageLabel}</label>
            </div>
            <div style={{ clear: 'both', marginBottom: 20 }}></div>
            <button class="btn btn-lg btn-warning" onClick={this.uploadData.bind(this)}>Send</button>

        </React.Fragment>
    }
}