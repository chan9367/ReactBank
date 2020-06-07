import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';

class DebitsProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            DebitsData: [],
        };
    }

onClick = (event) => {
    event.preventDefault();
    axios.get("https://moj-api.herokuapp.com/debits")
    .then((response) => {
        this.setState({DebitsData: response.data});
        }
    ).catch((err) => console.log("error is: "+err));
}

  render() {
    return (
        <div>
          <h1>Debits Profile</h1>
          <Link to="/">Home</Link>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <div><button onClick={this.onClick}>Show Debits History</button></div>
          {this.state.DebitsData.map(data => {
              return (
              <div>
                  <ul>
                      <li>Description: {data.description}</li>
                      <li>Amount: {data.amount}</li>
                      <li>Date: {data.date}</li>
                  </ul>
              </div>
                    )
                }
             )
          }
        </div>
    );
  }
}

export default DebitsProfile;