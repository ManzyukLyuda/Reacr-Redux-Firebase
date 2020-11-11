import { connect } from "react-redux";
import ToDo from "../models/ToDo";
import User from "../models/User";
import TodoPage from "../views/Todo/Todo"


const mapStateToProps = (state: {todos: ToDo[], setUser: User})=>{
    return {
        todos: state.todos,
        user: state.setUser
    }
}

export default connect(mapStateToProps)(TodoPage);