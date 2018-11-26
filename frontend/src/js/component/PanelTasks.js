import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTasks, createTask, deleteTask } from '../actions/taskActions'

@connect(store => {
    return { tasks: store.tasks.tasks }
})
export default class PanelTasks extends Component {

    onAddTaskClick = (e) => {

        const task_text_box = document.getElementById('task_text_box')
        const value = task_text_box.value

        if (value) {
            this.props.dispatch(createTask(value))
            task_text_box.value = ''
        }
    }

    componentWillMount = () => {
        this.props.dispatch(fetchTasks())
    }

    removeTask = (task) => {
        this.props.dispatch(deleteTask(task.id))
    }

    addTaskWithEnter = (e) => {
        if (e.key === 'Enter') {
            const task_text_box = document.getElementById('task_text_box')
            const value = task_text_box.value

            if (value) {
                this.props.dispatch(createTask(value))
                task_text_box.value = ''
            }
        }
    }

    render = () => {
        return (
            <div class="panel panel-info">
                <div class="panel-heading"><div class="sidebar-header">Tasks</div></div>
                <div class="panel-body">

                    {
                        this.props.tasks.map(task => {
                            const date = new Date(task.date)
                            return <React.Fragment key={task.title}>
                                <p>{task.title}</p>
                                <p>{`${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} <span style={{ cursor: 'pointer' }} onClick={this.removeTask.bind(this, task)} class="glyphicon glyphicon-remove pull-right"></span></p>
                                <br />
                            </React.Fragment>
                        })
                    }

                    <div class="form-group">
                        <input onKeyDown={this.addTaskWithEnter.bind(this)} type="text" id="task_text_box" class="form-control input-lg" placeholder="Task title here" />
                    </div>

                    <p onClick={this.onAddTaskClick.bind(this)} class="btn btn-warning pull-right">Add</p>

                </div>
            </div>
        )
    }
}