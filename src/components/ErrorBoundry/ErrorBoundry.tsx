import React, { Component } from "react";
import './ErrorBoundry.css'


export default class ErrorBoundry extends Component {
    
    state = {
        hasError: false
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    
    render(){
        if(this.state.hasError){
           return  <div className="error-boundry">
                    <img src="https://themeforest.img.customer.envatousercontent.com/files/232572468/01_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=4068&max-w=300&s=6fab256b5231095875cc1cfb66271417" alt="404"/>
                </div>
        }
        return this.props.children
    }
}