import React from 'react'
import './login.css'
import {withRouter} from 'react-router-dom'
import gsb from '../img/gsb.jpg'
import {getToken} from '../../api/auth.js'

class Login extends React.Component {

    constructor(props) {
      super(props);
    }

    handleChange(e){
        let{name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    async login(){
        let {decoded,token} = await getToken({login: this.state.login, mdp: this.state.password})
        console.log(decoded)
        if(decoded){
            console.log(decoded)
            localStorage.setItem('id', decoded.id)
            localStorage.setItem('token', token)
            this.props.history.push('/bills')
        }else{
            this.props.history.push('/non')
        }
    }

    

render() {
    return (

        <main class="form-signin">
            <div class="container">
                <div class="left-div">
                    <img class="mb-4" src={gsb}/>
                </div>
                <div class="right-div">
                    <h1 class="h3 mb-3 fw-normal">Connectez-vous</h1>
                    <label for="inputEmail" class="visually-hidden">Mail</label>
                    <input type="email" name="login" id="inputEmail" class="form-control" placeholder="login" onChange={(e) => this.handleChange(e)} />
                    <label for="inputPassword" class="visually-hidden">Mot de Passe</label>
                    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Mot de Passe" onChange={(e) => this.handleChange(e)} />
                    <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/>Se souvenir de moi
                    </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => this.login()}>Connecter</button>
                </div>
            </div>
        </main>

    );
    }
}

export default withRouter(Login)