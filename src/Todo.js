import React from 'react';
import './App.css';
class Todo extends React.Component{
   handleSubmit=(e)=>{
       e.preventDefault();
       let inputItem = document.getElementById('todoInput');
       let todo = inputItem.value;
       inputItem.value="";
       if(!todo){
           document.querySelector('.inputError').style.display = 'block';
       }else{
           todo = todo.charAt(0).toUpperCase().concat(todo.substr(1))
            let todoItem = {id:this.props.todoItems.length, 
                todo,
                completed:false,
                deleted:false
            };
            this.props.addTodo(todoItem);
            document.querySelector('.inputError').style.display = 'none';
       }
       
   }
    render(){
        return (
            <>
                <div className="mb50">
                    <form onSubmit={this.handleSubmit}>
                        <span className="inputError">Enter something below.</span>
                        <input autoComplete="off" onChange={(e)=>{if(e.target.value.length>1) document.querySelector('.inputError').style.display = 'none';}} type="text" id="todoInput" placeholder="What are your plans today?" required/>
                        {/* <button type="button" className="btn btn-warning " onClick={this.handleSubmit}>Add</button> */}
                    </form>
                </div>
                <ul>
                    {  this.props.todoItems.length? 
                        this.props.todoItems.map(todoItem=>{
                        return !todoItem.deleted? todoItem.completed? 
                        <li key={todoItem.id}>
                            <strike>{todoItem.todo}</strike>
                            <span className="icons">
                                <svg onClick={()=>{this.props.deleteTodo(todoItem.id)}} className="icon bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd"/>
                                </svg>
                            </span>
                        </li> 
                        : <li key={todoItem.id}>{todoItem.todo}
                            <span className="icons">
                                <svg onClick={()=>{this.props.completeTodo(todoItem.id)}} className="icon bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                </svg>
                                <svg onClick={()=>{this.props.deleteTodo(todoItem.id)}} className="icon bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd"/>
                                </svg>
                            </span>
                          </li>
                        :""
                        }) : <div>You are done for today, Yayy!</div>
                    }
                </ul>
                
            </>
        );
    }
}

export default Todo;