import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import '../Auth/Login.scss';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:"",
            showpass:false
        }
    }
handleInput=(e)=>{
this.setState({
    username:e.target.value,
    password:e.target.value
})
console.log(`Username:${this.state.username}`)
}
handleSubmitLogin=()=>{
    alert('Login success!')
}
showPassword=()=>{
   this.setState({
       showpass:!this.state.showpass
   })
}

    render() {
       
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-center row">
                        <div className="col-12 text-center"> 
                        <div className="Login">Login</div>
                             <div className="col-12 form-group change-input">
                                <label>Username:</label>
                                <input className="input-type"
                                 value={this.username} onChange={(e)=>this.handleInput(e)} type="text" placeholder="Enter your Username"/> 
                            </div>
                            <div className="col-12 form-group change-input">
                                <label>Password:</label>
                                <input  className="input-type" type={this.state.showpass ? 'text':'password'} 
                                value={this.password} onChange={(e)=>this.handleInput(e)}
                                placeholder="Enter your password"
                                />
                                <span><i className={this.state.showpass ?'fas fa-eye-slash':'fas fa-eye'} onClick={(e)=>this.showPassword(e)}></i> </span>
                            </div>
                            <button className="btn-login" onClick={()=>this.handleSubmitLogin()}>Login</button>
                       
                            <div className="col-12  ">
                                <Link className="forgot-password">Forgot your password</Link>
                                <p className="sigin-text">Sign in with</p>
                            </div>
                            <div className="col-12 social">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-google-plus-g"></i>
                            </div>
                            </div>  
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
