import React from 'react'
import './BillsList.css';
import * as fromBillsApi from '../../api/bills';
// import {Row, Button,Col, Form, Card} from "react-bootstrap";
import Modal from 'react-bootstrap4-modal';	
import {withRouter} from 'react-router-dom'


class BillsList extends React.Component {

  constructor(props){
    super(props)

	this.state = {
		visible:false,
		rows: [],
		kmQty: 0 ,
		nightsQty : 0,
		repasQty : 0,
		libelle: 0,
		price: 0,
		bills: []

	}

	 this.handleClose = this.handleClose.bind(this);
     this.showModal = this.showModal.bind(this);

  }




  /* FAIRE UN BOUTON QUI OUVRE UN MODAL
  TAPER DANC NAAVIGATEUR => REACT MODAL BOOTSTRAP
  ATTENTION NE RIEN INSTALLER */

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
    let km = await fromBillsApi.postBills({idutilisateur: 'SAB' , mois:'202103', idFraisForfait:'KM', quantite:this.state.kmQty})
    let meals = await fromBillsApi.postBills({idutilisateur: 'SAB', mois:'202103', idFraisForfait:'REP', quantite:this.state.mealsQty})
    let nigths = await fromBillsApi.postBills({idutilisateur: 'SAB', mois:'202103', idFraisForfait:'NUI', quantite:this.state.nightsQty})
    this.state.rows.map(async (f, i) => {
        let horsforfait = await fromBillsApi.postBillsHF({idutilisateur: 'b132', mois:'202004', libelle : f.libelleHF, date: f.date, montant: f.montantHF})
    })
	this.handleClose()
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

	


//   renderModal() {

// 	return (
// 		<Modal show={this.state.show} onHide={this.handleClose} backdrop="static">
// 			<Modal.Header> 
// 				<Modal.Title>Modification fiche</Modal.Title>
// 				<Button variant="danger btn-sm " onClick={this.handleClose}></Button>
// 				<i class="fas fa-times"></i>
// 			</Modal.Header>
// 			<Modal.Body> 

// 			</Modal.Body>
// 			<Modal.Footer>
// 				<Button variant="primary" onClick={this.handleClose}>
// 					Enregistrer
// 				</Button>
// 				<Button variant="danger" onClick={this.handleClose}>
// 					Annuler
// 				</Button>
// 			</Modal.Footer>
// 		</Modal>
// 	)

// }

  render () {
    return (
    
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
										{
											this.state.bills.map((bill,i) => {
												return(
													<tr>
													<td> {bill.mois} </td>
													<td> {bill.nbJustificatifs}</td>
													<td> {bill.montantValide}</td>
													<td> {bill.dateModif}</td>
													<td> {bill.idEtat}</td>
													<td>
														<button type="button" class="btn btn-info" onClick={this.showModal}>Modifier</button>
													</td>

													</tr>
												)
											})
										} 

									  <tr>
										<td> </td>
										<td> </td>
										<td> </td>
										<td> </td>
										<td> </td>
										<td>
											<button type="button" class="btn btn-info">Modifier</button>
										</td>

									  </tr>
									  <tr>
										<td> </td>
										<td> </td>
										<td> </td>
										<td> </td>
										<td> </td>
										<td> 
											{ <button type="button" class="btn btn-info" >Modifier</button> }
											
										</td>

									  </tr>
								
							
									</tbody>
								  </table>
										<Modal dialogClassName="center modal-80w modal-dialog-scrollable modal-dialog-scrollable" visible={this.state.visible} onClickBackdrop={() => this.showModal()} >
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
																<th scope="col">Actions</th>
															</tr>
															</thead>
															<tbody>
															<tr>
																<td><label class="form-control-label"><strong>Nuitées</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="nightsQty" placeholder="Qte" value={this.state.nightsQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>80€</td>
																<td>{this.state.nightsQty * 80}</td>
																<td>
																	<button type="button" class="btn btn-danger btn-sm mr-2" data-action="delete" data-target="">
																		<i class="fas fa-trash"></i>
																	</button>
																	<button type="button" class="btn btn-success btn-sm" data-action="delete" data-target="">
																		<i class="fas fa-edit"></i>
																	</button>

																</td>
															</tr>
															<tr>
																<td><label for="" class="form-control-label"><strong>Repas</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="repasQty" placeholder="Qte" value={this.state.repasQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>29€</td>
																<td>{this.state.repasQty * 29}</td>
															</tr>
															<tr>
																<td><label for="" class="form-control-label"><strong>Kilométrage</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="kmQty" placeholder="Qte" value={this.state.kmQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>0,8</td>
																<td>{(this.state.kmQty * 0.8).toFixed(2)}</td>
															</tr>
															</tbody>
														</table>
													</div>
												</div>    
												
											

												<h3>Frais hors-forfaits</h3>
												<div className="fraishorsforfait">
												<button className = "btn btn-info" onClick={() => this.addRow()}>Ajouter frais hors forfait</button>
												</div>
												<div class="card border-primary py-3 px-3">
													<div class="card-body">
														<table class="table text-center">
															<thead>
															<tr>
																<th scope="col">Dates</th>
																<th scope="col">Libellé</th>
																<th scope="col">Montant</th>
																<th scope="col"> Justificatifs</th>
																<th scope="col"> Actions</th>
															</tr>
															</thead>
															<tbody>
																{ this.state.rows.map((r, i) => {
																	return (
																		<tr key={i}>
																			<th scope="row"><input type="date" value={this.state.rows[i].date}onChange={(e) => this.handleRowsChange(e,i)}/></th>
																			<td><input className="form-control form-control-sm" type="text" placeholder="qte"/></td>
																			<td><input type= "text" placeholder="Libelle" name="libelle" value={this.state.rows[i].libelle} onChange={(e)=> this.handleRowsChange(e,i)} ></input></td>
																			<td><input type="file" name="price" value={this.state.rows[i].price} onChange={(e) => this.handleRowsChange(e,i)}></input></td>
																			<td><button className="btn btn-danger btn-sm" onClick={() => this.removeRow(i)}>x</button></td>
																		</tr>
																	)
																})}
															<tr>
																<td><input type="date"/></td>
																<td><input type="text"/></td>
																<td><input type="number"/></td>
																<td> <input type="file"/></td>
																<td>
																	<button type="button" class="btn btn-danger btn-sm mr-2" data-action="delete" data-target="">
																		<i class="fas fa-trash"></i>
																	</button>
																	<button type="button" class="btn btn-success btn-sm" data-action="delete" data-target="">
																		<i class="fas fa-edit"></i>
																	</button>

																</td>
															</tr>
															<tr>
																<td><input type="date"/></td>
																<td><input type="text"/></td>
																<td><input type="number"/></td>
																<td> <input type="file"/></td>
															</tr>
															<tr>
																<td><label for="" class="form-control-label"></label></td>
															</tr>
															</tbody>
														</table>
													</div>
												</div>
												
											</div>
											<div className="modal-footer">
											<button type="button" className="btn btn-secondary" onClick={() => this.postFiche()}>
												Enregistrer
											</button>
											<button type="button" className="btn btn-primary" onClick={this.handleClose}>
												Annuler
											</button>
											</div>
										</Modal>
        </div>
		{/* <Col>
                    {this.renderModal()}
         </Col> */}
      </main>
      
  
    )
  }
}

export default withRouter(BillsList);
