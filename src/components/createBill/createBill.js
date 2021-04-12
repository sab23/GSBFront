import React from 'react'
import '../../App.css';
import '../billsList/BillsList.css';
import * as fromBillsApi from '../../api/bills';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Modal from 'react-bootstrap4-modal';

class CreateBill extends React.Component {

  constructor(props){
    super(props)

	  this.state = {
	bills: [],
	rows: [],
    kmQty: 0 ,
	nightsQty: 0,
    repasQty : 0,
	libelle: 0,
	price: 0,
	users : [],
  }
}

  async componentDidMount(){
	let bills =  await fromBillsApi.getBills()
	this.setState({bills: bills.result}, () => console.log(this.state))
}

showModal(){
	this.setState({
		visible: true
	})
}

handleClose(){
	this.setState({
		visible: false
	})
}

addRow(){
  this.setState({
	  rows: [...this.state.rows, {name: '', date:'', qty: '', file:'', libelle:''}]
  })
}

handleChange(e){
  e.preventDefault()
  let name = e.target.name
  this.setState({
	  [name]: e.target.value
  }, () => console.log(this.state))
}


removeRow(i) {
  console.log(i)
  let newRows = this.state.rows
  newRows.splice(i,1)
  this.setState({
	  rows:newRows
  })
}

async postFiche(){
    let km = await fromBillsApi.postBills({idutilisateur: 'SAB2' , mois:'202103', idFraisForfait:'KM', quantite:this.state.kmsQty})
    let meals = await fromBillsApi.postBills({idutilisateur: 'SAB2', mois:'202103', idFraisForfait:'REP', quantite:this.state.mealsQty})
    let nigths = await fromBillsApi.postBills({idutilisateur: 'SAB2', mois:'202103', idFraisForfait:'NUI', quantite:this.state.nightsQty})
    this.state.rows.map(async (f, i) => {
        let horsforfait = await fromBillsApi.postBillsHF({idutilisateur: 'SAB2', mois:'202004', libelle : f.libelleHF, date: f.date, montant: f.montantHF})
    })
    this.props.history.push('/bills')
}

handleRowsChange(e,i) {
	e.preventDefault()
	let {name, value} = e.target
	let rows = [...this.state.rows]
	rows[i] = {
		...rows[i],
		[name]: value
	}
	this.setState({
		rows : rows
	}, () => console.log(this.state.rows))
}



  render () {
    return (
	<body>
    <div class="d-flex flex-column h-100">
      <Header />
     
		 <div className="modal-header">
											<h5 className="modal-title">Modification de la fiche</h5>
											</div>
											<div className="modal-body">

																							
												<h3> Frais forfaitaires</h3>
												<div class="card border-primary py-3 px-3 mb-3">
													<div class="card-body">
														<table class="table text-center">
															<thead>
															<tr>
																<th scope="col">Frais forfaitaires</th>
																<th scope="col">Quantité</th>
																<th scope="col">Montant unitaire</th>
																<th scope="col">Total</th>
																
															</tr>
															</thead>
															<tbody>
															<tr>
																<td><label class="form-control-label"><strong>Nuitées</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="nightsQty" placeholder="Qte" value={this.state.nightsQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>80€</td>
																<td>{this.state.nightsQty * 80}€</td>
									
															</tr>
															<tr>
																<td><label for="" class="form-control-label"><strong>Repas</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="repasQty" placeholder="Qte" value={this.state.repasQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>29€</td>
																<td>{this.state.repasQty * 29}€</td>
															</tr>
															<tr>
																<td><label for="" class="form-control-label"><strong>Kilométrage</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="kmQty" placeholder="Qte" value={this.state.kmQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>0,8</td>
																<td>{(this.state.kmQty * 0.8).toFixed(2)}€</td>
															</tr>
															</tbody>
														</table>
													</div>
												</div>    
												
											

												<h3>Frais hors-forfaits</h3>
				
												<div class="card border-primary py-3 px-3">
													<div class="card-body">
														<table class="table text-center">
															<thead>
                                                            <tr>
																<td>
                                                                    <div className="fraishorsforfait">
												<button className = "btn btn-info" onClick={() => this.addRow()}>Ajouter frais hors forfait</button>
												</div></td>
															</tr>
															<tr>
																<th scope="col">Dates</th>
																<th scope="col">Libellé</th>
																<th scope="col">Montant</th>
																<th scope="col"> Justificatifs</th>
																
															</tr>
															</thead>
															<tbody>
																{ this.state.rows.map((r, i) => {
																	return (
																		<tr key={i}>
																			<th scope="row"><input type="date"/></th>
																			<td><input className="form-control form-control-sm" type="text" placeholder="qte"/></td>
																			<td><input type= "text" placeholder="Libelle"></input></td>
																			<td><input type="file"></input></td>
																			<td><button className="btn btn-danger btn-sm" onClick={() => this.removeRow(i)}>x</button></td>
																		</tr>
																	)
																})}

															
															</tbody>
														</table>
													</div>
												</div>
												
											</div>
											<div className="modal-footer">
											<button type="button" className="btn btn-secondary" onClick={ () => this.postFiche()}>
												Enregistrer
											</button>
											<button type="button" className="btn btn-primary" onClick={this.handleClose}>
												Annuler
											</button>
											</div>
										
                
      <Footer />

      </div>
	  </body>
    )
  }
}

export default CreateBill;










/*<tr>
                                                                <th scope="row"><input type="date"/></th>
                                                                <td><input className="form-control form-control-sm" type="text" placeholder="qte"/></td>
															    <td><input type= "text" placeholder="Libelle"></input></td>
																<td><input type="file"></input></td>
															</tr>*/