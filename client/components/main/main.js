import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Tf from '../data/data'
import Nav from '../nav/nav';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main'
    }
    this.loadS3 = this.loadS3.bind(this);
    this.loadMain = this.loadMain.bind(this);
  }

  componentWillMount() {
    // This is empty right now
  }

  componentDidMount() {
  }

  loadS3 = (e) => {
      e.preventDefault()

      this.setState({ view: "s3" })
    }
  loadMain = (e) => {
      e.preventDefault()

      this.setState({ view: "main" })
    }


  render() {
    let middle
    if (this.state.view === "s3") {
      middle = <Tf />
    } else {
      middle = <div />
    }
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-sm-2">
          </div>
          <div className="col-sm-10">
            <button type="button" className="btn btn-primary" onClick={this.loadMain}>Main</button>
            <button type="button" className="btn btn-primary" onClick={this.loadS3}>Data</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {middle}
          </div>
        </div>
      </div>
    );
  }

}


Main.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default Main;