import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import DebitsProfile from './components/DebitsProfile';
import CreditsProfile from './components/CreditsProfile';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: "",
      accountDebits: 9999,
      accountCredits: 5678,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const HomeComponent = () => (
        <Home 
        accountBalance={this.state.accountCredits-this.state.accountDebits} 
        accountDebits={this.state.accountDebits} 
        accountCredits={this.state.accountCredits}
        />
        );
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const DebitsProfileComponent = () => (<DebitsProfile 
      accountBalance={this.state.accountCredits-this.state.accountDebits}
      accountDebits={this.state.accountDebits} 
      accountCredits={this.state.accountCredits}
      />);
    const CreditsProfileComponent = () => (<CreditsProfile 
      accountBalance={this.state.accountCredits-this.state.accountDebits}
      accountDebits={this.state.accountDebits} 
      accountCredits={this.state.accountCredits}
      />);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debitsProfile" render={DebitsProfileComponent}/>
            <Route exact path="/creditsProfile" render={CreditsProfileComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;