import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeather } from '../../actions';
import classNames from 'classnames';
import axios from 'axios';

class Form extends Component {
  state = {
    city: '',
    loading: false,
    errors: []
  };

  getWeather = async city => {
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: false });
      const api_call = await axios.get(`/api/weather/city=${city}`);
      if (api_call.data.weather) {
        const data = api_call.data.weather;
        this.props.setWeather(data);
      } else {
        const errorData = api_call.data.error;
        this.setState({ errors: this.state.errors.concat(errorData) });
      }
    } else {
      this.setState({
        loading: true
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getWeather(this.state.city);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isFormValid = ({ city }) => city;

  displayErrors = errs => errs.map((err, i) => <p key={i}>{err.message}</p>);

  render() {
    return (
      <div className="app-search">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid':
                  !this.isFormValid(this.state) && this.state.loading
              })}
              id="city"
              name="city"
              onChange={this.onChange}
              placeholder="Enter Your City..."
            />
          </div>
          <div className="form-group">
            <button className="btn btn-search btn-block">Search</button>
          </div>
          {this.state.errors.length > 0 ? (
            <div className="alert alert-warning">
              <strong>Error!</strong>
              {this.displayErrors(this.state.errors)}
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { setWeather }
)(Form);
