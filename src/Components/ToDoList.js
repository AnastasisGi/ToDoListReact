import React, { Component } from 'react';



class ToDoList extends Component {

    constructor(props){

        super(props)
        this.state = {todos:[]}
    }

    render (){
        return(

            <div>
                <h1 id='toDoList-heading'>A react to do List</h1>
            </div>

        )
    }


}


export default ToDoList 