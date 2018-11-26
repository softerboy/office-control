import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../store'
import { createFurniture, counts } from '../actions/furnitureActions'
import { fetchUsers } from '../actions/userActions'
import { fetchTypes } from '../actions/typeActions'
import { setActiveMenu } from '../actions/navigationActions'

@connect(store => {
    return {
        fetched: store.furnitures.fetched,
        users: store.users.users,
        types: store.types.types,
        error: store.furnitures.error,
        isSearch: store.furnitures.isSearch
    }
})
export default class Add extends Component {

    state = {
        imageLabel: 'Select an image',
    }

    constructor(props) {
        super(props)

        this.imageRef = React.createRef()
        this.typeRef = React.createRef()
        this.ownerRef = React.createRef()
        this.descriptionRef = React.createRef()
        this.titleRef = React.createRef()
        this.countRef = React.createRef()
    }

    onImageSelected = (e) => {
        let filename = e.currentTarget.value
        if (filename && typeof (filename) === 'string') {
            const found = filename.lastIndexOf('\\')
            if (found > -1)
                filename = filename.slice(found + 1)
            this.setState({ imageLabel: filename })
        }
    }

    clearFields = () => {
        this.ownerRef.current.value = ''
        this.typeRef.current.value = ''
        this.descriptionRef.current.value = ''
        this.titleRef.title.value = ''
        this.resetImageField()
    }

    resetImageField = () => {
        let imageRef = $('#image')
        imageRef.replaceWith(imageRef.val('').clone(true))
        this.setState({imageLabel: 'Select an image'})        
    }

    uploadData = (e) => {
        const formData = new FormData()
        formData.append('image', this.imageRef.current.files[0])
        formData.append('type', this.typeRef.current.value)
        formData.append('owner', this.ownerRef.current.value)
        formData.append('description', this.descriptionRef.current.value)
        formData.append('count', this.countRef.current.value)
        formData.append('title', this.titleRef.current.value)
        store.dispatch(createFurniture(formData, this.onUploadResult))
    }

    componentWillMount = () => {        
        this.props.dispatch(setActiveMenu('ADD_NEW'))        
        this.props.dispatch(fetchUsers())
        this.props.dispatch(fetchTypes())
        this.props.dispatch(counts())        
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.isSearch)
            this.props.history.push('/')
    }

    onUploadResult = (isSuccess) => {
        console.log(isSuccess)
        if (isSuccess) {
            $.notify('Successfully uploaded', { globalPosition: 'right middle', className: 'success' })
            this.props.dispatch(counts()) // update counts panel
            this.clearFields()
        }
    }

    render = () => {
        console.log(this.props)
        
        let error = null
        if (this.props.error && this.props.error.response)
            error = this.props.error.response.data

        console.log('Error' + error)

        return <React.Fragment>
            <h1>Add new furniture</h1>
            <hr />
            <div class="form-group">
                <p>Enter title</p>
                <p class='text-danger'>{error ? error.title : ''}</p>
                <input type="text" ref={this.titleRef} defaultValue='' class="form-control input-lg" />
            </div>            
            <div class="form-group">
                <p>Please select a type</p>
                <p class='text-danger'>{error ? error.type : ''}</p>
                <select ref={this.typeRef} defaultValue='' class="form-control input-lg">
                    {
                        this.props.types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)
                    }
                </select>
            </div>
            <div class="form-group">
                <p>Choose owner</p>
                <p class='text-danger'>{error ? error.owner : ''}</p>
                <select ref={this.ownerRef} defaultValue='' class="form-control input-lg">
                    {
                        this.props.users.map(user => <option key={user.id} value={user.id}>{user.name + ' ' + user.lastname}</option>)
                    }
                </select>
            </div>
            <div class="form-group">
                <p>Enter count</p>
                <p class='text-danger'>{error ? error.count : ''}</p>
                <input type="number" min="1" max="100" defaultValue="1" ref={this.countRef} class="form-control input-lg" />
            </div>
            <div class="form-group">
                <p>Description</p>
                <p class='text-danger'>{error ? error.description : ''}</p>
                <textarea ref={this.descriptionRef} class="form-control"></textarea>
            </div>            
            <div class="form-group">
                <p class='text-danger'>{error ? error.image : ''}</p>
                <input type='file' id='image' ref={this.imageRef} style={{ display: 'none' }} onChange={this.onImageSelected} />
                <label for='image' class="btn btn-lg btn-warning input-lg  col-md-6 col-xs-12"><span style={{ marginRight: 15 }} class="glyphicon glyphicon-picture" aria-hidden="true"></span>{this.state.imageLabel}</label>
            </div>            
            <div style={{ clear: 'both', marginBottom: 20 }}></div>
            <button class="btn btn-lg btn-warning" onClick={this.uploadData.bind(this)}>Send</button>

        </React.Fragment>
    }
}