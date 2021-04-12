import React from 'react'
import '../App.css';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BillsList from '../components/acceuil/accueil'

class Accueil extends React.Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <body class="d-flex flex-column h-100">
      <BillsList />
      <Footer />

      </body>
    )
  }
}

export default Accueil;
