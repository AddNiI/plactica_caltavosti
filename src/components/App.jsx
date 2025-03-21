import React from "react";
import initialTodos from "../todo.json";
import TodoList from "./TodoList"

export class App extends React.Component{
  state={
    todos: initialTodos,
    filter: '',
  }

  deleteTodo=(id)=>{
    this.setState((prevState)=>({todos: prevState.todos.filter((todo)=>todo.id !== id)}))}

  render(){
    return<>
    <TodoList 
    onDelete = {this.deleteTodo}
    todos={this.state.todos} />
    </>
  }
}