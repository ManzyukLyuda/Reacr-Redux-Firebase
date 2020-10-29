import { connect } from "react-redux";
import TodoPage from "../views/Todo/Todo"


const mapStateToProps = (state: {todos: []})=>{
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(TodoPage);