//imports just Component from React libraries
import React, {Component} from 'react';
import './weather.css';

//when extends component can do local renders of html
class Weather extends Component {
    render() {
        //always have to do a return
        return(
            <div className="card weather">
                <div className="card-block">
                    <div className="temperature">18°</div>
                    <div className="city">Paris</div>
                </div> 
            </div>
        );
    }
}

export default Weather;