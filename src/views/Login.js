import React from 'react'
import '../App.css'
import Footer from '../components/footer/Footer'
import LoginForm from '../components/loginForm/login'

class Login extends React.Component {

  constructor(props){
    super(props)
  }


    render () {
        return (
        <div class="container-fluid">
            <LoginForm/>
            <Footer/>
        </div>
        )
    }
}

export default Login;