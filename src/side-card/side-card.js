import React, {Component} from 'react';
import './side-card.css';

class SideCard extends Component {
	
	constructor(props) {
		super(props);

		console.log("SideCard.js Constructor");
		
		this.state = {sideCards: [
			{
				_id: "sc1",
				color: "#297373",
				value: "New visitors",
				descr: "1.5k"
			},
			{
				_id: "sc2",
				color: "#FFBA08",
				value: "Bounce Rate",
				descr: "50%"
			},
			{
				_id: "sc3",
				color: "#275DAD",
				value: "Searches",
				descr: "28%"
			},
			{
				_id: "sc4",
				color: "#D00000",
				value: "Traffic",
				descr: "140.5 kB"
			}			
			
		]};
		
		this.createSideCards = this.createSideCards.bind(this);			
	
	}
	
	
	createSideCards = () => {
		const list = this.state.sideCards.map((sideCard) =>
			<div className="card sideCard" key={sideCard._id}>
				<div className="card-block" style={{backgroundColor: sideCard.color}}>
					<div className="card-value">
						{sideCard.value}
					</div>
					<div className="card-descr">
						{sideCard.descr}
					</div>										
					
				</div>
			</div>											  
		);
											  
		return(list);
	}
	
	
	render() {
		return (		
			<div className="row">
				<div className="col-sm-12">	
					{ this.createSideCards() }
				</div>
			</div>		
			

		);
	}
}

export default SideCard;