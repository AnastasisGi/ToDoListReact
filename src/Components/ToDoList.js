import React, { Component } from 'react';



class ToDoList extends Component {

    constructor(props){

        super(props)
        this.state = {todos:[]}
    }

    
     addToDo = ()=>{

        const todo = document.getElementById("toDoList-textbox").value
        const newToDos = this.state.todos;
        newToDos.push(todo);
        this.setState({todos:newToDos});
        
    }

    render (){
        return(

            <div>
                <h1 id='toDoList-heading'>A react to do List</h1>
            
                <input id="toDoList-textbox" type="text"></input>
        <button id="toDoList-button" onClick={this.addToDo}>Save</button>                
            
            {this.state.todos.map((todo,index) => <div id={`todos-${index}`} key={index}>{todo}</div>)}

            </div> 

        )
    }


}


export default ToDoList 