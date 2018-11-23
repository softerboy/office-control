import React, { Component } from 'react'


export default class Add extends Component {
    state = {
        imageLabel: 'Select an image'
    }

    onImageSelected = (e) => {
        this.setState({imageLabel: e.currentTarget.value})
    }

    render = () => <React.Fragment>
        <h1>Add new household</h1>
        <hr />        
        <form>
            <div class="form-group">
                <p>Please select a type</p>
                <select defaultValue='' class="form-control input-lg">
                    <option disabled></option>
                    <option calue='id'>Chair</option>
                    <option calue='id'>Table</option>
                    <option calue='id'>Shelve</option>
                </select>
            </div>
            <div class="form-group">
                <p>Choose owner</p>
                <input type="owner" class="form-control input-lg" />
            </div>
            <div class="form-group">
                <p>Choose owner</p>
                <input type="text" class="form-control input-lg" />
            </div>
            <div class="form-group">
                <p>Description</p>
                <textarea class="form-control"></textarea>
            </div>
            <div class="form-group">
                <input type='file' id='image' style={{display: 'none'}} onChange={this.onImageSelected}/>
                <label for='image' class="btn btn-lg btn-warning input-lg  col-md-6 col-xs-12"><span style={{marginRight: 15}} class="glyphicon glyphicon-picture" aria-hidden="true"></span>{this.state.imageLabel}</label>
            </div>
            <div style={{clear: 'both', marginBottom: 20}}></div>
            <button class="btn btn-lg btn-warning">Send</button>
        </form>
    </React.Fragment>
}