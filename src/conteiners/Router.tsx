import { connect } from 'react-redux'
import Router from '../views/Router/Router'
import User from "../models/User";

const mapStateToProps = (state: {setUser: {isLogedIn: boolean}, getUsers: {users: User[],  loading: boolean}})=>{
  
    return {
        isLogedIn: state.setUser.isLogedIn,
        users: state.getUsers.users,
        isLoading: state.getUsers.loading
    }
  }

export default connect(mapStateToProps)(Router)