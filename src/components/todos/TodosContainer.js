import React, {Component} from 'react';
import { connect } from 'react-redux';
import Todo from "./Todo";

class TodosContainer extends Component{
    render(){
        return(
            <ol>
                {this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)}
            </ol>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)