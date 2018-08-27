import React, {Component} from 'react';
import './white-card.css';

class WhiteCard extends Component {
	
	constructor(props) {
		super(props);
		
		console.log("WhiteCard.js Constructor");
		
		this.state = {whiteCards:[
			{
				"_id":	"123abc",
				"title": "69",
				"descr": "New followers added this month"
			},
			{
				"_id":	"12345abc",
				"title": "$ 40,425",
				"descr": "Average Monthly Income"
			},
			{
				"_id":	"32132ad",
				"title": "$ 485,048",
				"descr": "Yearly Income Goal"
			}			
		]};
		
		this.createWhiteCards = this.createWhiteCards.bind(this);	
			
	}
	
	createWhiteCards = () => {			
			const list = this.state.whiteCards.map((whiteCard) => 
					<div className="col-sm-4" key={whiteCard._id}>
					<div className="card whiteCard">
						<div className="card-block">
							<h4 className="card-title">{whiteCard.title}</h4>
								<p className="card-descr">
									{whiteCard.descr}</p>
						</div>
					</div>			
					</div>
			
			);									   
		
			return(list);	
	}	
	
	render() {
		return (
				<div className="col-sm-12">
					<div className="row">
						{ this.createWhiteCards() }		
					</div>
				</div>
		);
	}
}

export default WhiteCard;
