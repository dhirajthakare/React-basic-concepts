import React from "react";
import './style.css';
import cssModule from './My-style.module.css';

import { memo } from "react";
class CarComp extends React.Component {
  cars = ["volvo", "BMW", "swift", "maruti", "scorpio", "fortuner"];
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      model: "E30 M3",
      color: props.color,
      year: 1994,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return 0;
    // return {favoritecolor: props.favcol };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  handleMultiSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
  };

  render() {
    return (
      <div className="m-2">
        <div className="col-md-6 row">
          <h4 className={cssModule.myclass}>My favorite cards</h4>
          <ul className="list-group list-group-flush">
            {this.cars.map((car) => (
              <li className="list-group-item" key={car}> {car} </li>
            ))}
          </ul>
        </div>

        <div className="row col-md-6">
          <div className="col-md-12">
            <h1>My {this.state.brand}</h1>
            <p style={{color:this.state.color,fontWeight:'bold'}} >
              It is a {this.state.color} {this.state.model}
              from {this.state.year}.
            </p>
          </div>
          <div className="col-md-12">
          <form className="my-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label>Enter Color name :</label>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                value={this.state.color}
                onChange={(e) => this.setState({color:e.target.value})}
              />
            </div>
            <div>
            <button
              type="button"
              className="btn btn-secondary form-control"
              onClick={this.changeColor}
            >
              Change color
            </button>
            </div>
            <h6>Your car Color is {this.state.color} </h6>
          </div>
        </form>
            
          </div>
        </div>
        <div>
    </div>
      </div>
    );
  }
}
export default memo(CarComp);
