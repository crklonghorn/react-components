import React, {Component} from 'react';
import './main-card.css';

class MainCard extends Component {
	constructor(props) {
		super(props);
		
		console.log("MainCard.js Constructor");
		
		this.state = {mainCards: [
			{
				_id: "abc1",
				title: ["15080", "12000", "5100"],
				text: ["Show Views", "Likes", "Comments"],
				color: "#40BCD8"				
			},
			{
				_id: "abc2",
				title: ["29080", "6700", "7400"],
				text: ["Show Views", "Likes", "Comments"],
				color: "#FC5130"				
			}
		]};
		
		//Bind
		this.createMainCards = this.createMainCards.bind(this);
		
	}
	
	createMainCards = () => {
		const list = this.state.mainCards.map((mainCard) =>										  
			<div className="card mainCard" key={mainCard._id}>
			  <div className="bgColor" style={{backgroundColor: mainCard.color}}></div>
			  <div className="row">
				<div className="col-4">
					<div className="card-block" >
						<h4 className="card-title">{mainCard.title[0]} </h4>
						<p className="card-text">{mainCard.text[0]}</p>
			  		</div>
				</div>
  				<div className="col-4">
					<div className="card-block" >
						<h4 className="card-title">{mainCard.title[1]} </h4>
						<p className="card-text">{mainCard.text[1]}</p>
			  		</div>  					
  				</div>
				<div className="col-4">
					<div className="card-block" >
						<h4 className="card-title">{mainCard.title[2]} </h4>
						<p className="card-text">{mainCard.text[2]}</p>
			  		</div>
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
					{ this.createMainCards() }
				</div>
			</div>

		);
	}
}

export default MainCard;