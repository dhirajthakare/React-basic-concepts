import React from "react";
import CarComp from "./CarComponant";
class SecondComponant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sirname: "Thakare" };
  }
  render() {
    return (
      <div className="card card-body">
        <div className="row">
          <div className="col-md-10">
            <h5 className="m-2">You personal details :- </h5>
            <div className="m-2 mt-3">
              <p> Your firstName is {this.props.name} </p>
              <p> Your father Name is {this.props.middleName} </p>
              <p> Your Sir Name is {this.state.sirname} </p>
            </div>
          </div>

          <div className="col-md-6">
            <CarComp color="gray" />
          </div>
        </div>
      </div>
    );
  }
}

export default SecondComponant;
