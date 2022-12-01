import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class Count extends Component{
    //call the constructor method
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            countries : []
        }
    }

    componentDidMount(){
        axios.get('https://yelpcamp.kinchang.com/api/airport/country_count')
                .then((response) => {
                //update the state with the response data
                this.setState({
                    countries : this.state.countries.concat(response.data)
                });
            });
    }

    render(){
         //iterate over books to create a table row
         let details = this.state.countries.map(country => {
             return(
                 <tr>
                     <td>{country.id}</td>
                     <td>{country.count}</td>
                 </tr>
             )
         })

         return(
             <div>
                 <div class="container">
                     <h2>Number of Airports by Country</h2>
                         <table class="table">
                             <thead>
                                 <tr>
                                     <th>Country Code</th>
                                     <th>Airport Count</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {/*Display the Tbale row based on data recieved*/}
                                 {details}
                             </tbody>
                         </table>
                 </div> 
             </div> 
         )
    }
}

export default Count;