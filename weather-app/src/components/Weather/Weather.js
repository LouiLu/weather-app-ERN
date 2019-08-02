import React, { Component } from 'react';
import sunPic from '../../assets/img/sun.jpg';
import cloudPic from '../../assets/img/cloud.jpg';
import humidityPic from '../../assets/img/humidity.jpg';
import windPic from '../../assets/img/wind.jpg';
import visionPic from '../../assets/img/vision.jpg';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {
    const { currentWeather } = this.props.weather;

    return (
      <div className="app-weather p-4 rounded">
        <div className="row">
          <div
            className="card border-0"
            style={{ width: '30%', marginRight: '1rem' }}
          >
            <div className="card-body">
              {currentWeather ? (
                <div>
                  <h5>
                    {currentWeather.name}, {currentWeather.sys.country}
                  </h5>
                  <p className="text-weight-light text-muted">
                    <small>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${
                          currentWeather.coord.lat
                        },${currentWeather.coord.lon}`}
                      >
                        Get Direction
                      </a>
                    </small>
                  </p>
                  <p className="text-muted">
                    {currentWeather.weather[0].main} -{' '}
                    {currentWeather.weather[0].description}
                  </p>
                </div>
              ) : (
                <h5 className="card-title">Overview</h5>
              )}
            </div>
          </div>
          <div
            className="card border-0"
            style={{ width: '30%', marginRight: '1rem' }}
          >
            <img src={sunPic} className="card-img-top" alt="" />
            <div className="card-body">
              {currentWeather ? (
                <p className="text-warning">
                  Temperature - {(currentWeather.main.temp - 273.15).toFixed(2)}
                  &#8451;
                </p>
              ) : (
                <p className="text-muted">Temperature</p>
              )}
            </div>
          </div>
          <div className="card border-0" style={{ width: '30%' }}>
            <img src={cloudPic} className="card-img-top" alt="" />
            <div className="card-body">
              {currentWeather ? (
                <p className="text-muted">
                  Cloud - {currentWeather.clouds.all}
                </p>
              ) : (
                <p className="text-muted">Clouds</p>
              )}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div
            className="card border-0"
            style={{ width: '30%', marginRight: '1rem' }}
          >
            <img src={humidityPic} className="card-img-top" alt="" />
            <div className="card-body">
              {currentWeather ? (
                <p className="text-info">
                  Humidity - {currentWeather.main.humidity}%
                </p>
              ) : (
                <p className="text-muted">Humidity</p>
              )}
            </div>
          </div>
          <div
            className="card border-0"
            style={{ width: '30%', marginRight: '1rem' }}
          >
            <img src={windPic} className="card-img-top" alt="" />
            <div className="card-body">
              {currentWeather ? (
                <p className="text-primary">
                  Wind Speed - {currentWeather.wind.speed}
                </p>
              ) : (
                <p className="text-muted">Wind</p>
              )}
            </div>
          </div>
          <div className="card border-0 card-last" style={{ width: '30%' }}>
            <img src={visionPic} className="card-img-top" alt="" />
            <div className="card-body">
              {currentWeather ? (
                <p className="text-success">
                  Visibility - {currentWeather.visibility}
                </p>
              ) : (
                <p className="text-muted">Visibility</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(Weather);
