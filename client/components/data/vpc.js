import React from 'react';
import axios from 'axios';

import { browserHistory } from 'react-router';

class dataIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'test',
      isOpen: false
    }
    this.saveData = this.saveData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.readAccounts = this.readAccounts.bind(this);
  }

  componentWillMount() {
    // This is empty right now
    this.readAccounts()
  }

  componentDidMount() {
  }

  handleChange(event) {
      this.state.test = event.target.value;
      event.preventDefault()
    }

  readAccounts() {
    axios.get('/accounts')
      .then((response) => {
        this.setState({ accounts: response.data });
      });
  }

saveData(accountNumber, vpcName, description) {
  var bodyOut = { accountNumber, vpcName,  description }
  axios.post('/vpcs', bodyOut)
    .then((response) => {
      console.log(response.data);
      this.refs.accountNumber.value = ""
      this.refs.description.value = ""
      this.refs.VPC.value = ""
      this.setState({ results: response.data });
    });
}


  render() {
    if (this.state.accounts) {
      this.accounts = this.state.accounts.map((item, key) =>
        <option key={item._id}>{item.accountNumber}</option>
      );
    }
    return (
      <div>
        <div className="row paddingTop20px">
          <div className="col-sm-1"></div>
            <div className="col-sm-9">
              <form>
                <div className="form-group">
                  <label htmlFor="accountNumber">Account Number</label>
                  <select className="form-control" id="accountNumber" ref="accountNumber">
                    {this.accounts}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="VPC">VPC Name</label>
                  <input type="text" className="form-control" id="VPC" ref="VPC" aria-describedby="vpcHelp" />
                  <small id="vpcHelp" className="form-text text-muted">Your VPC Name</small>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="description" ref="description" aria-describedby="descHelp" placeholder="" />
                  <small id="descHelp" className="form-text text-muted">VPC description</small>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => { this.saveData(
                  this.refs.accountNumber.value,
                  this.refs.VPC.value,
                  this.refs.description.value,
                ); }}>Add!</button>
              </form>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-9">
              {this.state.results}
            </div>
          </div>
      </div>
    );
  }

}

export default dataIn;
