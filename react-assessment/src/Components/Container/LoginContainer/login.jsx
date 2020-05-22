import React,{ Component } from 'react';
import Children from '../ChildComponent'
import './style.css'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    allowOnlyFirstNameAlphabets = (e) => {
       const regex =  /^[a-zA-Z]*$/;
       const value =  e.target.value;
       if (regex.test(value)) {
          this.setState({firstName: value})
        }
    }

    allowOnlyLastNameAlphabets = (e) => {
        const regex =  /^[a-zA-Z]*$/;
        const value =  e.target.value;
        if (regex.test(value)) {
           this.setState({lastName: value})
         }
     }

     addEmailAddress = (e) => {
        if (e.target.valuee !== '') {
           this.setState({email: e.target.value})
         }
     }

     addPassword = (e) => {
        if (e.target.value !== '') {
           this.setState({password: e.target.value})
         }
     }

     validateEmailPassword = () => {
        const regex =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const passwordRegex =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (regex.test(this.state.email)) {
           alert("Success!!! Valid Email-Address")
        }else{
            alert("Please enter the valid email address")
         }

         if (passwordRegex.test(this.state.password)) {
            alert("Success!!! Valid Password")
          }else{
             alert("Please enter the combination of numbers (0-9) and letters (A-Z, a-z)")
          }
     }
     
    render(){
        return(
            <section>
                <div className="header">
                    Get started today!
                </div>
                <div class="row">
                    <div class="column">
                      <Children labelName={"First Name"} 
                         onChange={this.allowOnlyFirstNameAlphabets} 
                         value={this.state.firstName} 
                         type="text"/>  
                    </div>
                    <div class="column">
                      <Children labelName={"Last Name"} 
                        onChange={this.allowOnlyLastNameAlphabets}
                        value={this.state.lastName} 
                        type="text" />
                    </div>
                    <div class="column">
                      <Children labelName={"Email address"} 
                        onChange={this.addEmailAddress}
                        value={this.state.email} 
                        type="email" />
                    </div>
                    <div class="column">
                      <Children labelName={"Password"} 
                        onChange={this.addPassword}
                        value={this.state.password} 
                        type="password" />
                    </div>
                </div>
                <div className="buttonContainer">
                  <button onClick={this.validateEmailPassword}>Claim your free trial</button>
                </div>
                <div className="footer">
                  <p>You are agreeing to our <a className="condition" href="#">Terms and Services</a></p>
                </div>
            </section>
        )
    }
}

export default Login;
