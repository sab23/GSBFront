import React from 'react'
import './acceuil.css'
import {withRouter} from 'react-router-dom'
import gsb from '../img/gsb.jpg'
import Accueil from '../../views/Accueil';

class Acceuil extends React.Component {

    constructor(props) {
      super(props);
    }



    render() {
        return (
        
            <body>
                <main class="flex-shrink-0">
                    <div class="container">
                        <div class="row">
                            <div class="alert-success ">
                                <h1>Bienvenue dans votre espace</h1>
                            </div>
                        </div>
                        <div class="row">
                            <p>Que voulez-vous faire aujourd'hui ?</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p>vos fiches validées</p>
                            </div>
                            <div class="col-md-6">
                                <p>Les fiches en attentes</p>
                            </div>
                        </div>
                    </div>
               </main>
            </body>
        )
    }
}

export default withRouter(Acceuil)