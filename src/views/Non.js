import React from 'react'
import '../App.css'
import Footer from '../components/footer/Footer'
import NonForm from '../components/loginForm/non'

class Non extends React.Component {

  constructor(props){
    super(props)
  }

    render () {
        return (
        <div class="container-fluid">
            <NonForm/>
            <Footer/>
        </div>
        )
    }
}

export default Non;