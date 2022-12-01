import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class Range extends Component{
    //call the constructor method
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            min : 0,
            max : 0,
            errorMsg: "",
            addFlag: false,
            airports : []
        }
        //Bind the handlers to this class
        this.minChangeHandler = this.minChangeHandler.bind(this);
        this.maxChangeHandler = this.maxChangeHandler.bind(this);
        this.submitRange= this.submitRange.bind(this);
    }
    //Call the Will Mount to empty the error message
    componentWillMount(){
        this.setState({
            addFlag: false
        })
    }
    //Min change handler to update state variable with the text entered by the user
    minChangeHandler = (e) => {
        this.setState({
            min : e.target.value
        })
    }
    //Max change handler to update state variable with the text entered by the user
    maxChangeHandler = (e) => {
        this.setState({
            max : e.target.value
        })
    }


    //submit Count handler to send a request to the backend
    submitRange = (e) => {
        //var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();

        //set the with credentials to true
        //axios.defaults.withCredentials = true;
        let uri = "https://yelpcamp.kinchang.com/api/airport/elevation/?min="+this.state.min+"&max="+this.state.max;
        console.log("uri : ",uri);

        //make a get request with the user data
        axios.get(uri)
            .then(response => {
                this.setState({
                    addFlag : true,
                    airports : this.state.airports.concat(response.data) 
                    });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    addFlag : false,
                    errorMsg : "Unknown error. See console"
                })
            });
    }

    render(){
        //if not logged in go to login page
        //let redirectVar = null;
        //if(!cookie.load('cookie')){
        //    redirectVar = <Redirect to= "/login"/>
        //} 
        //else if (this.state.addFlag) {
        //    redirectVar = <Redirect to= "/home"/>
        //}

        if (this.state.addFlag) {
            //iterate over books to create a table row
            let details = this.state.airports.map(airport => {
                return(
                    <tr>
                        <td>{airport.name}</td>
                        <td>{airport.type}</td>
                        <td>{airport.iso_country}</td>
                        <td>{airport.gps_code}</td>
                    </tr>
                )
            })

            return(
                <div>
                    <div class="container">
                        <h2>Results</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Country</th>
                                        <th>GPS Code</th>
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

        return(
            <div>
                <br/>
                <div class="container">
                    <form>
                        <p style={{color: 'red'}}>{this.state.errorMsg}</p>
                        <div style={{width: '30%'}} class="form-group">
                            <input onChange = {this.minChangeHandler} type="number" class="form-control" name="Min" placeholder="Min Value" min="1" required/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input onChange = {this.maxChangeHandler} type="number" class="form-control" name="Max" placeholder="Max Value" min="1" required/>
                        </div>
                        <div style={{width: '30%'}}>
                            <button onClick = {this.submitRange} class="btn btn-success" type="submit">Query</button>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
       
}

export default Range;