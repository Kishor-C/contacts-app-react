import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';

class RegistrationForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {id:'', name : '', salary : ''}
  }
  handleChange(event) {
    let tempName = event.target.name;
    let tempValue = event.target.value;
    this.setState({[tempName]: tempValue});
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return(<div>
      <h3>Registration Form</h3>
      <form onSubmit = {this.handleSubmit}>
        Id : <input type = "text" name = "id" onChange = {this.handleChange}></input>
        <br/>
        Name : <input type = "text" name = "name" onChange = {this.handleChange}></input>
        <br/>
        Salary : <input type = "text" name = "salary" onChange = {this.handleChange}></input>
        <br/>
        <input type = "submit" value = "Submit"></input>
      </form>
      <Link to = "/login">Goto Login</Link>
    </div>)
  }
}

// Login Form
class LoginForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {id:'', name : ''}
  }
  handleChange(event) {
    let tempName = event.target.name;
    let tempValue = event.target.value;
    this.setState({[tempName]: tempValue});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/success/${this.state.id}`);
  }
  render() {
    return(<div>
      <h3>Login Form!</h3>
      <form onSubmit = {this.handleSubmit}>
        Id : <input type = "text" name = "id" onChange = {this.handleChange}></input>
        <br/>
        Name : <input type = "text" name = "name" onChange = {this.handleChange}></input>
        <br/>
        
        <input type = "submit" value = "Submit"></input>
      </form>
      <Link to = "/register">Register</Link>
    </div>)
  }
}

class Success extends Component {
  
  componentDidMount() {
    console.log('---component did mount---');
    console.log(this.props.match.params);
    console.log('---component did mount---');
  }
  render() {
    //console.log(this.props.match.url);
    return (<div>
      <div className = "row">
        <div className = "col-3">
          <h6 className = "text-center">Profile Summary</h6>
          <hr />
          <p>Id: {this.props.match.params.id}</p>
        </div>
        <div className = "col-1">

        </div>
        <div className = "col-8">
        <h6>This is success component : {this.props.match.params.id}</h6>
        <hr/>
          <Link to = {this.props.match.url+'/dashboard'}>Dashboard</Link> / 
          <Link to = {this.props.match.url+'/addContacts'}>Add Contact</Link> /
          <Link to = {this.props.match.url+'/showAll'}>Show Contacts</Link> /
          <Link to = {this.props.match.url+'/update'}>Update</Link> 
          
          <Route exact path = {this.props.match.path} component = {Dashboard}></Route>
          <Route path = {this.props.match.path+"/dashboard"} component = {Dashboard}></Route>
          <Route path = {this.props.match.path+"/addContacts"} component = {AddContacts}></Route>
          <Route path = {this.props.match.path+"/showAll"} component = {ShowContacts}></Route>
          <Route path = {this.props.match.path+"/update"} component = {UpdateProfile}></Route>
        </div>
      </div>

      
    </div>);
  }
}

class Dashboard extends Component {
  render() {
    return(<div>
      <h6>Dashboard of {this.props.match.params.id}</h6>
    </div>)
  }
}
class AddContacts extends Component {
  render() {
    return(<div>
      <h6>Add Contacts of {this.props.match.params.id}</h6>
    </div>)
  }
}
class ShowContacts extends Component {
  render() {
    return(<div>
     <h6>Show All Contacts of {this.props.match.params.id}</h6>
    </div>)
  }
}
class UpdateProfile extends Component {
  render() {
    console.log('update profile', this.props.match.params);
    return(<div>
      <h6>Update Profile of {this.props.match.params.id}</h6>
    </div>)
  }
}
class App extends Component {
  render() {
    return (
    <div className = "container-fluid">
      <h1 className = "text-center">Contact Hub in React</h1> <hr />
      <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {RegistrationForm}></Route>
        <Route path = "/register" component = {RegistrationForm}></Route>
        <Route path = "/login" component = {LoginForm}></Route>
        <Route path = "/success/:id" component = {Success}></Route>
      </Switch>
      </BrowserRouter>
    </div>
    );
  }
}
export default App;
