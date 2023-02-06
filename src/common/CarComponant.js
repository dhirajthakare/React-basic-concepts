import React from "react";
class CarComp extends React.Component {
  cars = ["volvo", "BMW", "swift", "maruti", "scorpio", "fortuner"];
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      model: "E30 M3",
      color: "black",
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
  render() {
    return (
      <div className="m-2">
        <div className="col-md-6 row">
          <h4>My favorite cards</h4>
          <ul className="list-group list-group-flush">
            {this.cars.map((car) => (
              <li className="list-group-item" key={car}> {car} </li>
            ))}
          </ul>
        </div>

        <div className="row col-md-6">
          <div className="col-md-12">
            <h1>My {this.state.brand}</h1>
            <p>
              It is a {this.state.color} {this.state.model}
              from {this.state.year}.
            </p>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-danger form-control"
              onClick={this.changeColor}
            >
              Change color
            </button>
          </div>
        </div>
        <div>
    </div>
      </div>
    );
  }
}
export default CarComp;
