import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Debits from './Debits';
import Credits from './Credits';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to="/debitsProfile"><Debits accountDebits={this.props.accountDebits}/></Link>
          <Link to="/creditsProfile"><Credits accountCredits={this.props.accountCredits}/></Link>
          <div>
            <Link to="/login">Log In</Link>
          </div>
        </div>
        
    );
  }
}

export default Home;