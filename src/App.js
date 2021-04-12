import React from 'react'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props)
  }

  render (){
      return (
          <body>
        <header>      
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">GSB</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Mes fiches de frais</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Créer une nouvelle fiche de frais</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Déconnexion</a>
                </li>
              </ul>            
            </div>
          </div>
        </nav>
      </header>
      <main class="flex-shrink-0">
      <div class="container">
        <h1 class="mt-5">Bienvenue sur votre espace personnel</h1>
        <table class="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>Mois</th>
                                      <th>Justificatifs</th>
                                      <th>Montant</th>
                                      <th>Date de modification</th>
                                      <th>Etat</th>
                                      <th>Action</th>

                  

                                    </tr>
                                  </thead>
                                  <tbody>
                   
                                    <tr>
                                      <td> </td>
                                      <td> </td>
                                      <td> </td>
                                      <td> </td>
                  <td> </td>
                  <td> <button type="button" class="btn btn-info">Modifier</button></td>

                                    </tr>
                                    <tr>
                                      <td> </td>
                                      <td> </td>
                                      <td> </td>
                                      <td> </td>
                  <td> </td>
                                      <td> <button type="button" class="btn btn-info">Modifier</button></td>
                                    </tr>
                                    <tr>
                                      <td> </td>
                                      <td> </td>
                                      <td> </td>
                                      <td> </td>
                  <td> </td>
                                      <td> <button type="button" class="btn btn-info">Modifier</button> </td>

                  
                                    </tr>
                          
                                  </tbody>
                                </table>
      </div>
    </main>
    <footer>      
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            
          </div>
        </nav>
      </footer>
    </body>
      
      )
  }
}

export default App;